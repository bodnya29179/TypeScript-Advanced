/**
 * TypeScript won't know that this file is related to the existing axios module.
 *
 * - TypeScript might not recognize the original axios types.
 * - The declaration might be treated as a new module instead of modifying the existing one.
 * - In environments like ts-node, there could be issues with resolving types.
 */
declare module 'axios' {
  export interface AxiosResponse {
    test: string;
  }
}
