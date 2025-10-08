import { ShownMessage } from 'generative-ai-use-cases';
import { RetrieveResultItem } from '@aws-sdk/client-kendra';

// ShownMessage 型を拡張
declare module 'generative-ai-use-cases' {
  interface ShownMessage {
    searchOnly?: boolean;
    referenceItems?: RetrieveResultItem[];
  }
}
