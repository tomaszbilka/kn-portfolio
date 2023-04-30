import ContainmentTask from '../components/ContainmentTask';
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
    </>
  );
};

export default Contact;
