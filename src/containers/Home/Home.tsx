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
                  <Table
                    action={(id: any) => console.log('id', id)}
                    data={data.map(
                      (user: {
                        _id: string;
                        first_name: string;
                        email: string;
                        created_at: string;
                        modified_at: string;
                      }) => ({
                        id: user?._id,
                        name: user?.first_name,
                        email: user?.email,
                        created_at: user?.created_at,
                        modified_at: user?.modified_at,
                      })
                    )}
                  />
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
