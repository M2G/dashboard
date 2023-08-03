import { useTranslation } from 'react-i18next';

interface IAddUser {
  canAdd: boolean;
  onAdd: () => void;
}

function AddUser({ canAdd, onAdd }: IAddUser) {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-end">
      {canAdd && (
        <button
          className="m-4 mb-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
          type="submit"
          onClick={onAdd}>
          {t('Add user')}
        </button>
      )}
    </div>
  );
}

export default AddUser;
