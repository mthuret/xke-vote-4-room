import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Slot from '../ChooseSlotsView/Slot';

export const SLOT_WITH_NO_TALKS_SELECTED = getSlot('15h35-17h18',
  [{ id: 2, text: 'This My Super Pitch', fondation: 'Back', selected: false}, { id: 3, text: 'This my second xke', fondation: 'Craft', selected: false}]);

export const SLOT_WITH_ONE_TALKS_SELECTED = getSlot('15h35-17h18',
  [{ id: 2, text: 'This My Super Pitch', fondation: 'Devops', selected: true}, { id: 3, text: 'This my second xke', fondation: 'Agile', selected: false}]);

storiesOf('Slots', module)
  .add('with talks but none selected', () => {
    return SLOT_WITH_NO_TALKS_SELECTED;
  })
  .add('with talks and one selected', () => {
    return SLOT_WITH_ONE_TALKS_SELECTED;
  });

function getSlot(period, talks) {
  const onClick = action('onClick');
  const refreshSlot = action('refreshSlot');

  return (
      <Slot period={period} talks={talks} onClick={onClick} refreshSlot={refreshSlot}/>
  );
}
