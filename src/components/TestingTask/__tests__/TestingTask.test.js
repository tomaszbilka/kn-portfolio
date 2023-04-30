import { render, screen } from '@testing-library/react';
import TestingTask from '../TestingTask.tsx';

describe('TestingTask', () => {
  it('Render TestingTask properly', () => {
    jest
      .spyOn(require('react-use'), 'useWindowSize')
      .mockImplementationOnce(() => ({ width: 400, height: 450 }));

    render(<TestingTask />);

    const text = screen.getByText('TestingTask');
    expect(text).toBeInTheDocument();

    const firstParagraph = screen.getByTestId('width');
    expect(firstParagraph).toHaveTextContent('400');

    const secondParagraph = screen.getByTestId('height');
    expect(secondParagraph).toHaveTextContent('450');
  });
});
