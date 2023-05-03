import { render, screen } from '@testing-library/react';
import factory from './factories/user';
import InnerComponent from '../InnerComponent';
import { debug } from 'jest-preview';

const user = factory.build({
  name: 'Michael',
  address: {
    city: 'Wwa',
    postCode: '0-22',
    state: 'Arizona',
  },
});

describe('InnerComponent', () => {
  it('Renders correctly', () => {
    render(<InnerComponent user={user} />);
    debug();
    const userName = screen.getByText('user name:');
    expect(userName).toContainHTML('<span class="user">Michael</span>');
  });
});
