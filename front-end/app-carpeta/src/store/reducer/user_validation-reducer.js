const validationReducer = (state, action) => {
  switch (action.type) {
    case "VALIDATE":
      return action.idValidationInfo;
    case "LOGIN":
      return {
        ...state,
        ...action.payload
      }
    default:
      throw new Error();
  }
}

export default validationReducer;