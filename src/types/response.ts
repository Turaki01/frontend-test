export interface QueryResponse<T = any> {
    success?: boolean;
    data?: T;
    message?: string | null;
}