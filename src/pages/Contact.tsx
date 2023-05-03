import ContainmentTask from '../components/ContainmentTask';
import DateTesting from '../components/DateTesting/DateTesting';
import RenderPropsTask from '../components/RenderPropsTask';
import SpecializedComponentTask from '../components/SpecializedComponentTask';
import TestingTask from '../components/TestingTask/TestingTask';

const Contact: React.FC = () => {
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

export default Contact;
