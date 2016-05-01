import React from 'react';
import { expect } from 'chai';
import spy from 'expect';
import $ from 'teaspoon';

import { Slot } from 'components/ChooseSlotsView/Slot';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import styles from 'material-ui/lib/styles';

const colors = styles.Colors;

function setup() {
  let props = {
    period: 'period',
    talks: [{
      id: 2,
      text: 'text',
      fondation: 'Back',
      selected: false
    },
      {
        id: 3,
        text: 'text',
        fondation: 'Craft',
        selected: false
      }],
    onClick: spy.createSpy()
  };

  let output = $(<Slot {...props} />)
    .shallowRender();

  return {
    props,
    output
  };
}

describe('lot component - the teaspoon shallow/dom output approach', () => {

  it('Structure', function () {
    const { props } = setup();

    $(<Slot {... props} />)
      .shallowRender()
      .tap(collection => {
        collection
          .find(ListItem)
          .first()
          .props('primaryText')
          .should.equal('text')
        ;
      });

    $(<Slot {... props} />)
      .render()
      .tap(collection => {
        collection
          .find(ListItem)
          .first()
          .text()
          .should.contains('text');
      })
      .unmount()
      .shallowRender()
      .tap(collection => {
        collection
          .find(ListItem)
          .first()
          .props('primaryText')
          .should.equal('text');
      });

  });

  it('Behavior', function () {
    const { props } = setup();

    $(<Slot {... props} />)
      .shallowRender()
      .tap(collection => {
        collection
          .find(ListItem)
          .first()
          .trigger('click')
        ;
      });

    expect(props.onClick.calls.length).to.equal(1);

  });

})
;
