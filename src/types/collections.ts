export type CollectionItem = {
  type: string;
  image: string;
};
export type Collections = {
  id: string;
  title: string;
  tags: string[];   
  color?: string;
  style?: string;
  mood?: string;
  items: CollectionItem[];
}