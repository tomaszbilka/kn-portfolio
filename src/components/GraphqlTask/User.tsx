import { useState } from 'react';

import { RemoveUserMutation } from '../../graphql/autogenerate/operations';
import { User as TUser } from '../../graphql/autogenerate/schemas';
import { useRemoveUserMutation } from '../../graphql/autogenerate/hooks';
import EditUser from './EditUser';
import styles from './User.module.css';

type TProps = {
  user: TUser;
};

const User = ({ user }: TProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [removeUser, { loading, error }] = useRemoveUserMutation({
    refetchQueries: ['GetAllUsers'],
  });
  const { id, name, lastName, address } = user;

  const deletUserHandler = () => {
    removeUser({
      variables: { id },
    }).then((res) => {
      if (res.data) {
        const result: RemoveUserMutation = res.data;
        console.log(`User with id: ${result.removeUser?.id} was deleted!`);
      }
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
