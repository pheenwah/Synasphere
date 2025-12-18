export interface Post {
  _id: string;
  userId: {
    _id: string;
    username: string;
    sunSign: string;
  };
  content: string;
  createdAt: string;
  updatedAt: string;
}
