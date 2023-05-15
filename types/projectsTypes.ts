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

export type FullNameType = { first: string; last: string };
