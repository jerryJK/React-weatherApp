import { GET_DATA } from '../constants';


export default (state = [], action) => {
  switch(action.type) {
    case GET_DATA:
      return [...state, action.payload.data];
    default:
      return state;
  }
}
