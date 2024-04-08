export type UserDetailsProps = {
  username: string;
  email: string;
};


export type TaskType = {
  _id: string;
  name: string;
  type: string;
  description: string;
  totalParts: number;
  progress: number;
  rating: number;
  status: string;
  isFavourite: boolean;
  revisited: number;
};

