import InnerComponent from './InnerComponent';
import MiddleComponent from './MiddleComponent';
import OuterComponent from './OuterComponent';

const ContainmentTask: React.FC = () => {
  const user = 'Tom';
  return (
    <section className="container">
      <h3>ContainmentTask</h3>
      <p style={{ fontSize: '14px', margin: '10px 0' }}>here user name is set</p>
      <OuterComponent>
        <MiddleComponent>
          <InnerComponent user={user} />
        </MiddleComponent>
      </OuterComponent>
    </section>
  );
};

export default ContainmentTask;
