export interface User {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  groups: Array<string>;
  access: Array<string>;
  last_login: number;
  id: string;
}
