export type AppNotification = {
  id: number;
  message: string;
};

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

export interface List<T extends Item> {
  total_pages: number;
  current_page: number;
  data: T[];
}

export interface BaseActionPayload {
  meta?: {
    module: string;
    [other: string]: any;
  };
}

export interface ItemList<T extends Item> extends BaseActionPayload {
  pagination: Pagination;
  items: T[];
}

export interface NotificationPayload extends BaseActionPayload {
  id: number;
  message: string;
}

export interface RemoveNotificationPayload extends BaseActionPayload {
  id: number;
}

export interface ApiRequestPayload<T extends Item> extends BaseActionPayload {
  queryOptions: ListParams;
  serviceMethod: (listParams: ListParams) => Promise<List<T>>;
}

export interface ApiSuccessPayload<T extends Item> extends BaseActionPayload {
  item: T;
}

export interface ApiErrorPayload extends BaseActionPayload {
  message: string;
  code: string;
}
