export function reducer(state, { type, payload }) {
  switch(type) {
    case 'CLOSE_ALERT': 
      return {
        ...state,
        alertName: '',
      }

    default:
      return state;
  }
}