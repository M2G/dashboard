/*eslint-disable*/
import { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';

import {
  arrayOf,
  string,
  oneOfType,
  shape,
  oneOf,
  bool,
  any,
} from 'prop-types';

import TableHeaderCell from './TableHeaderCell';

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
    header.forEach(({ defaultSort, type }: any, index: any) => {
      if (defaultSort) handleSort(index, 'descending', type);
    });
  }, [header]);

  return (
    <div className="c-table-wrapper">
      <table className={classnames('c-table', className)}>
        <thead className="c-table-head">
          <tr>
            {header?.map(({ label, sortable, type }: any, index: string) => (
              <TableHeaderCell
                label={label}
                isSortable={sortable}
                currentSortedData={sortData?.index === index ? sortData : null}
                onSort={(sortDirection) =>
                  handleSort(index, sortDirection, type)
                }
              />
            ))}
          </tr>
        </thead>
        <tbody className={'table-body'}>
          {getSortedTable?.map((row: { display: any }[], indexRow: any) => (
            <tr>
              {row?.map(({ display }, indexCol) => (
                <td
                  className={classnames('table-wrapper-cell', {
                    stickyBlock: indexCol === 0,
                  })}
                >
                  {display}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const rowType = shape({
  // @ts-ignore
  display: oneOfType(any).isRequired,
  // @ts-ignore
  value: oneOfType(any).isRequired,
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
