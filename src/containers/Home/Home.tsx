/*eslint-disable*/
import UserList from 'components/UserListItem/UserList';

function Home({ users }: any) {
  return <div className="o-zone">
      <div className="o-grid">
        <div className="o-grid__row">
          <div className="o-col">
            <div className="o-cell--one">
              <UserList canEdit canDelete canAdd users={users} id="test" />
            </div>
          </div>
        </div>
      </div>
    </div>

}

export default Home;
