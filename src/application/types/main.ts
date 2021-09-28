export type Pagination = {
  totalItems: number;
  page: number;
  pageSize: number;
};

export type ListParams = {
  page?: number;
  page_size?: number;
};

export type Item = {
  id?: string;
};

export interface ItemList<T extends Item> {
  pagination: Pagination;
  items: T[];
}

export interface List<T extends Item> {
  total_pages: number;
  current_page: number;
  data: T[];
}

export type UIError = {
  message: string;
  code: string;
  [other: string]: string;
};
