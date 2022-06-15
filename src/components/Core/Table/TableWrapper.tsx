/*eslint-disable*/
import { useEffect, useMemo, useState, createContext, useContext } from 'react';
import classnames from 'classnames';
import {
  arrayOf, string, node, oneOfType, shape, oneOf, bool, number
} from 'prop-types';
import TableHeaderCell from './TableHeaderCell';
import './index.scss';

const TableContext = createContext<Record<string, any>>({})

const TableHead = ({}) => {
  const { header, handleSort, sortData } = useContext(
    TableContext,
  )
  return <thead className="c-table-head">
  <tr>
    {header?.map(({ label, sortable, type }: any, index: string) =>
      <TableHeaderCell
        key={index}
        label={label}
        isSortable={sortable}
        currentSortedData={sortData?.index === index ? sortData : null}
        onSort={(sortDirection) => handleSort(index, sortDirection, type)}
      />)}
  </tr>
  </thead>
}



const TableWrapper = ({ header, rows, id, className = '' }: any) => {
  const [sortData, setSortData] = useState<any>(null);

  const handleSort = (index: any, sortDirection: string, type: any) =>
    setSortData({
      index,
      direction: sortDirection,
      type,
    } as any);

  const getSortedTable = useMemo(() => {
    if (!sortData) return rows;
    const { index, direction, type }: any = sortData;

    if (!type || type === 'string') {
      return rows.sort(
        (
          a: { [x: string]: { value: any } },
          b: { [x: string]: { value: string } }
        ) =>
          direction === 'descending'
            ? a[index].value.localeCompare(b[index].value)
            : b[index].value.localeCompare(a[index].value)
      );
    }
    if (type === 'date') {
      return rows.sort(
        (
          a: { [x: string]: { value: number } },
          b: { [x: string]: { value: number } }
        ) =>
          direction === 'ascending'
            ? a[index].value - b[index].value
            : b[index].value - a[index].value
      );
    }

    return rows;
  }, [sortData, rows]);

  useEffect(() => {
    header?.forEach(({ defaultSort, type }: any, index: any) => {
      if (defaultSort) handleSort(index, 'descending', type);
    });
  }, [header]);

  return <TableContext.Provider
    value={{ header, handleSort, sortData }}
  >
  <div className="c-table-wrapper">
      <table className={classnames("c-table table-bordered", className)}>
        <TableHead key="TableHead" />
        <tbody className="c-table-body">
          {getSortedTable?.map((row: { display: any }[], indexRow: any) =>
            <tr key={`bodyTable__${id}__${indexRow}`}>
              {row?.map(({ display }, indexCol) => (
                <td
                  key={`bodyTable__${id}__${indexRow}__${indexCol}`}
                  className={classnames('table-wrapper-cell', {
                    stickyBlock: indexCol === 0,
                  })}
                >
                  {display}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </TableContext.Provider>
};

const rowType = shape({
  display: oneOfType([string, node, number]).isRequired,
  value: oneOfType([string, number]).isRequired,
});

const headerRowType = shape({
  label: string.isRequired,
  sortable: bool,
  type: oneOf(['string', 'date']),
  defaultSort: bool,
});

TableWrapper.propTypes = {
  rows: arrayOf(arrayOf(rowType)).isRequired,
  header: arrayOf(headerRowType).isRequired,
  id: string.isRequired,
};

export default TableWrapper;
