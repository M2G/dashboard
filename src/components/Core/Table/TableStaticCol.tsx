import Action from 'components/Core/Table/Action';
import { string } from 'prop-types';

function TableStaticCol({ id, label, actions }: any) {
  return (
    <div className="tableStaticCol">
      <div className="ml-3 actions">
        <div className="labelHandler">
          <label id={id}>{label}</label>
        </div>
        <div className="actionBar">
          {actions?.length > 0 && <Action actions={actions} />}
        </div>
      </div>
    </div>
  );
}

TableStaticCol.propTypes = {
  // eslint-disable-next-line
  actions: Action.propTypes.actions,
  id: string.isRequired,
  label: string.isRequired,
};

export default TableStaticCol;
