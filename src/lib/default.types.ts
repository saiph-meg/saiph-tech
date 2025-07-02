export interface GenericObject {
  [key: string]: any;
}

interface TypeCollection {
  [id: string]: EntityObject;
}

export interface Collection {
  [type: string]: TypeCollection;
}

export interface RelationshipObject {
  id: string;
  type: string;
  meta: GenericObject;
}

interface RelationshipCollection {
  [field: string]: RelationshipObject & RelationshipObject[];
}

interface GetRelationProps {
  field: string | string[];
  entity?: EntityObject;
  data?: Collection;
}

interface GetMediaImageProps {
  field?: string | string[];
  style: string;
  entity?: EntityObject;
  data?: Collection;
}

interface LinkOptionsType {
  attributes: GenericObject;
  [option: string]: any;
}

export interface LinkObject {
  title?: string;
  uri: string;
  options: LinkOptionsType;
}

export interface ImageObject {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

export interface EntityObject {
  attributes: GenericObject;
  relationships: RelationshipCollection;
  template_suggestions: string[];
  bundle: string;
  id: string;
  entity_type: string;
  root: {
    id: string;
    type: string;
  };
}

export interface EntityComponent {
  entity: EntityObject;
  data: Collection;
  getRelation: (
    // eslint-disable-next-line no-unused-vars
    prop: GetRelationProps | string,
    // eslint-disable-next-line no-unused-vars
    getEntity?: boolean
  ) =>
    | RelationshipObject
    | RelationshipObject[]
    | EntityObject
    | EntityObject[];
  getMediaImage: (
    // eslint-disable-next-line no-unused-vars
    prop: GetMediaImageProps | string
  ) => ImageObject | ImageObject[];
}

export interface LayoutComponent extends EntityComponent {
  layout: EntityObject;
}

export interface MenuLinkObject {
  title: string;
  weight: number;
  link: LinkObject;
  id: string;
  relationships?: RelationshipCollection;
  children?: MenuLinkObject[];
}

export interface MenuComponent {
  links: MenuLinkObject[];
}

export function isRelationshipArray(arr: any): arr is RelationshipObject[] {
  return Array.isArray(arr) && arr.length > 0 && isRelationshipObject(arr[0]);
}

export function isEntityArray(arr: any): arr is EntityObject[] {
  return Array.isArray(arr) && arr.length > 0 && isEntityObject(arr[0]);
}

export function isRelationshipObject(obj: any): obj is RelationshipObject {
  return obj && "id" in obj && "type" in obj;
}

export function isEntityObject(obj: any): obj is EntityObject {
  return obj && "id" in obj && "bundle" in obj && "entity_type" in obj;
}

export interface MetaTagObject {
  tag: string;
  attributes: GenericObject;
}

export type FormattedText = {
  tag: string;
  children: GenericObject[];
};
export interface SimpleTabsComponent {
  entities: EntityObject[];
  preTabs?: any[];
  preContent?: Array<JSX.Element[]>;
  data: Collection;
  vertical: boolean;
  getRelation: (
    // eslint-disable-next-line no-unused-vars
    prop: GetRelationProps | string,
    // eslint-disable-next-line no-unused-vars
    getEntity?: boolean
  ) =>
    | RelationshipObject
    | RelationshipObject[]
    | EntityObject
    | EntityObject[];
  getMediaImage: (
    // eslint-disable-next-line no-unused-vars
    prop: GetMediaImageProps | string
  ) => ImageObject | ImageObject[];
}
export type TScreen = "xl" | "lg" | "md" | "sm" | "xs";

export type User = {
  isLoggedIn: boolean;
  email?: string;
  profile?: {
    name: string;
  };
};
