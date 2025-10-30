import { Transcript } from 'generative-ai-use-cases';

// 拡張された転写結果の型定義
export interface TranscriptionResult {
  resultId: string;
  startTime: number;
  endTime: number;
  isPartial: boolean;
  transcripts: Transcript[];
  languageCode?: string; // languageCodeプロパティを追加
}

// useMicrophoneフックの戻り値の型定義
export interface UseMicrophoneResult {
  startTranscription: (
    languageCode?: string,
    speakerLabel?: boolean,
    languageOptions?: string[],
    enableMultiLanguage?: boolean
  ) => void;
  stopTranscription: () => void;
  recording: boolean;
  clearTranscripts: () => void;
  rawTranscripts: TranscriptionResult[];
  transcriptMic: Transcript[]; // transcriptMicプロパティを追加（オプショナルではなく必須に）
}

// useScreenAudioフックの戻り値の型定義
export interface UseScreenAudioResult {
  prepareScreenCapture: () => Promise<MediaStream>;
  startTranscriptionWithStream: (
    stream: MediaStream,
    languageCode?: string,
    speakerLabel?: boolean,
    languageOptions?: string[],
    enableMultiLanguage?: boolean
  ) => void;
  stopTranscription: () => void;
  recording: boolean;
  clearTranscripts: () => void;
  isSupported: boolean;
  error: string | null;
  rawTranscripts: TranscriptionResult[];
  transcriptScreen?: Transcript[]; // transcriptScreenプロパティを追加（オプショナル）
}