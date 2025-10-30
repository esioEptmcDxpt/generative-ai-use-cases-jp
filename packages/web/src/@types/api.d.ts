import { 
  GetFileUploadSignedUrlRequest, 
  GetFileUploadSignedUrlResponse, 
  UploadFileRequest, 
  S3Type 
} from 'generative-ai-use-cases';

interface FlowRequest {
  [key: string]: any;
}

interface FlowApi {
  invokeFlowStream: (req: FlowRequest) => AsyncGenerator<string, void, unknown>;
  
  // 実装: getFileDownloadSignedUrl: async (s3Url: string, s3Type?: S3Type) => { ... }
  getFileDownloadSignedUrl: (s3Url: string, s3Type?: S3Type) => Promise<string>;
  
  // 実装: getS3Uri: (s3Url: string) => { ... }
  getS3Uri: (s3Url: string) => string;
  
  // 実装: getSignedUrl: (req: GetFileUploadSignedUrlRequest) => { ... }
  getSignedUrl: (req: GetFileUploadSignedUrlRequest) => Promise<GetFileUploadSignedUrlResponse>;
  
  // 実装: uploadFile: (url: string, req: UploadFileRequest) => { ... }
  uploadFile: (url: string, req: UploadFileRequest) => Promise<any>;
  
  // 実装: deleteUploadedFile: async (fileName: string) => { ... }
  deleteUploadedFile: (fileName: string) => Promise<any>;
}

// エクスポートを追加して、他のファイルからインポートできるようにする
export { FlowRequest, FlowApi };