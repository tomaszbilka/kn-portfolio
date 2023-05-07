import { useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_ALL_USERS from '../../graphql/queries/getAllUsers';
import NewUser from './NewUser';
import User from './User';

import styles from './GraphqlTask.module.css';

export type TUser = {
  address?: string;
  id?: number;
  lastName?: string;
  name: string;
};

const GraphqlTask = () => {
  const [skipAddress, setSkipAddress] = useState<boolean>(false);
  const [includeLastName, setIncludeLastName] = useState<boolean>(true);
  const { data, loading, error } = useQuery(GET_ALL_USERS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      skipAddress,
      includeLastName,
    },
  });

  if (loading) {
    return <div>GraphQl is working, wait a moment please...</div>;
  }

  if (error) {
    return <div>Upss! There was a problem with fetching data...</div>;
  }

  return (
    <section className="container">
      <h3>GraphqlTask</h3>
      <div className={styles.controls}>
        <div>
          <input
            checked={skipAddress}
            className={styles.input}
            id="skipAddress"
            name="skipAddress"
            onChange={() => setSkipAddress((prev) => !prev)}
            type="checkbox"
          />
          <label htmlFor="skipAddress">skip address?</label>
        </div>
        <div>
          <input
            checked={includeLastName}
            className={styles.input}
            id="includeLastName"
            name="includeLastName"
            onChange={() => setIncludeLastName((prev) => !prev)}
            type="checkbox"
          />
          <label htmlFor="includeLastName">include last name?</label>
        </div>
      </div>
      <NewUser />
      {data.usersAlias.map((user: TUser) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};

export default GraphqlTask;
