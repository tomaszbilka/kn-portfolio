import { useState } from 'react';

import { User as TUser } from '../../graphql/autogenerate/schemas';
import { useCreateUserMutation } from '../../graphql/autogenerate/hooks';

import styles from './NewUser.module.css';

const initialValue = {
  id: '',
  name: '',
  lastName: '',
  address: '',
};

const NewUser = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<TUser>(initialValue);
  const [createUser, { loading, error }] = useCreateUserMutation({
    refetchQueries: ['GetAllUsers'],
  });

  const addNewUserHandler = () => {
    setIsEmpty(false);
    const { name, lastName, address } = newUser;
    if (name.length === 0 || lastName?.length === 0 || address?.length === 0) {
      setIsEmpty(true);
      return;
    }
    createUser({
      variables: newUser,
    });
    setNewUser(initialValue);
  };

  return (
    <div className={styles.wrap}>
      <label className={styles.userLabel} htmlFor="name">
        name
      </label>
      <input
        className={styles.userInput}
        id="name"
        name="name"
        onChange={(e) => setNewUser((prev) => ({ ...prev, name: e.target.value }))}
        type="text"
        value={newUser?.name}
      />
      <label className={styles.userLabel} htmlFor="lastName">
        lastName
      </label>
      <input
        className={styles.userInput}
        id="lastName"
        name="lastName"
        onChange={(e) => setNewUser((prev) => ({ ...prev, lastName: e.target.value }))}
        type="text"
        value={newUser.lastName}
      />
      <label className={styles.userLabel} htmlFor="address">
        address
      </label>
      <input
        className={styles.userInput}
        id="address"
        name="address"
        onChange={(e) => setNewUser((prev) => ({ ...prev, address: e.target.value }))}
        type="text"
        value={newUser.address}
      />
      {isEmpty && <p className={styles.userError}>inputs can not be empty</p>}
      {error && <p className={styles.userError}>error while creating new user</p>}
      <button
        className={styles.userButton}
        disabled={loading}
        onClick={addNewUserHandler}
        type="button"
      >
        {loading ? 'Loading...' : 'ADD'}
      </button>
    </div>
  );
};

export default NewUser;
