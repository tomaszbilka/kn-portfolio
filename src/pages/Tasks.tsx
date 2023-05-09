import ContainmentTask from '../components/ContainmentTask';
import DateTesting from '../components/DateTesting/DateTesting';
import RenderPropsTask from '../components/RenderPropsTask';
import SpecializedComponentTask from '../components/SpecializedComponentTask';
import TestingTask from '../components/TestingTask/TestingTask';

const Tasks: React.FC = () => {
  return (
    <>
      <RenderPropsTask />
      <SpecializedComponentTask />
      <ContainmentTask />
      <TestingTask />
      <DateTesting />
    </>
  );
};

export default Tasks;
