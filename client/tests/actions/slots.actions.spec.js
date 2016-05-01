import {selectTalk} from 'actions/slotsActions';
import {expect} from 'chai';

describe('Actions', function(){
    it('returns action SELECT_TALK info', function(){
      // execute
      const action = selectTalk('14H-15H', 4);

      // verify
      expect(action).to.deep.equal({
        type: 'SELECT_TALK',
        period: '14H-15H',
        talkId: 4
      });
    });
});
