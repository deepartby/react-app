import Users from "../infrastructure/Mocks";

const users = (state = {users: Users}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case 'DELETE_USER':
      return {
        ...state, 
        users: state.users.filter(user =>
        (action.id !== user.id)
      )};
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUser: action.user
      };
    default:
      return state
  }
};

export default users
