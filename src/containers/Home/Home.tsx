/*eslint-disable*/
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authGetUsersProfilAction } from 'store/auth/actions';
import TopLineLoading from 'components/Loading/TopLineLoading';

const useSortableData = (items: any, config = null) => {
  const [sortConfig, setSortConfig] = useState<any>(config);

  const sortedItems = useMemo(() => {
    let sortableItems: any = [...items];
    if (sortConfig !== null) {
      sortableItems.sort(
        (a: { [x: string]: number }, b: { [x: string]: number }) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        }
      );
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: any) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = (props: { data: any }) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
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
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >
              Email
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('created_at')}
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
            <td>${item?.email}</td>
            <td>{item?.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function Home() {
  const dispatch = useDispatch();

  const { users, loading, ...args } = useSelector(
    (state: any) => state?.auth as any
  );

  console.log('Home Home Home', users?.data, args);

  useEffect(() => dispatch(authGetUsersProfilAction()), []);

  if (loading) return <TopLineLoading />;

  return (
    <div className="o-zone">
      <div className="o-grid">
        <div className="o-grid__row">
          <div className="o-col">
            <div className="o-cell--one">
              {users?.data?.length && (
                <Table
                  data={users.data.map(
                    (user: {
                      _id: any;
                      first_name: any;
                      email: any;
                      created_at: any;
                    }) => ({
                      id: user?._id,
                      name: user?.first_name,
                      email: user?.email,
                      created_at: user?.created_at,
                    })
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
