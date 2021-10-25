export interface Company {
  _id: string;
  name: string;
  description: string;
  published: boolean;
  deck: Array<{ imgUrl: string; altText: string }>;
  createdAt: Date;
}
