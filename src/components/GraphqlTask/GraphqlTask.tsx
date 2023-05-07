import { useQuery } from '@apollo/client';

import GET_ALL_USERS from '../../graphql/queries/getAllUsers';
import NewUser from './NewUser';
import User from './User';

export type TUser = {
  address: string;
  id?: number;
  lastName: string;
  name: string;
};

const GraphqlTask = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS, {
    notifyOnNetworkStatusChange: true,
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
      <NewUser />
      {data.allUsers.map((user: TUser) => (
        <User user={user} key={user.id} />
      ))}
    </section>
  );
};

export default GraphqlTask;
