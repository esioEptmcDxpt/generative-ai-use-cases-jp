import * as cdk from 'aws-cdk-lib';
import {
  StackInput,
  stackInputSchema,
  ProcessedStackInput,
} from './lib/stack-input';
import { ModelConfiguration } from 'generative-ai-use-cases-jp';

// CDK Context からパラメータを取得する場合
const getContext = (app: cdk.App): StackInput => {
  const params = stackInputSchema.parse(app.node.getAllContext());
  return params;
};

// パラメータを直接定義する場合
const envs: Record<string, Partial<StackInput>> = {
  // 必要に応じて以下をカスタマイズ
  // paramter.ts で無名環境を定義したい場合は以下をアンコメントすると cdk.json の内容が無視され、parameter.ts がより優先されます。
  '': {
    // 無名環境のパラメータ
    // デフォルト設定を上書きしたいものは以下に追記
    modelRegion: 'us-west-2',
    modelIds: [
      'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
      'anthropic.claude-3-5-sonnet-20241022-v2:0',
      'anthropic.claude-3-5-haiku-20241022-v1:0',
      'us.amazon.nova-pro-v1:0',
      'us.amazon.nova-lite-v1:0',
      'us.amazon.nova-micro-v1:0',
      'us.meta.llama3-3-70b-instruct-v1:0',
      'meta.llama3-1-70b-instruct-v1:0',
      'meta.llama3-1-8b-instruct-v1:0',
      'cohere.command-r-plus-v1:0',
      'cohere.command-r-v1:0',
      'mistral.mistral-large-2407-v1:0',
    ],
    imageGenerationModelIds: [
      'stability.stable-image-ultra-v1:1',
      'stability.sd3-5-large-v1:0',
      'stability.stable-image-core-v1:1',
      'amazon.titan-image-generator-v2:0',
      'amazon.titan-image-generator-v1',
    ],
    videoGenerationModelIds: ['amazon.nova-reel-v1:0', 'luma.ray-v2:0'],
    ragEnabled: true,
    kendraIndexArn:
      'arn:aws:kendra:ap-northeast-1:326497581172:index/3ce313b7-4bfb-4257-8127-11db308dfdbe',
    kendraDataSourceBucketName: 'jre-regulations',
    inlineAgents: true,
    agentEnabled: true,
    agents: [
      {
        displayName: 'データ分析屋さん (AIエージェント)',
        agentId: 'TWU9YT34HX',
        aliasId: 'MULPCVZTCS',
      },
      {
        displayName: '電力審査エージェント',
        agentId: 'XRTHRHNZ2M',
        aliasId: '3KYC8URE9G',
      },
    ],
    allowedSignUpEmailDomains: ['jreast.co.jp'],
  },
  dev: {
    // 開発環境のパラメータ
    modelRegion: 'us-west-2',
    modelIds: [
      'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
      'anthropic.claude-3-5-sonnet-20241022-v2:0',
      'us.amazon.nova-pro-v1:0',
      'us.amazon.nova-lite-v1:0',
      'us.amazon.nova-micro-v1:0',
      'us.meta.llama3-3-70b-instruct-v1:0',
      'meta.llama3-1-70b-instruct-v1:0',
      'meta.llama3-1-8b-instruct-v1:0',
      'cohere.command-r-plus-v1:0',
      'cohere.command-r-v1:0',
      'mistral.mistral-large-2407-v1:0',
    ],
    imageGenerationModelIds: [
      'stability.stable-image-ultra-v1:1',
      'stability.sd3-5-large-v1:0',
      'stability.stable-image-core-v1:1',
      'amazon.titan-image-generator-v2:0',
      'amazon.titan-image-generator-v1',
    ],
    ragEnabled: true,
    kendraIndexArn:
      'arn:aws:kendra:ap-northeast-1:326497581172:index/3ce313b7-4bfb-4257-8127-11db308dfdbe',
    kendraDataSourceBucketName: 'jre-regulations',
    ragKnowledgeBaseEnabled: true,
    ragKnowledgeBaseId: 'PQSVG6HETU',
    ragKnowledgeBaseStandbyReplicas: false,
    ragKnowledgeBaseAdvancedParsing: false,
    ragKnowledgeBaseAdvancedParsingModelId:
      'anthropic.claude-3-sonnet-20240229-v1:0',
    embeddingModelId: 'amazon.titan-embed-text-v2:0',
    allowedSignUpEmailDomains: ['jreast.co.jp'],
  },
  staging: {
    // ステージング環境のパラメータ
  },
  prod: {
    // 本番環境のパラメータ
    // 開発環境のパラメータ
  },
  // 他環境も必要に応じてカスタマイズ
};

// 後方互換性のため、CDK Context > parameter.ts の順でパラメータを取得する
export const getParams = (app: cdk.App): ProcessedStackInput => {
  // デフォルトでは CDK Context からパラメータを取得する
  let params = getContext(app);

  // env が envs で定義したものにマッチ場合は、envs のパラメータを context よりも優先して使用する
  if (envs[params.env]) {
    params = stackInputSchema.parse({
      ...envs[params.env],
      env: params.env,
    });
  }
  //modelIds, imageGenerationModelIdsのフォーマットを揃える
  const convertToModelConfiguration = (
    models: (string | ModelConfiguration)[],
    defaultRegion: string
  ): ModelConfiguration[] => {
    return models.map((model) =>
      typeof model === 'string'
        ? { modelId: model, region: defaultRegion }
        : model
    );
  };

  return {
    ...params,
    modelIds: convertToModelConfiguration(params.modelIds, params.modelRegion),
    imageGenerationModelIds: convertToModelConfiguration(
      params.imageGenerationModelIds,
      params.modelRegion
    ),
    videoGenerationModelIds: convertToModelConfiguration(
      params.videoGenerationModelIds,
      params.modelRegion
    ),
  };
};
