import InnerComponent from './InnerComponent';
import MiddleComponent from './MiddleComponent';
import OuterComponent from './OuterComponent';

export type TUser = {
  id: number;
  name: string;
  address: {
    city: string;
    state: string;
    postCode: string;
  };
};

const ContainmentTask: React.FC = () => {
  const user: TUser = {
    id: 123,
    name: 'Tom',
    address: {
      city: 'Mickiewicza',
      state: 'New York',
      postCode: '43-300',
    },
  };

  return (
    <section className="container">
      <h3>ContainmentTask</h3>
      <p style={{ fontSize: '14px', margin: '10px 0' }}>here user data is set</p>
      <OuterComponent>
        <MiddleComponent>
          <InnerComponent user={user} />
        </MiddleComponent>
      </OuterComponent>
    </section>
  );
};

export default ContainmentTask;
