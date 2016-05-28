import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TalkProgressBar from '../VotingResultsView/TalkProgressBar';

storiesOf('Votes', module)
  .add('No Results Yet', () => {
      return getTalkProgressBar("Mon super talk", 0, "Craft", null);
    }
  )
  .add('Votes in progress', () => {
      return getTalkProgressBar("Mon super talk", 30, "Craft", null);
    }
  )
  .add('Votes ended', () => {
      return getTalkProgressBar("Mon super talk", 30, "Craft", "Monceau");
    }
  );

function getTalkProgressBar(text, attendees, fondation, room) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <TalkProgressBar text={text} attendees={attendees} fondation={fondation} room={room}/>
      </div>
    </div>
  );
}
