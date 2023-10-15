import { Button, Flex, Space } from "antd";
import Filters from "components/Filters";

import PlusIcon from "icons/plus";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import { User } from "types/users";

const Users = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 0;
`;

const ButtonBar = styled(Flex)`
  margin-bottom: 30px;
`;

const getGroup = (data: User[]) => {
  const uniqueGroup = Array.from(
    new Set(data.map((value: User) => value.groups).flat())
  );
  return uniqueGroup.map((group) => {
    return {
      label: group,
      value: group,
    };
  });
};

type ActionBarProps = {
  users: User[];
  setFilteredUsers: (value: string) => void;
  setFilterGroups: (groups: Array<string>) => void;
  setVisible: (visible: boolean) => void;
};

const ActionBar = ({
  users,
  setFilteredUsers,
  setFilterGroups,
  setVisible,
}: ActionBarProps) => {
  const groupOptions = getGroup(users);

  const filterUsersEvent = (value: string) => {
    setFilteredUsers(value);
  };

  return (
    <>
      <ButtonBar justify="space-between">
        <Users>Users {users.length > 0 && `(${users.length})`} </Users>
        <div>
          <Space>
            <CSVLink filename="KapptivateExport" data={users}>
              <Button>Export List</Button>
            </CSVLink>
            <Button type="primary" onClick={() => setVisible(true)}>
              <Space>
                <PlusIcon />
                Add User
              </Space>
            </Button>
          </Space>
        </div>
      </ButtonBar>
      <Filters
        setFilterGroups={setFilterGroups}
        group={groupOptions}
        setFilteredUsers={filterUsersEvent}
      />
    </>
  );
};

export default ActionBar;
