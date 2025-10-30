// AdditionalModelRequestFields 型を定義
export interface AdditionalModelRequestFields {
  [key: string]: any;
}

export const getModelMetadata = (_modelId: string): { additionalFields?: AdditionalModelRequestFields } => {
  // モデルIDに基づいて追加フィールドを返す
  return {
    additionalFields: {}
  };
};