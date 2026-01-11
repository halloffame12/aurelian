
export interface CollectionItem {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'Seasonal';
  description: string;
  fabric: string;
  imageUrl: string;
}

export interface LookbookImage {
  id: string;
  url: string;
  caption: string;
}

export interface NavLink {
  label: string;
  path: string;
}
