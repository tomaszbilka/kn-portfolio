import ActionButton from './ActionButton';
import TransparentButton from './TransparentButton';

const SpecializedComponentTask: React.FC = () => {
  return (
    <section className="container">
      <h3>SpecializedComponentTask</h3>
      <div style={{ marginTop: 20 }}>
        <ActionButton />
        <TransparentButton />
      </div>
    </section>
  );
};

export default SpecializedComponentTask;
