import { Input, Select, Space } from "antd";
import SearchIcon from "icons/search";
import styled from "styled-components";

const SelectWithIcon = styled(Select)`
  min-width: 120px;
`;

const Filters = ({
  group,
  setFilteredUsers,
}: {
  group: Array<{}>;
  setFilteredUsers: any;
}) => {
  return (
    <Space>
      <Input
        placeholder={"search"}
        prefix={<SearchIcon />}
        onChange={setFilteredUsers}
      />
      <SelectWithIcon options={group} placeholder={"Team"} mode="multiple" />
    </Space>
  );
};

export default Filters;
