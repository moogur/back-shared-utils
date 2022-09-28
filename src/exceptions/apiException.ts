export class ApiException extends Error {
  public code: string | null;

  public status: number | null;

  public statusText: string;

  public data: any;

  constructor(error: { code?: string | null; status?: number | null; statusText?: string; data?: any } = {}) {
    super();
    this.code = error?.code ?? null;
    this.status = error?.status ?? null;
    this.statusText = error?.statusText ?? 'Unknown error';
    this.data = error?.data ?? {};
  }
}
