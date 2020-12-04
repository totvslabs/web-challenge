
export interface Message {
  text?: string;
  date?: Date;
  user?: MessageUser;
}

export interface MessageUser {
  name: string;
  username: string;
  avatar: string;
}
