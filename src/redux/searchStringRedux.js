

 
// selectors
export const getSearchString = state => state.searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createActionSearchString = payload => ({ payload: payload, type: CHANGE });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

