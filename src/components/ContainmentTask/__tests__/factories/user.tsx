import { Factory } from 'fishery';

import type { TUser } from '../../ContainmentTask';

export default Factory.define<TUser>(({ sequence }) => ({
  id: sequence,
  name: 'Tom',
  address: {
    city: 'Bielsko',
    state: 'Silesia',
    postCode: '43-300',
  },
}));
