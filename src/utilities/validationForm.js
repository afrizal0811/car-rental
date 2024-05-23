const validateForm = (value) => {
  let errors = {}
  const invalidEmail = (data) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data)
  if (!value.email) {
    errors.email = 'This field is required'
  } else if (!value.password) {
    errors.password = 'This field is required'
  // } else if (!value.confirmPassword) {
  //   errors.confirmPassword = 'This field is required'
  } else if (!invalidEmail(value.email)) {
    errors.email = 'Invalid email'
  } else if (value.password.length < 6) {
    errors.password = 'Password must contain at least six characters'
  // } else if (value.password !== value.confirmPassword) {
  //   errors.confirmPassword = "Password did't match"
  }
  return errors
}

export default validateForm
