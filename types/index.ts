export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  recipient_email?: string;
}

export interface Balance {
  balance: number;
  currency: string;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next?: string;
  previous?: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
