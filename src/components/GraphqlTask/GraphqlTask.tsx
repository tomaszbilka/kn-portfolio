import { useQuery } from '@apollo/client';
import GET_ALL_USERS from '../../graphql/queries/getAllUsers';

const GraphqlTask = () => {
  const { data } = useQuery(GET_ALL_USERS);
  console.log(data);
  return (
    <section className="container">
      <h3>GraphqlTask</h3>
    </section>
  );
};

export default GraphqlTask;
