const validateEmail = email => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

export const validateNumber = text => {
  const re = /^[0-9\b]+$/;
  return re.test(text);
};

export default validateEmail;
