import { UPDATE_FORM, RESET_FORM } from './action';

const initialState = {
  name: '',
  email: '',
  age: '',
  college: '',
  address: '',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default formReducer;