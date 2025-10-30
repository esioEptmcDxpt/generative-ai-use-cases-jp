// src/types/i18next.d.ts
import 'i18next';
import { TFunction as OriginalTFunction } from 'i18next';

declare module 'i18next' {
  // TFunctionの拡張
  interface TFunction extends OriginalTFunction {
    (key: string | string[], options?: any): string;
  }
}

declare module 'react-i18next' {
  export interface UseTranslationResponse {
    t: TFunction;
    i18n: i18n;
    ready: boolean;
  }
}