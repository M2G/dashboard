import PageSize from '@/components/Core/Pagination/PageSize';
import Pagination from '@/components/Core/Pagination/PaginationLegacy';
import TableWrapper from '@/components/Core/Table';
import type { JSX } from 'react';
import './index.scss';

function List({
  id,
  header,
  rows,
  data,
  count,
  setCurrentPage,
  setCurrentPageSize,
  currentPageSize,
  currentPage,
}: any): JSX.Element {
  const perPage = currentPageSize;
  return (
    <>
      <TableWrapper id={id} header={header} rows={rows} />
      <div className="w-100 mt-2 flex justify-end">
        <PageSize currentPageSize={currentPageSize} setCurrentPageSize={setCurrentPageSize} />
        <Pagination
          totalItems={count}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default List;
