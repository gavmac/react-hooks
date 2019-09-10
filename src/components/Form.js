import React, { useState } from 'react';
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";

const Form = (props) => {
    const defaultForm = { id: null, name: "", username: ""}
    const [user, setUser] = useState(defaultForm)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.addUser(user);
        setUser(defaultForm);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Name"
                    onChange={handleInputChange}
                />
                <FormLabel>username</FormLabel>
                <FormControl
                    type="text"
                    name="username"
                    value={user.username}
                    placeholder="username"
                    onChange={handleInputChange}
                />
            </FormGroup>
            <Button type="submit"> adduser </Button>
        </form>
    )
}

export default Form;