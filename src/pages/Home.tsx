import ConditionalHook from '../components/ConditionalHook/ConditionalHook';
import ContextTask from '../components/ContextTask/ContextTask';
import CustomHookTask from '../components/CustomHookTask/CustomHookTask';
import MemoTaskParent from '../components/MemoTask/MemoTaskParent';

const Home: React.FC = () => {
  return (
    <>
      <ContextTask />
      <CustomHookTask />
      <ConditionalHook />
      <MemoTaskParent />
    </>
  );
};

export default Home;
