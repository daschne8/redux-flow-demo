export default function simpleReducer(
  state = {count: 0}, action
  ){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: (state.count + action.amount)}
    default:
      return state
  }
}
