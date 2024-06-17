/**
 * An equivalent to `fetch`, except will automatically retry.
 */
export declare const fetchRetry: (url: string, options?: RequestInit, retryTimer?: number) => Promise<Response>;
