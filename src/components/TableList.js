import React from 'react';
import {Button, Table} from "react-bootstrap";

const TableList = (props) => {

    return (
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.map(user => (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <Button onClick={() => props.editUser(user)}> Edit </Button>
                        <Button onClick={() => props.deleteUser(user.id)}> Delete </Button>
                    </td>
                </tr>
            ))
            }
            </tbody>
        </Table>
    )
}

export default TableList;