/*eslint-disable*/
import DateCell from 'components/Core/Table/DateCell';

const userListItem = ({ rowId, user, onEdit, onDelete, canDelete }: any) => {
  const id = `user__row__${rowId}__${user.id}`;

  const actions = [];

  if (onEdit) {
    actions.push({
      label: 'Edit',
      icon: 'pencil',
      id: `${id}__edit`,
      action: () => {
        onEdit(user);
      },
    });
  }

  if (canDelete) {
    actions.push({
      label: 'Delete',
      icon: 'trash',
      iconType: 'dripicons',
      id: `${id}__delete`,
      action: () => {
        onDelete(user);
      },
    });
  }
  /*

    name
    email
    created_at
    modified_at
     */
  const rows = [
    {
      display: user.name,
      value: user.name,
    },
    {
      display: user.email,
      value: user.email,
    },
    {
      display: <DateCell date={user.created_at} />,
      value: new Date(user.created_at),
    },
    {
      display: <DateCell date={user.modified_at} />,
      value: new Date(user.modified_at),
    },
  ];

  return rows;
};

export default userListItem;
