import ChangePassordForm from '@/components/ChangePassordForm';

function ChangePassword(): JSX.Element {
  return <ChangePassordForm />;
  /*
const {
  userData: { _id: id },
} = useContext(AuthContext);
const [changePassword] = useUpdateUserMutation();
const handleSubmit = useCallback(
  async (formData: {
    id: string;
    old_password: string;
    password: string;
    password_again: string;
  }) => {
    await changePassword({
      variables: {
        // eslint-disable-next-line
        // @ts-ignore
        id,
        ...formData,
      } as any,
    });
  },
  [changePassword, id],
);

return (
  <ChangePasswordForm
    initialValues={INITIAL_VALUES}
    onSubmit={handleSubmit}
  />
);*/
}

export default ChangePassword;
