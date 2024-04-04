export type TaskType = {
  id: number;
  name: string;
  description: string;
  total: number;
  progress: number;
  rating: number;
  status: string;
  isFavourite: boolean;
  revisited: number;
};