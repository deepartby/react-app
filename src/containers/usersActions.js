export const addUserA = user => ({
  type: 'ADD_USER',
  user
})

export const deleteUserA = id => ({
  type: 'DELETE_USER',
  id
})

export const setActiveUserA = user => ({
  type: 'SET_ACTIVE_USER',
  user
})

export const getUserA = id => ({
  type: 'GET_USER',
  id
})