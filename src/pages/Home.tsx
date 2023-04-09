import ConditionalHook from '../components/ConditionalHook/ConditionalHook';
import ContextTask from '../components/ContextTask/ContextTask';
import CustomHookTask from '../components/CustomHookTask/CustomHookTask';

const Home: React.FC = () => {
  return (
    <>
      <ContextTask />
      <CustomHookTask />
      <ConditionalHook />
    </>
  );
};

export default Home;
