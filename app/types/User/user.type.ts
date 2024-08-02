export type user = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  posts: [];
  profilePicture: {
    imageUrl: string;
    filePath: string;
  };
  friends: user[];
};
