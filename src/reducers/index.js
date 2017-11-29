const SAVE_FORM = "SAVE";

const initialState = {
  company_name: "",
  company_city: "",
  company_address: "",
  employee_name: "",
  employee_email: "",
  employee_phone_number: "",
  local: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_FORM:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
