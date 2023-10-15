import { Button, Divider, Form, Input, Select, Space } from "antd";
import SearchIcon from "icons/search";
import { debounce } from "lodash";
import styled from "styled-components";

const SelectWithIcon = styled(Select)`
  min-width: 120px;
`;

const SmallDivider = styled(Divider)`
  margin: 5px 0px;
`;

const Filters = ({
  group,
  setFilteredUsers,
  setFilterGroups,
}: {
  group: Array<{}>;
  setFilteredUsers: (users: string) => void;
  setFilterGroups: (groups: Array<string>) => void;
}) => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <Space>
        <Form.Item name="search">
          <Input
            onChange={debounce((event: React.ChangeEvent<HTMLInputElement>) => {
              const {
                target: { value },
              } = event;
              setFilteredUsers(value);
            }, 1000)}
            placeholder={"search"}
            prefix={<SearchIcon />}
          />
        </Form.Item>
        <Form.Item name="filter">
          <SelectWithIcon
            options={group}
            placeholder={"Team"}
            onChange={(value) => {
              setFilterGroups(value);
            }}
            dropdownRender={(menu) => {
              return (
                <>
                  {menu}
                  <SmallDivider />
                  <Button
                    onClick={() => {
                      setFilterGroups([]);
                      form.setFieldValue("filter", []);
                    }}
                  >
                    Clear filters
                  </Button>
                </>
              );
            }}
            mode="multiple"
          />
        </Form.Item>
      </Space>
    </Form>
  );
};

export default Filters;
