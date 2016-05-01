import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import spy from 'expect';

import { Slot } from 'components/ChooseSlotsView/Slot';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import styles from 'material-ui/lib/styles';

import {SLOT_WITH_NO_TALKS_SELECTED} from 'components/stories-bck/slot';

const colors = styles.Colors;

function setup() {
  let output = shallow(SLOT_WITH_NO_TALKS_SELECTED);

  return {
    output
  };
}

describe('Slot component - the living documentation approach', () => {
  it('Living documentation Storybook', function () {
    const { output } = setup();

    let talk = output.find(ListItem);

    expect(talk).to.have.length(2);
    expect(talk.first().prop('primaryText')).to.equal('This My Super Pitch');

    let avatar = talk.first().prop('leftAvatar');

    console.log(avatar.props);
    expect(avatar.props.children).to.equal('Back');
  });

});

