export interface QueryResponse<T = any> {
    success?: boolean;
    status?: string;
    data?: T;
    message?: string | null;
}