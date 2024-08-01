export type user = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  posts: [];
  friends: user[];
};
