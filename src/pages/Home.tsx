import ConditionalHook from '../components/ConditionalHook/ConditionalHook';
import ContextTask from '../components/ContextTask/ContextTask';
import CustomHookTask from '../components/CustomHookTask/CustomHookTask';
import MemoTaskParent from '../components/MemoTask/MemoTaskParent';
import VirtualizationTask from '../components/VirtualizationTask';
import NoVirtualizedList from '../components/VirtualizationTask/NoVirtualizedList';

const Home: React.FC = () => {
  return (
    <>
      <ContextTask />
      <CustomHookTask />
      <ConditionalHook />
      <MemoTaskParent />
      <VirtualizationTask />
      <NoVirtualizedList />
    </>
  );
};

export default Home;
