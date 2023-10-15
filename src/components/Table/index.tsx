import { Table } from "antd";

import { User } from "types/users";
import columns from "./config";

const UserTable = ({ users, loading }: { users: User[]; loading: boolean }) => {
  return (
    <Table
      dataSource={users}
      columns={columns}
      pagination={{ position: ["bottomCenter"] }}
      loading={loading}
    />
  );
};

export default UserTable;
