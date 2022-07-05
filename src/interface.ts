export interface User {
  username: string;
  email: string;
  password: string;
  salt: string;
  confirmed: boolean;
  administrator: boolean;
  boardMember: boolean;
  token: string;
}

export interface Post {
  title: string;
  author: string;
  images: Array<string>;
  subject: string;
}
