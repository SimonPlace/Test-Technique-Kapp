import { Form, Input, Modal } from "antd";
import { createUser } from "features/UserList/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { User } from "types/users";

const UserEdit = ({
  user,
  visible,
  setVisible,
}: {
  user?: User;
  visible: boolean;
  setVisible: Function;
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();

  const handleCreate = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();

        dispatch(createUser(values));
        setVisible(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      open={visible}
      title="Create a new user"
      okText="Ok"
      onCancel={() => {
        setVisible(false);
      }}
      onOk={handleCreate}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input the name of the user!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="email"
          rules={[
            { required: true, message: "Please input the email of the user!" },
          ]}
        >
          <Input type="email" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserEdit;
