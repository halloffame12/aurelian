
import { CollectionItem, LookbookImage, NavLink } from './types';
import { siteMetadata as siteData } from './metadata';

export const BRAND_NAME = siteData.name;
export const BRAND_TAGLINE = siteData.tagline;
export const SITE_DATA = siteData;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Collections', path: '/collections' },
  { label: 'Lookbook', path: '/lookbook' },
  { label: 'Store', path: '/store' },
  { label: 'Contact', path: '/contact' },
];

export const COLLECTIONS: CollectionItem[] = siteData.collections as CollectionItem[];
export const LOOKBOOK_IMAGES: LookbookImage[] = siteData.lookbook as LookbookImage[];
