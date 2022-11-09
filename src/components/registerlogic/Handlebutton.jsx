import { Storeuser } from "../localstore/localstore";
import { useState, useEffect } from "react";
import Validate from "./validation";

export default function Handlebutton() {
    const [value, setValue] = useState({
        fullname:'',
        email:'',
        password:''
    })

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const resp = await fetch('https://bootcamp-rent-car.herokuapp.com/', { method: 'GET' })
            const users = await resp.json()

            setUsers(users.data)
            
        } catch (err) {
            console.log(err)
        }
    }

    const createUser = async () => {
        try {
            const resp = await fetch(`https://bootcamp-rent-car.herokuapp.com/customer/auth/register`, {
                method: 'POST', headers:{'Content-type': 'application/json'}, body: JSON.stringify({
                    ...value
                })
            })

            if (resp.status > 299 || resp.status < 200) {
                throw new Error('not found')
            }

            Storeuser(JSON.stringify({
                ...value
            }))

            fetchUsers()
        } catch (err) {
            console.log(err)
        }
    }

    const[errors, setErrors] = useState({});
    const [submitted, setSubmited] = useState(false);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(value));
        setSubmited(true)
        createUser()   
    };

    return {handleChange, handleSubmit, value, errors, submitted};
}