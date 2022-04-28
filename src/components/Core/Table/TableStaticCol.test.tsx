import { render, screen } from '@testing-library/react';
import TableStaticCol from './TableStaticCol';

describe('test TableStaticCol', () => {
  test('should render', () => {
    const actions = [];
    actions.push({
      action: () => {},
      icon: 'fa-edit',
      id: `test__edit`,
      label: 'Edit',
    });
    const tableStaticColProps = {
      actions,
      id: 'test_id',
      label: 'gsdgds',
    };

    const { container } = render(<TableStaticCol
      actions={tableStaticColProps.actions}
      id={tableStaticColProps.id}
      label={tableStaticColProps.label}
    />);

    expect(container).toHaveTextContent("gsdgds");
  });

  test('should not render', () => {

 /*   const args = {
      currentSortedData: null,
      isSortable: false,
      label: "",
      onSort: () => {},
    };

    const { container } = render(<TableHeaderCell
      label={args.label}
      isSortable={args.isSortable}
      currentSortedData={args.currentSortedData}
      onSort={args.onSort}
    />);
    expect(container).toHaveTextContent(""); */
  });
});
