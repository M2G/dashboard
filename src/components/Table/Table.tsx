import useSortableData from './useSortableData';

function Table({ data = [] }: any) {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (name: string): any | string => {
    if (!sortConfig) return;

    // eslint-disable-next-line
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className="table">
      <caption>User list</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => {
                requestSort('name');
              }}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                requestSort('email');
              }}
              className={getClassNamesFor('email')}
            >
              Email
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                requestSort('created_at');
              }}
              className={getClassNamesFor('created_at')}
            >
              Created at
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item: any) => (
          <tr key={item?.id}>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
