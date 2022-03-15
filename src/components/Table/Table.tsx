/* eslint-disable */
import useSortableData from './useSortableData';

function TableHeadSort(
  data: any = [],
  requestSort: any,
  getClassNamesFor: any
): any {
  const array = [];
  const obj = Object.assign({}, ...data);
  for (const objKey in obj) {
    console.log('objKey', objKey);
    array.push(
      <th>
        <button
          type="button"
          onClick={() => requestSort(objKey)}
          className={getClassNamesFor(objKey)}
        >
          {objKey}
        </button>
      </th>
    );
  }

  return array;
}

function Table({ data = [] }: any) {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (
    name: string
  ): any | boolean | string | undefined => {
    if (!sortConfig) return false;

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className="table">
      <caption>User list</caption>
      <thead>
        <tr>{TableHeadSort(data, requestSort, getClassNamesFor)}</tr>
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
