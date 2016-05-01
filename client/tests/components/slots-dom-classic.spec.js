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

describe('Slot component - the static output approach', () => {

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

    const component = TestUtils.renderIntoDocument(new Slot(props)); //sees https://www.linkedin.com/pulse/react-components-proper-unit-testing-patrick-van-vuuren
    const renderedDOM = ReactDOM.findDOMNode(component);

    return {
      props,
      renderedDOM,
      component
    };
  }

  it('Structure', () => {
    const {renderedDOM} = setup();

    let talks = renderedDOM.querySelectorAll('.talk');
    expect(talks.length).to.equal(2);

    let talk2 = renderedDOM.querySelector('#talk2'); //sees http://www.w3schools.com/jsref/dom_obj_all.asp

    expect(talk2.textContent).to.contain('description talk 2');
    expect(talk2.textContent).to.contain('Back');

    let talk3 = renderedDOM.querySelector('#talk3');

    expect(talk3.textContent).to.contain('description talk 3');
    expect(talk3.textContent).to.contain('Craft');
  });

  it('Behavior', () => {
    const {renderedDOM, props} = setup();

    let talk2 = renderedDOM.querySelector('#talk2'); //sees http://www.w3schools.com/jsref/dom_obj_all.asp

    expect(props.onClick.calls.length).to.equal(0);

    TestUtils.Simulate.click(talk2);

    expect(props.onClick.calls.length).to.equal(1);
  });

});
