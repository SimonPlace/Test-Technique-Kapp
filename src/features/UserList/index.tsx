import { Space } from "antd";
import ActionBar from "components/ActionBar";
import UserTable from "components/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilteredUsers,
  fetchUsers,
  getUsersError,
  getUsersStatus,
  selectAllUsers,
} from "./userSlice";

import UserEdit from "components/UserEdit";
import { AppDispatch } from "store";
import styled from "styled-components";
import { User } from "types/users";

const Section = styled.section`
  max-width: 1024px;
  margin: 50px auto;
  padding: 0 20px;
`;

const FullSpace = styled(Space)`
  width: 100%;
`;

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterGroup, setFilterGroups] = useState<Array<string>>([]);
  const [visible, setVisible] = useState(false);

  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  const setFilteredUsers = (value: string) => {
    dispatch(fetchFilteredUsers(value));
  };

  const filteredData =
    filterGroup.length > 0
      ? users.filter((user: User) => {
          const userGroups = user.groups.sort().toString();
          const filterGroups = filterGroup.sort().toString();
          return userGroups.includes(filterGroups);
        })
      : users;

  return (
    <Section>
      {!error && (
        <FullSpace direction="vertical" size={20}>
          <ActionBar
            users={filteredData}
            setFilteredUsers={setFilteredUsers}
            setFilterGroups={setFilterGroups}
            setVisible={setVisible}
          />
          <UserEdit visible={visible} setVisible={setVisible} />
          <UserTable
            users={filteredData}
            loading={usersStatus !== "succeeded" && usersStatus !== "idle"}
          />
        </FullSpace>
      )}
    </Section>
  );
};

export default UserList;
