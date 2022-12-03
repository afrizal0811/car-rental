export default function Validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  } else if (!values.password) {
    errors.password = "This field is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must contain at least six characters";
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/.test(values.password)
  ) {
    errors.password = "Password is invalid";
  } else if (values.status) {
    errors.status = "Failed! Check email and password.";
  }
  // let val = localStorage.getItem('userDetails');
  // let object = JSON.parse(val);

  // if(values.email !== object.email) {
  //     errors.email = 'Email is invalid'
  // };

  // if(values.password !== object.password) {
  //     errors.password = 'Wrong password'
  // };

  return errors;
}
