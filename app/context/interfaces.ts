export interface IAppState {
  user: IUserState;
  content: IContentState;
}
export interface IUserState {
  name: string;
}

export interface IContentState {
  country: string;
  city: string;
}
