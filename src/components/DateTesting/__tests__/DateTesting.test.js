import { render, screen } from '@testing-library/react';
import DateTesting from '../DateTesting.tsx';
import MockDate from 'mockdate';

describe('DateTesting', () => {
  MockDate.set('2023-01-30T06:30:05');

  it('renders correct date', () => {
    render(<DateTesting />);
    const date = screen.getByTestId('date');
    expect(date).toContainHTML('30/01/2023');
  });
  it('renders correct time', () => {
    render(<DateTesting />);
    const time = screen.getByTestId('time');
    expect(time).toContainHTML('06:30:05');
  });
});
