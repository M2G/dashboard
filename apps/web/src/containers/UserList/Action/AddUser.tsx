import { useTranslation } from 'react-i18next';

interface IAddUser {
  canAdd: boolean;
  onAdd: () => void;
}

function AddUser({ canAdd, onAdd }: IAddUser): JSX.Element | null {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-end">
      {canAdd && (
        <button
          className="m-4 mb-2 rounded-md px-4 py-2 text-3xl text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-white"
          onClick={onAdd}
          type="submit">
          {t('Add user')}
        </button>
      )}
    </div>
  );
}

export default AddUser;
