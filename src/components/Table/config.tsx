import { Avatar, Flex, Space, Tooltip } from "antd";
import UserIcon from "icons/users";
import moment from "moment";
import styled from "styled-components";
import { User } from "types/users";

const Badge = styled.div`
  font-size: 11px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  padding: 3px 8px;
  border-radius: 20px;
  width: fit-content;
  border: 1px solid #e4e4e7;
  .ant-space-item {
    display: flex;
    align-item: baseline;
  }
`;

const Underline = styled.u`
  font-size: 12px;
  font-weigth 400;
  text-decoration: underline dotted;
  text-decoration-color: #667085;
`;

const FormatedDate = styled.p`
  color: #b2b7c2;
  font-size: 11px;
`;

const Name = styled.span`
  padding: 0;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

const Email = styled.span`
  padding: 0;
  font-size: 11px;
  font-weight: 500;
  margin: 0;
  color: #b2b7c2;
`;

const columns = [
  {
    title: "User",
    dataIndex: "name",
    key: "name",
    render: (name: string, user: User) => {
      return (
        <Flex>
          <Space>
            <Avatar>{name[0]}</Avatar>
            <Flex vertical>
              <Name>{name}</Name>
              <Email>{user.email}</Email>
            </Flex>
          </Space>
        </Flex>
      );
    },
  },
  {
    title: "Team",
    dataIndex: "groups",
    key: "groups",
    render: (team: Array<string>) => {
      return (
        team &&
        team[0] && (
          <Badge>
            <Space>
              <UserIcon />
              {team[0]}
            </Space>
          </Badge>
        )
      );
    },
  },
  {
    title: "Access",
    dataIndex: "access",
    key: "access",
    render: (access: Array<string>) => {
      const title = access.join().replaceAll(",", " ");
      return (
        <Tooltip title={title}>
          <Underline>On {access.length} product</Underline>
        </Tooltip>
      );
    },
  },
  {
    title: "Last Login",
    key: "last_login",
    render: ({ last_login }: { last_login: number }) => {
      const formatedDate = moment(last_login).format("DD/mm/yyyy - hh:MM");

      return <FormatedDate>{formatedDate}</FormatedDate>;
    },
  },
  {
    title: "",
    key: "",
    render: () => {
      return <></>;
    },
  },
];

export default columns;
