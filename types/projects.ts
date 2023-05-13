import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  alt: string;
  content: PortableTextBlock[];
};

type Identity = {
  name: string;
};

type Location = {
  country: string;
  city: string;
};

type ProfileState = {
  identity: Identity;
  location: Location;
};

type Action = {
  type: string;
  payload: any;
};
