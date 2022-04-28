import { render } from '@testing-library/react';
import DateCell from './DateCell';

const date: Date = new Date();

describe('test DateCell', () => {
  test('should render', () => {
    const { container } = render(<DateCell date={date} />);
    expect(container).toHaveTextContent(date.toLocaleDateString());
    expect(container).toHaveTextContent(date.toLocaleTimeString());
  });

  test('should not render', () => {
    const { container } = render(<DateCell date={null} />);
    expect(container).toHaveTextContent("-");
  });
});
