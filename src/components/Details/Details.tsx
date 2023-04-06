import { useParams } from 'react-router-dom';

const Details: React.FC = () => {
  const { id } = useParams();

  return <div>Details id: {id}</div>;
};

export default Details;
