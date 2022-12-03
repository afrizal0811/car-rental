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
    fullname: "",
    email: "",
    password: "",
  });

  // const setUsers = [];
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const resp = await fetch("https://bootcamp-rent-cars.herokuapp.com/", {
  //       method: "GET",
  //     });
  //     const users = await resp.json();

  //     setUsers(users.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  var axiosConfig = {
    method: "post",
    url: "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
    headers: {
      Content: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      ...value,
    }),
  };

  const createUser = async () => {
    axios(axiosConfig)
      .then(function (response) {
        Cookies.set("isRegis", 'true', { expires: 1 / 3 });
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

  // const createUser = async () => {
  //   try {
  //     const resp = await fetch(
  //       `https://bootcamp-rent-cars.herokuapp.com/customer/auth/register`,
  //       {
  //         method: "POST",
  //         headers: { "Content-type": "application/json" },
  //         body: JSON.stringify({
  //           ...value,
  //         }),
  //       }
  //     );

  //     if (resp.status > 299 || resp.status < 200) {
  //       throw new Error("not found");
  //     }

  //     Storeuser(
  //       JSON.stringify({
  //         ...value,
  //       })
  //     );

  //     // fetchUsers();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
