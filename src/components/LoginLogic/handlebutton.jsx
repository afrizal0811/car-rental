import Validate from "./validation";
import { Inuser } from "../localstore/localstore";
import { useState } from "react";
import { useNavigate } from "react-router";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

export default function Handlebutton(submit, params) {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const signin = async () => {
        try {
            const resp = await fetch(`https://bootcamp-rent-car.herokuapp.com/customer/auth/login`, {
                method: 'POST', headers:{'Content-type': 'application/json'}, body: JSON.stringify({
                    ...values
                })   
                
            })

            if (resp.status > 299 || resp.status < 200) {
                throw new Error('not found')
            }

            const result = await resp.json()

            Inuser(JSON.stringify(result))
            if (params.redirectFrom) {
                window.location.href = params.redirectFrom
            }
            
        } catch (err) {
            console.log(err)
        }
    }
    const[errors, setErrors] = useState({});
    const [submitted, setSubmited] = useState(false);
    const [loggedin, setLoggedin] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
        setSubmited(true)
        signin()
    };

    const rentClick = (e) => {
        e.preventDefault();
        navigate('/')
        setLoggedin(true)
    }
    const logout = (e) => {
        e.preventDefault();
        navigate('/login')
        localStorage.clear();
        setLoggedin(false)
      }
      
    return {handleChange, handleSubmit,rentClick, logout, values, errors, submitted, loggedin}
}