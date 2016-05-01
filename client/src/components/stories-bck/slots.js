import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Slots from '../ChooseSlotsView/Slots';

storiesOf('Slots', module)
  .add('Multiple Slots', () => {
      return getSlots([
        {
          period: '10h00-11h00',
          talks: [{id: 2, text: 'This My Super Pitch', fondation: 'Back', selected: false}, {id: 3, text: 'This my second xke', fondation: 'Craft', selected: false}]
        },
        {
          period: '11h00-12h00',
          talks: [{id: 4, text: 'This My Super Pitch', fondation: 'Back', selected: false}, {id: 4, text: 'This my second xke', fondation: 'Craft', selected: false}]
        }]);
    }
  );

function getSlots(slots) {
  const onClick = action('onClick');
  const refreshSlot = action('refreshSlot');

  return (
    <div className='xkeapp'>
      <Slots slots={slots} selectTalk={onClick} refreshSlot={refreshSlot}/>
    </div>
  );
}
