const initialState = [];

const listAllBook = (state = initialState, action) => {
  if (action.type == "SET_LIST_BOOK") {
    if (Array.isArray(action.payload)) return action.payload;
  }

  return state;
};

export default listAllBook;