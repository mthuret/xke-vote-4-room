import React   from 'react';
import ReactDOM   from 'react-dom';
import TestUtils   from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import spy from 'expect';
import wrap from '../wrapper'
import { Slot } from 'components/ChooseSlotsView/Slot';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import styles from 'material-ui/lib/styles';

const colors = styles.Colors;

var Wrapper = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

describe('Slot component - the test utils dom output approach', () => {

  function setup() {
    let props = {
      period: 'period',
      talks: [{
        id: 2,
        text: 'description talk 2',
        fondation: 'Back',
        selected: false
      },
        {
          id: 3,
          text: 'description talk 3',
          fondation: 'Craft',
          selected: false
        }],
      onClick: spy.createSpy()
    };

    const component = TestUtils.renderIntoDocument(<Wrapper><Slot {...props}/></Wrapper>); //sees https://www.linkedin.com/pulse/react-components-proper-unit-testing-patrick-van-vuuren

    return {
      props,
      component
    };
  }

  it('Structure', () => {
    const {component} = setup();

    let talks = TestUtils.scryRenderedDOMComponentsWithClass(component, 'talk');
    expect(talks.length).to.equal(2);

    expect(talks[0].textContent).to.contain('description talk 2');
    expect(talks[0].textContent).to.contain('Back');

    expect(talks[1].textContent).to.contain('description talk 3');
    expect(talks[1].textContent).to.contain('Craft');

    talks = TestUtils.findRenderedComponentWithType(component, List);

    let talksItem = TestUtils.scryRenderedComponentsWithType(component, ListItem);
    //console.log(talksItem[0].props); //chiant à lire

    expect(talksItem[0].props.id).to.equal('talk2');
    expect(talksItem[0].props.className).to.equal('talk');
    expect(talksItem[0].props.primaryText).to.equal('description talk 2');
    expect(talksItem[0].props.leftAvatar.props.backgroundColor).to.equal(colors.red400);

    //comparer avec shallow rendering
    //présenter l'api dom testing
  });

  it('Behavior', () => {
    const {component, props} = setup();

    let talks = TestUtils.scryRenderedDOMComponentsWithClass(component, 'talk');

    expect(props.onClick.calls.length).to.equal(0);

    TestUtils.Simulate.click(talks[0]);

    expect(props.onClick.calls.length).to.equal(1);
  });

});

