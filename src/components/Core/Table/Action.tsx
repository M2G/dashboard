/*eslint-disable*/
import { string, func, arrayOf, shape } from 'prop-types';

function Action({ actions }: any) {
  return (
    <div>
      {actions.map(({ id, action, icon, iconType = 'fas' }: any) => (
        <div key={`actionBarCol__${id}`} className="actionBar_button">
          <div id={id} onClick={action}>
            <i className={`${iconType} ${icon}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

const actionType = shape({
  id: string.isRequired,
  action: func.isRequired,
  icon: string.isRequired,
  iconType: string,
});

Action.propTypes = {
  actions: arrayOf(actionType),
};

export default Action;