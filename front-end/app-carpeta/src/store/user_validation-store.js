const userValidation = {
  id_number: undefined,
  isValid: false,
};

const validationReducer = (state = userValidation, action) => {
  switch (action.type) {
    case "VALIDATE":
      return action.idValidationInfo;
    default:
      throw new Error();
  }
}

export default userValidation;