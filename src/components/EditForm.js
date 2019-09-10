import React, { useState, useEffect } from 'react';
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";

const EditForm = (props) => {

    useEffect(() => {
        setUser(props.user)
    }, [props])

    const [ user, setUser ] = useState(props.user);

    const handleInputChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.updateUser(user);
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
            <Button type="submit"> Update user </Button>
        </form>
    )
}

export default EditForm;