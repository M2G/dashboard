interface User {
  created_at: Date;
  deleted_at: number;
  email: string;
  first_name: string;
  id: number;
  last_connected_at: number;
  last_name: string;
  modified_at: Date;
  password: string;
  reset_password_expires: Date;
  reset_password_token: string;
  username: string;
}

interface PageInfo {
  pageInfo: {
    count: number | null;
    pages: number | null;
    next: number | null;
    prev: number | null;
  } | null;
}

interface Users {
  pageInfo: PageInfo;
  results: User;
}

interface UserList {
  id: string;
  canEdit?: boolean;
  canDelete?: boolean;
  canAdd?: boolean;
  users: Users;
  loading: boolean;
}

interface List {
  id: string;
  header: any;
  rows: any;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  setCurrentPage: (page: number) => void;
}

export type { UserList, List };
