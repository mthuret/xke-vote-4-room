export const slots = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_TALK':
      return state.map(s =>
        slot(s, action)
      );
    case 'INIT_STATE':
      return [...state, ...action.initState];
    default:
      return state;
  }
};

const slot = (state, action) => {
  switch (action.type) {
    case 'SELECT_TALK':
      if (state.period !== action.period) {
        return state;
      }
      return {
        ...state, talks: state.talks.map(t =>
          talk(t, action)
        )
      };
    default:
      return state;
  }
};

const talk = (state, action) => {
  switch (action.type) {
    case 'SELECT_TALK':
      return state.id !== action.talkId ? {...state, selected: false} : {...state, selected: true};
    default:
      return state;
  }
};
