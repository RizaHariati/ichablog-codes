import { PersonListProps } from "@/types/projectsTypes";

export interface IAppState {
  user: IUserState;
  content: IContentState;
}
export interface IUserState {
  name: string;
  fullName: PersonListProps;
}

export interface IContentState {
  country: string;
  city: string;
}
