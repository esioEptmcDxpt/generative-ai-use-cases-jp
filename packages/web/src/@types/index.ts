import { UnrecordedMessage } from 'generative-ai-use-cases';
import { RetrieveResultItem } from '@aws-sdk/client-kendra';

// ShownMessageをUnrecordedMessageを拡張した型として定義
export interface ShownMessage extends UnrecordedMessage {
  messageId?: string;
  createdDate?: string;
  usecase?: string;
  llmType?: string;
  traceInlineMessage?: string;
  metadata?: any;
  feedback?: any;
  id?: string; // FlowChatで使用
  searchOnly?: boolean;
  referenceItems?: RetrieveResultItem[];
  extraData?: any[];
  trace?: string;
}