export default function Validate(value) {
  let errors = {};

  // if(!value.fullname) {
  //     errors.fullname = 'This field is required'
  // }

  // if(!value.email) {
  //     errors.email = 'This field is required'
  // }

  // if(!value.email) {
  //     errors.email = 'This field is required'
  // } else if(!/\S+@\S+\.\S+/.test(value.email)){
  //     errors.email = 'email is invalid'
  // }

  // if(!value.password) {
  //     errors.password = 'This field is required'
  // } else if(value.password.length < 6) {
  //     errors.password = 'Password must contain at least six characters'
  // } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value.password)){
  //     errors.password = 'Password is invalid'
  // }
  if (!value.fullname) {
    errors.fullname = "This field is required";
  } else if (!value.email) {
    errors.email = "This field is required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email is invalid";
  } else if (!value.password) {
    errors.password = "This field is required";
  } else if (value.password.length < 6) {
    errors.password = "Password must contain at least six characters";
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/.test(value.password)
  ) {
    errors.password = "Password is invalid";
  } else if (value.status) {
    errors.status = "Email already exists.";
  }
  return errors;
}
