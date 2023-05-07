import { useMutation } from '@apollo/client';
import { useState } from 'react';
import type { TUser } from './GraphqlTask';

import styles from './User.module.css';
import { REMOVE_USER } from '../../graphql/mutations/removeUser';
import EditUser from './EditUser';

type TProps = {
  user: TUser;
};

const User = ({ user }: TProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [removeUser, { loading, error }] = useMutation(REMOVE_USER, {
    refetchQueries: ['GetAllUsers'],
  });
  const { id, name, lastName, address } = user;

  const deletUserHandler = () => {
    removeUser({
      variables: { id },
    });
  };
  return (
    <>
      {!isEdit ? (
        <div className={styles.wrap}>
          <div className={styles.text}>
            <p>
              name: <span>{name}</span>
            </p>
            <p>
              last name:<span>{lastName}</span>
            </p>
            <p>
              address: <span>{address}</span>
            </p>
          </div>
          <div className={styles.controls}>
            <button onClick={() => setIsEdit(true)}>edit</button>
            <button
              className={styles.delete}
              disabled={loading}
              onClick={deletUserHandler}
            >
              {loading ? 'Loading...' : 'delete'}
            </button>
          </div>
          {error && <p className={styles.error}>Can not delete user!</p>}
        </div>
      ) : (
        <EditUser user={user} isOpen={setIsEdit} />
      )}
    </>
  );
};

export default User;
