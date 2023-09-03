import clsx from 'clsx';
import styles from './Table.module.scss';

interface ITableHeaderCell {
  currentSortedData: any;
  isSortable: any;
  label: any;
  onSort: any;
}

function TableHeaderCell({
  currentSortedData,
  isSortable,
  label,
  onSort,
}: ITableHeaderCell): JSX.Element {
  const onSortClick = () =>
    onSort(
      !currentSortedData || currentSortedData.direction === 'ascending'
        ? 'descending'
        : 'ascending',
    );

  const sortedClass =
    currentSortedData?.direction === styles.ascending ? styles.ascending : styles.descending;

  return (
    <th className="border-b-0 p-2 pl-0 text-base font-bold">
      {label}
      {isSortable && (
        <button
          onClick={onSortClick}
          className={`sort-icon mb-0 rounded-none border-0 bg-transparent font-bold ${
            currentSortedData ? sortedClass : ''
          }`}
        />
      )}
    </th>
  );
}

export default TableHeaderCell;
