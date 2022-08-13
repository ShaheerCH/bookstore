const CHECK = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK,
});

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export default checkReducer;
