/*eslint-disable*/
import { render, screen } from '@testing-library/react';
import TableWrapper from 'components/Core/Table/TableWrapper';
import userListItem from 'components/UserListItem/UserListItem';

describe('test TableStaticCol', () => {

  test('should render', () => {

    const header = [
        { label: '', sortable: false },
        { label: 'First name', sortable: false },
        { label: 'Email', sortable: false },
        {
          label: 'Created at',
          sortable: true,
          type: 'date',
        },
        { label: 'Modified at',
          sortable: true,
          type: 'date'
        },
      ];

    const users: any = [
      {
        "_id": "6237a814d7d983d4e78228c3",
        "created_at": "2021-11-21T15:46:44.533Z",
        "email": "oliver.garcia@university.com",
        "first_name": "Oliver",
        "last_name": "Garcia",
        "modified_at": "2021-11-22T15:46:44.533Z"
      },
      {
        "_id": "6237a814d7d983d4e78228c2",
        "created_at": "2021-11-21T15:47:44.533Z",
        "email": "smith.jackson@university.com",
        "first_name": "Smith",
        "last_name": "Jackson",
        "modified_at": "2021-11-22T15:47:44.533Z"
      }
    ];

    const rows = users?.map((user: any) =>
          userListItem({
            id: "test",
            user,
          })
        )


    render(<TableWrapper id="gdgdfxgx" header={header} rows={rows} />);

    console.log('screen', screen.debug())


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
