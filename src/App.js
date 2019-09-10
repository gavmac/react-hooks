import React, { useState } from 'react';
import TableList from './components/TableList';
import Form from './components/Form';
import EditForm from './components/EditForm';

import { Container, Row, Col } from 'react-bootstrap'


const App = () => {
  const userData = [
    { id: 1, name: "Gav", username: "gavo"},
    { id: 2, name: "Semore", username: "Butts"}
  ]
  const initialFormState = { id: null, name: "", username: ""}
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false)


  const editUser = user => {
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = updateUser => {
    setUsers(users.map(user => (user.id === updateUser.id ? updateUser : user) ))
    setEditing(false)
  }

  const addUser = user => {
    console.log(user)
    user.id = users.length+1
    setUsers([...users, user]);
  }

  const deleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
      <Container>
          <Row>
            <Col md={6}>
              <h4>User Inputs</h4>
              {editing ?
                  <EditForm
                      user={currentUser}
                      updateUser={updateUser} />
                  :<Form addUser={addUser}/>
              }
            </Col>
            <Col md={6}>
              <h4> User List </h4>
              <TableList users={users} deleteUser={deleteUser} editUser={editUser}/>
            </Col>
          </Row>
      </Container>
  )
}


export default App
