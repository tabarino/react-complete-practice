import React, { useRef, useState } from 'react';
import Wrapper from '../../Helpers/Wrapper/Wrapper';
import Button from '../../UserInterface/Button/Button';
import Card from '../../UserInterface/Card/Card';
import ErrorModal from '../../UserInterface/ErrorModal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUser, setEnteredUser] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (!isValidForm(enteredName, enteredUserAge)) {
      return;
    }

    // props.onAddUser(enteredUser, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);

    // setEnteredUser('');
    // setEnteredAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const isValidForm = (username, age) => {
    // if (
    //   enteredUser.trim().length === 0 ||
    //   enteredAge.trim().length === 0
    // ) {
    if (
      username.trim().length === 0 ||
      age.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid Name and Age. Empty values are not accepted.'
      });
      return false;
    }

    // if (+enteredAge < 1) {
    if (+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid Age. An Age needs to be greater than 0.'
      });
      return false;
    }

    return true;
  };

  // const userChangeHandler = (event) => {
  //   setEnteredUser(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onDismiss={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* <input type="text" id="username" value={enteredUser} onChange={userChangeHandler} ref={nameInputRef} /> */}
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          {/* <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} ref={ageInputRef} /> */}
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
