const counterReducer = (state = { count: 0, increment: 1 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: Math.min(state.count + action.delta, action.limit), increment: state.increment }
    case 'DECREMENT':
      return { count: Math.max(state.count - action.delta, action.limit), increment: state.increment } 
    case 'INCREMENT2':
      return { count: Math.min(state.count + action.increment, action.limit), increment: action.increment }
    case 'DECREMENT2':
      return { count: Math.max(state.count - action.increment, action.limit), increment: action.increment } 
    case 'RESET':
      return {count: 0, increment: state.increment}
    default:
      return state
  }
}

export default counterReducer
