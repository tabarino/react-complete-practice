import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userAdded, ageAdded) => {
    setUsersList((prevUsersList) => {
      return [
        { name: userAdded, age: ageAdded, id: Math.floor((Math.random() * 1000000000) + 1).toString() },
        ...prevUsersList
      ];
    });
  };

  return (
    // This <> is the same as <Fragment>.
    // However, in some projects it won't work.
    // In those projects only import React and use <Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
