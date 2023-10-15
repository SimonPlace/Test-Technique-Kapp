import { Button, Flex, Space } from "antd";
import Filters from "components/Filters";
import PlusIcon from "icons/plus";
import { debounce } from "lodash";
import styled from "styled-components";
import { User } from "types/users";

type ActionBarProps = {
  users: User[];
  primaryAction: () => void;
  secondaryAction: () => void;
  setFilteredUsers: (value: string) => void;
};

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

const ActionBar = ({
  users,
  primaryAction,
  secondaryAction,
  setFilteredUsers,
}: ActionBarProps) => {
  const groupOptions = getGroup(users);

  const filterUsersEvent = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event;

      setFilteredUsers(value);
    },
    500
  );

  return (
    <>
      <ButtonBar justify="space-between">
        <Users>Users {users.length > 0 && `(${users.length})`} </Users>
        <div>
          <Space>
            <Button onClick={primaryAction}>Export List</Button>
            <Button type="primary" onClick={secondaryAction}>
              <Space>
                <PlusIcon />
                Add User
              </Space>
            </Button>
          </Space>
        </div>
      </ButtonBar>

      <Filters group={groupOptions} setFilteredUsers={filterUsersEvent} />
    </>
  );
};

export default ActionBar;
