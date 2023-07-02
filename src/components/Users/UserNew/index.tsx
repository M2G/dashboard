//import UserNewView from 'components/Users/UserNew/UserNew';
import { INITIAL_VALUES } from './constants';

interface IUserNew {
  readonly onSubmit: (user: User) => void;
}

function UserNew({ onSubmit }: IUserNew): JSX.Element {
  function initialValues() {
    return { ...INITIAL_VALUES };
  }

  // return <UserNewView initialValues={initialValues()} onSubmit={onSubmit} />;
  return null;
}

export default UserNew;
