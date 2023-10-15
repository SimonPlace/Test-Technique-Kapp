import { fetchUsers } from "actions/users";
import { Space } from "antd";
import ActionBar from "components/ActionBar";
import UserTable from "components/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
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
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { data, error, loading } = users;

  return (
    <Section>
      {!error && (
        <FullSpace direction="vertical" size={20}>
          <ActionBar
            users={data}
            primaryAction={() => []}
            secondaryAction={() => []}
            setFilteredUsers={setFilteredUsers}
          />
          <UserTable
            users={data}
            loading={loading}
            filteredUsers={filteredUsers}
          />
        </FullSpace>
      )}
    </Section>
  );
};

export default UserList;
