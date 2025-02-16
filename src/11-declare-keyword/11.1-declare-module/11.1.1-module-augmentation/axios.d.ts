/**
 * The import brings in the existing axios types
 * so we extend them instead of replacing them.
 */
import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse {
    test: string;
  }
}
