import { useState } from 'react';

import { User as TUser } from '../../graphql/autogenerate/schemas';
import { useUpdateUserMutation } from '../../graphql/autogenerate/hooks';
import styles from './EditUser.module.css';

type TProps = {
  user: TUser;
  isOpen: (isOpen: boolean) => void;
};

const EditUser = ({ isOpen, user }: TProps) => {
  const { id, name, lastName, address } = user;
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<TUser>({
    address,
    id,
    lastName,
    name,
  });
  const [updateUser, { loading, error }] = useUpdateUserMutation({
    refetchQueries: ['GetAllUsers'],
  });

  const editUserHandler = () => {
    setIsEmpty(false);
    const { name, lastName, address } = newUser;
    if (name.length === 0 || lastName?.length === 0 || address?.length === 0) {
      setIsEmpty(true);
      return;
    }
    updateUser({
      variables: newUser,
    }).then(() => isOpen(false));
  };

  return (
    <div className={styles.wrap}>
      <input
        id="name"
        name="name"
        onChange={(e) => setNewUser((prev) => ({ ...prev, name: e.target.value }))}
        type="text"
        value={newUser?.name}
      />
      <input
        id="lastName"
        name="lastName"
        onChange={(e) => setNewUser((prev) => ({ ...prev, lastName: e.target.value }))}
        type="text"
        value={newUser.lastName}
      />
      <input
        id="address"
        name="address"
        onChange={(e) => setNewUser((prev) => ({ ...prev, address: e.target.value }))}
        type="text"
        value={newUser.address}
      />
      {isEmpty && <p className={styles.userError}>inputs can not be empty</p>}
      {error && <p className={styles.userError}>error while updating new user</p>}
      <button disabled={loading} onClick={editUserHandler} type="button">
        {loading ? 'Loading...' : 'EDIT'}
      </button>
    </div>
  );
};

export default EditUser;
