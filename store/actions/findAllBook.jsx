import listAllBook from "../reducers/listAllBook";

export const findAllBook = () => {
  return (dispatch) => {
    dispatch(setListBook());
  }
}

export const setListBook = (payload) => {
  return {
    type: "SET_LIST_BOOK",
    payload
  };
};