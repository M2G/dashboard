/*eslint-disable*/
import { string, bool, func } from 'prop-types';

const TableHeaderCell = ({
  label,
  onSort,
  isSortable,
  currentSortedData,
}: any) => {
  const onSortClick = () => {
    onSort(
      !currentSortedData || currentSortedData.direction === 'asc'
        ? 'desc'
        : 'asc'
    );
  };

  const sortedClass =
    currentSortedData?.direction === 'asc' ? 'sort-icon-asc' : 'sort-icon-desc';

  return (
    <div className={'table-header-cell'}>
      {label}
      {isSortable && (
        <div
          onClick={onSortClick}
          className={`sort-icon ${currentSortedData ? sortedClass : ''}`}
        />
      )}
    </div>
  );
};

TableHeaderCell.propTypes = {
  isSortable: bool,
  currentSortedData: bool,
  onSort: func,
  label: string.isRequired,
};

export default TableHeaderCell;
