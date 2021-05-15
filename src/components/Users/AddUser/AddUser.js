import React, { useState } from 'react';
import Button from '../../UserInterface/Button/Button';
import Card from '../../UserInterface/Card/Card';
import ErrorModal from '../../UserInterface/ErrorModal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!isValidForm()) {
      return;
    }

    props.onAddUser(enteredUser, enteredAge);

    setEnteredUser('');
    setEnteredAge('');
  };

  const isValidForm = () => {
    if (
      enteredUser.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      return false;
    }

    if (+enteredAge < 1) {
      return false;
    }

    return true;
  };

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occurred!" message="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUser} onChange={userChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
