import { Storeuser } from "../localstore/localstore";
import { useState } from "react";
import { useNavigate } from "react-router";
import Validate from "./validation";
import axios from "axios";
import Cookies from "js-cookie";

export default function Handlebutton() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmited] = useState(false);
  const [value, setValue] = useState({
    email: "",
    password1: "",
    password2: "",
  });

  var axiosConfig = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/customer/auth/register`,
    headers: {
      Content: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      ...value,
    }),
  };

  const createUser = async () => {
    if (value.password1.length >= 6 && value.password2.length >= 6) {
      if (value.password1 == value.password2) {
        let newEmail = value.email;
        let newPassword = value.password1;
        setValue({ ...value, email: newEmail, password: newPassword });
      }
    }
    axios(axiosConfig)
      .then(function (response) {
        Cookies.set("isRegis", "true", { expires: 1 / 3 });
        Storeuser(JSON.stringify(response.data));
        navigate("/login");
      })
      .catch((e) => {
        if (e.response.status >= 400) {
          let status = {
            ...value,
            status: e.response.status,
          };
          setErrors(Validate(status));
        }
      });
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(value));
    setSubmited(true);
    createUser();
  };

  return { handleChange, handleSubmit, value, errors, submitted };
}
