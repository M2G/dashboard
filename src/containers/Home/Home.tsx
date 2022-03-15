/*eslint-disable*/
import Table from 'components/Table';

function Home({ data }: any) {
  return (
    <div className="o-zone">
      <div className="o-grid">
        <div className="o-grid__row">
          <div className="o-col">
            <div className="o-cell--one">
              {data?.length && (
                <div className="c-table">
                  <Table data={data} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
