export type OutfitItem = {
  type: string;
  image: string;
};

export type Outfits = {
  id: string;
  title: string;
  tags: string[];  
  color?: string;
  style?: string;
  mood?: string;
  items: OutfitItem[];
}