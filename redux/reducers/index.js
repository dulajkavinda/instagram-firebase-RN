export default (state = 115, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUBTRACT':
      return state - 1
    default:
      return state
  }
}
