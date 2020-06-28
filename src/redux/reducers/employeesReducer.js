import { GET_EMPLOYEES, GET_EMPLOYEES_PENDING, GET_EMPLOYEES_SUCCEEDED, GET_EMPLOYEES_FAILED } from '../actionTypes';

const initialState = {
  employeeList: [],
  employeeListPending: false,
  employeeListError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EMPLOYEES: {
      return {
        ...state,
        employeeListPending: true,
        employeeListError: null,
      };
    }
    case GET_EMPLOYEES_SUCCEEDED: {
      return {
        ...state,
        employeeListPending: false,
        employeeListError: null,
        employeeList: payload.data,
      };
    }
    case GET_EMPLOYEES_FAILED: {
      return {
        ...state,
        employeeListPending: false,
        employeeListError: payload.message,
      };
    }
    default:
      return state;
  }
};
