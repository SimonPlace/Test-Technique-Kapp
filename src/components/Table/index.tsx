import { Table } from "antd";

import { User } from "types/users";
import columns from "./config";

const UserTable = ({
  users,
  loading,
  filteredUsers,
}: {
  users: User[];
  loading: boolean;
  filteredUsers: User[];
}) => {
  return (
    <Table
      dataSource={filteredUsers.length > 0 ? filteredUsers : users}
      columns={columns}
      pagination={{ position: ["bottomCenter"], total: 15 }}
      loading={loading}
    />
  );
};

export default UserTable;
