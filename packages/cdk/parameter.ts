import * as cdk from 'aws-cdk-lib';
import {
  StackInput,
  stackInputSchema,
  ProcessedStackInput,
} from './lib/stack-input';
import { ModelConfiguration } from 'generative-ai-use-cases';

// Get parameters from CDK Context
const getContext = (app: cdk.App): StackInput => {
  const params = stackInputSchema.parse(app.node.getAllContext());
  return params;
};
const speechToSpeechModelConfig = {
  modelId: 'amazon.nova-sonic-v1:0',
  region: 'ap-northeast-1'
};
// If you want to define parameters directly
const envs: Record<string, Partial<StackInput>> = {
  // If you want to define an anonymous environment, uncomment the following and the content of cdk.json will be ignored.
  // If you want to define an anonymous environment in parameter.ts, uncomment the following and the content of cdk.json will be ignored.
   '': {
  //   // Parameters for anonymous environment
  //   // If you want to override the default settings, add the following
       modelRegion: 'us-west-2',
  modelIds: [
    {modelId: 'jp.anthropic.claude-sonnet-4-5-20250929-v1:0',
        region: 'ap-northeast-1',
      },
    'global.anthropic.claude-sonnet-4-20250514-v1:0',
    //'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
      //'anthropic.claude-3-5-sonnet-20241022-v2:0',
      'anthropic.claude-3-5-haiku-20241022-v1:0',
      'us.amazon.nova-premier-v1:0',
      'us.amazon.nova-pro-v1:0',
      'us.amazon.nova-lite-v1:0',
      'us.amazon.nova-micro-v1:0',
      'us.meta.llama3-3-70b-instruct-v1:0',
      'us.meta.llama4-maverick-17b-instruct-v1:0',
      'us.meta.llama4-scout-17b-instruct-v1:0',
      //'us.twelvelabs.pegasus-1-2-v1:0',
      //'meta.llama3-1-70b-instruct-v1:0',
      //'meta.llama3-1-8b-instruct-v1:0',
      'cohere.command-r-plus-v1:0',
      'cohere.command-r-v1:0',
      'us.mistral.pixtral-large-2502-v1:0',
      //'mistral.mistral-large-2407-v1:0',
      'openai.gpt-oss-120b-1:0',
  ],
   imageGenerationModelIds: [
      'stability.stable-image-ultra-v1:1',
      'stability.sd3-5-large-v1:0',
      'stability.stable-image-core-v1:1',
      'amazon.titan-image-generator-v2:0',
      'amazon.titan-image-generator-v1',
    ],
    videoGenerationModelIds: ['luma.ray-v2:0'],
    speechToSpeechModelIds: [speechToSpeechModelConfig],
    ragEnabled: true,
    kendraIndexArn:
      'arn:aws:kendra:ap-northeast-1:326497581172:index/3ce313b7-4bfb-4257-8127-11db308dfdbe',
    kendraDataSourceBucketName: 'jre-regulations',
    inlineAgents: true,
    agentEnabled: true,
  agents: [
      {
        displayName: 'データ分析屋さん',
        agentId: 'TWU9YT34HX',
        aliasId: 'MULPCVZTCS',
      },
      {
        displayName: '安全エージェント',
        agentId: '9JNBPBZAXJ',
        aliasId: 'WNGLTT9I4L',
      },
      {
        displayName: '電力事故記事エージェント',
        agentId: 'L8T3RJSWOU',
        aliasId: 'HF5RVNOSWJ',
      },
      {
        displayName: '電力審査エージェント',
        agentId: 'XRTHRHNZ2M',
        aliasId: '3KYC8URE9G',
      },
          {
        displayName: '配電エージェント',
        agentId: '48ZHU6N3VY',
        aliasId: 'S3P2GGSK9U',
      },
    ],
    allowedSignUpEmailDomains: ['jreast.co.jp'],
  },
  dev: {
    account: '326497581172',
    region: 'ap-northeast-1',
    //cloudfront: {
      //distributionId: 'E1KFW6C4JGJUB6',
      domainName: 'd2pye9lkf1lyw0.cloudfront.net',
    // エージェント設定を追加
  inlineAgents: true,
  agentEnabled: true,
  agents: [
    {
      displayName: 'データ分析屋さん',
      agentId: 'TWU9YT34HX',
      aliasId: 'MULPCVZTCS',
    },
    {
      displayName: '安全エージェント',
      agentId: '9JNBPBZAXJ',
      aliasId: 'WNGLTT9I4L',
    },
    {
      displayName: '電力事故記事エージェント',
      agentId: 'L8T3RJSWOU',
      aliasId: 'HF5RVNOSWJ',
    },
    {
      displayName: '電力審査エージェント',
      agentId: 'XRTHRHNZ2M',
      aliasId: '3KYC8URE9G',
    },
    {
      displayName: '配電エージェント',
      agentId: '48ZHU6N3VY',
      aliasId: 'S3P2GGSK9U',
    },
  ],
    // 開発環境用のパラメーター
     modelRegion: 'us-west-2',
    modelIds: [
     {modelId: 'jp.anthropic.claude-sonnet-4-5-20250929-v1:0',
        region: 'ap-northeast-1',
      },
    'global.anthropic.claude-sonnet-4-20250514-v1:0',
    //'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
      //'anthropic.claude-3-5-sonnet-20241022-v2:0',
      'anthropic.claude-3-5-haiku-20241022-v1:0',
      'us.amazon.nova-premier-v1:0',
      'us.amazon.nova-pro-v1:0',
      'us.amazon.nova-lite-v1:0',
      'us.amazon.nova-micro-v1:0',
      'us.meta.llama3-3-70b-instruct-v1:0',
      'us.meta.llama4-maverick-17b-instruct-v1:0',
      'us.meta.llama4-scout-17b-instruct-v1:0',
      //'us.twelvelabs.pegasus-1-2-v1:0',
      //'meta.llama3-1-70b-instruct-v1:0',
      //'meta.llama3-1-8b-instruct-v1:0',
      'cohere.command-r-plus-v1:0',
      'cohere.command-r-v1:0',
      'us.mistral.pixtral-large-2502-v1:0',
      //'mistral.mistral-large-2407-v1:0',
      'openai.gpt-oss-120b-1:0',
    ],
    imageGenerationModelIds: [
      'stability.stable-image-ultra-v1:1',
      'stability.sd3-5-large-v1:0',
      'stability.stable-image-core-v1:1',
      'amazon.titan-image-generator-v2:0',
      'amazon.titan-image-generator-v1',
    ],
    videoGenerationModelIds: ['luma.ray-v2:0'],
    speechToSpeechModelIds: [speechToSpeechModelConfig],
    ragEnabled: true,
    kendraIndexArn:
      'arn:aws:kendra:ap-northeast-1:326497581172:index/3ce313b7-4bfb-4257-8127-11db308dfdbe',
    kendraDataSourceBucketName: 'jre-regulations',
    kendraIndexLanguage: 'ja',
    ragKnowledgeBaseEnabled: false,
    //ragKnowledgeBaseId: 'PQSVG6HETU',
    //ragKnowledgeBaseStandbyReplicas: false,
    //ragKnowledgeBaseAdvancedParsing: false,
    //ragKnowledgeBaseAdvancedParsingModelId:
      //'anthropic.claude-3-sonnet-20240229-v1:0',
    queryDecompositionEnabled: true,
    embeddingModelId: 'amazon.titan-embed-text-v2:0',
    allowedSignUpEmailDomains: ['jreast.co.jp'],
    // Parameters for development environment
  },
  staging: {
    // Parameters for staging environment
  },
  prod: {
    // Parameters for production environment
  },
  // If you need other environments, customize them as needed
};

// For backward compatibility, get parameters from CDK Context > parameter.ts
export const getParams = (app: cdk.App): ProcessedStackInput => {
  // By default, get parameters from CDK Context
  let params = getContext(app);

  // If the env matches the ones defined in envs, use the parameters in envs instead of the ones in context
  if (envs[params.env]) {
    params = stackInputSchema.parse({
      ...envs[params.env],
      env: params.env,
    });
  }
  // Make the format of modelIds, imageGenerationModelIds consistent
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
    speechToSpeechModelIds: convertToModelConfiguration(
      params.speechToSpeechModelIds,
      params.modelRegion
    ),
    endpointNames: convertToModelConfiguration(
      params.endpointNames,
      params.modelRegion
    ),
    // Process agentCoreRegion: null -> modelRegion
    agentCoreRegion: params.agentCoreRegion || params.modelRegion,
  };
};
