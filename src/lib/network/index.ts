export class HttpError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly response: Response;

  constructor(response: Response) {
    super(
      `Request failed with ${response.status} ${response.statusText}`,
    );

    this.name = "HttpError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.response = response;
  }
}

export interface FetchJsonOptions extends RequestInit {
  signal?: AbortSignal;
}

export async function fetchJson<T>(
  input: RequestInfo | URL,
  options?: FetchJsonOptions,
): Promise<T> {
  const response = await fetch(input, options);

  if (!response.ok) {
    throw new HttpError(response);
  }

  return response.json() as Promise<T>;
}

export function isHttpError(
  error: unknown,
): error is HttpError {
  return error instanceof HttpError;
}
