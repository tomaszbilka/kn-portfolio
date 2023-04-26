import ContainmentTask from '../components/ContainmentTask';
import RenderPropsTask from '../components/RenderPropsTask';
import SpecializedComponentTask from '../components/SpecializedComponentTask';

const Contact: React.FC = () => {
  return (
    <>
      <RenderPropsTask />
      <SpecializedComponentTask />
      <ContainmentTask />
    </>
  );
};

export default Contact;
