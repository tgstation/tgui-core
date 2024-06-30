/**
 * An equivalent to `fetch`, except will automatically retry.
 */
export declare function fetchRetry(url: string, options?: RequestInit, retryTimer?: number): Promise<Response>;
