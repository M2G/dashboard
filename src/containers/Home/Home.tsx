/*eslint-disable*/
import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authGetUsersProfilAction } from 'store/auth/actions';
import './index.scss';
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

const Table = (props: { products: any }) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className="table">
      <caption>Products</caption>
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
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('stock')}
              className={getClassNamesFor('stock')}
            >
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: any) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function Home() {
  const dispatch = useDispatch();

  const { users, ...args } = useSelector((state: any) => state?.auth as any);
  const { loading } = args;

  console.log('Home Home Home', users?.data, args);

  useEffect(() => dispatch(authGetUsersProfilAction()), []);

  if (loading) return <TopLineLoading />;

  return (
    <div className="o-zone">
      <div className="o-grid">
        <div className="o-grid__row">
          <div className="o-col">
            <div className="o-cell--one">
              <div className="App">
                <Table
                  products={[
                    { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
                    { id: 2, name: 'Milk', price: 1.9, stock: 32 },
                    { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
                    { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
                    { id: 5, name: 'Butter', price: 0.9, stock: 99 },
                    { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
                    {
                      id: 7,
                      name: 'Fancy French Cheese 🇫🇷',
                      price: 99,
                      stock: 12,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
