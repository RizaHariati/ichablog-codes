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

type ListProps = {
  items: string[] | number[];
  onClick: (value: string | number) => void;
};

export type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

export type ToastProps = {
  position: `${Horizontal}-${Vertical}`;
};
