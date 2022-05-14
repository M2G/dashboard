import UserNewView from 'components/Users/UserNew/UserNew';
import { INITIAL_VALUES } from './constants';

function UserNew({ onSubmit }: any) {
  function initialValues() {
    return { ...INITIAL_VALUES };
  }

  return <UserNewView
      initialValues={initialValues()}
      onSubmit={onSubmit}
    />;
}

export default UserNew;
