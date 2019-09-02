export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, { ...action.course }]; // avoid mutating the state

    default: //always important to set a default option in reducers
      return state;
  }
}
