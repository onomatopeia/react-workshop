const INITIAL_STATE = {
  messages: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      // @TODO: actually update the state
      return state

    default:
      return state
  }
}

export default reducer
