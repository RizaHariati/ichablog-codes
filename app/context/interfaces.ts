export interface AppState {
  user: UserState;
  content: ContentState;
}
export interface UserState {
  name: string;
}

export interface ContentState {
  country: string;
  city: string;
}
