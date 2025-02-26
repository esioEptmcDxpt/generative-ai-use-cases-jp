# デプロイメモ

## デプロイ先の URL

- 開発用: https://d2pye9lkf1lyw0.cloudfront.net
- 本番用: https://d3js90bnm4zs1c.cloudfront.net

## デプロイ用のコマンド

``` bash
# 本番環境向けのデプロイ
npm run cdk:deploy

# 開発環境向けのデプロイ
npm run cdk:deploy -- -c env=dev
```

## ローカル環境で開発する際のコマンド

``` bash
# ローカル環境で開発
npm run web:devw

# dev 環境のバックエンドを使用してローカルで開発
npm run web:devw --env=dev
```

# Deploy outputs

## First Deploy outputs

``` bash
Outputs:
GenerativeAiUseCasesStackdev.APIApiEndpoint036547C6 = https://36n72los60.execute-api.ap-northeast-1.amazonaws.com/api/
GenerativeAiUseCasesStackdev.AgentEnabled = false
GenerativeAiUseCasesStackdev.AgentNames = W10=
GenerativeAiUseCasesStackdev.ApiEndpoint = https://36n72los60.execute-api.ap-northeast-1.amazonaws.com/api/
GenerativeAiUseCasesStackdev.EndpointNames = []
GenerativeAiUseCasesStackdev.ExportsOutputRefAuthUserPool8115E87F4F9C6D4C = ap-northeast-1_SuKu3GFPC
GenerativeAiUseCasesStackdev.ExportsOutputRefAuthUserPoolclientA74673A913CB5D33 = 2dv33a4bm8bscppacv4v5e6hf0
GenerativeAiUseCasesStackdev.Flows = W10=
GenerativeAiUseCasesStackdev.HiddenUseCases = {}
GenerativeAiUseCasesStackdev.IdPoolId = ap-northeast-1:5db059b7-eda9-49ba-b9f4-c4d4f0c6d029
GenerativeAiUseCasesStackdev.ImageGenerateModelIds = ["amazon.nova-canvas-v1:0"]
GenerativeAiUseCasesStackdev.InlineAgents = false
GenerativeAiUseCasesStackdev.InvokeFlowFunctionArn = arn:aws:lambda:ap-northeast-1:326497581172:function:GenerativeAiUseCasesStackdev-APIInvokeFlow03786D76-R1pHgP1cuV86
GenerativeAiUseCasesStackdev.ModelIds = ["us.anthropic.claude-3-5-sonnet-20241022-v2:0","us.anthropic.claude-3-5-haiku-20241022-v1:0","us.amazon.nova-pro-v1:0","us.amazon.nova-lite-v1:0","us.amazon.nova-micro-v1:0"]
GenerativeAiUseCasesStackdev.ModelRegion = us-east-1
GenerativeAiUseCasesStackdev.OptimizePromptFunctionArn = arn:aws:lambda:ap-northeast-1:326497581172:function:GenerativeAiUseCasesStack-APIOptimizePromptFunctio-AHwNf3oke9iD
GenerativeAiUseCasesStackdev.PredictStreamFunctionArn = arn:aws:lambda:ap-northeast-1:326497581172:function:GenerativeAiUseCasesStack-APIPredictStream44DDBC25-nE7XG5DZ6d7t
GenerativeAiUseCasesStackdev.RagEnabled = false
GenerativeAiUseCasesStackdev.RagKnowledgeBaseEnabled = false
GenerativeAiUseCasesStackdev.Region = ap-northeast-1
GenerativeAiUseCasesStackdev.SamlAuthEnabled = false
GenerativeAiUseCasesStackdev.SamlCognitoDomainName = 
GenerativeAiUseCasesStackdev.SamlCognitoFederatedIdentityProviderName = 
GenerativeAiUseCasesStackdev.SelfSignUpEnabled = true
GenerativeAiUseCasesStackdev.UseCaseBuilderEnabled = true
GenerativeAiUseCasesStackdev.UserPoolClientId = 2dv33a4bm8bscppacv4v5e6hf0
GenerativeAiUseCasesStackdev.UserPoolId = ap-northeast-1_SuKu3GFPC
GenerativeAiUseCasesStackdev.WebUrl = https://d2pye9lkf1lyw0.cloudfront.net
Stack ARN:
arn:aws:cloudformation:ap-northeast-1:326497581172:stack/GenerativeAiUseCasesStackdev/7587db30-f36c-11ef-8a20-0e382519b027
```

## Second Deploy outputs

``` bash
Outputs:
GenerativeAiUseCasesStackdev.APIApiEndpoint036547C6 = https://36n72los60.execute-api.ap-northeast-1.amazonaws.com/api/
GenerativeAiUseCasesStackdev.AgentEnabled = true
GenerativeAiUseCasesStackdev.AgentNames = WyJDb2RlSW50ZXJwcmV0ZXIiLCJDb2RlIEludGVycHJldGVyIl0=
GenerativeAiUseCasesStackdev.ApiEndpoint = https://36n72los60.execute-api.ap-northeast-1.amazonaws.com/api/
GenerativeAiUseCasesStackdev.EndpointNames = []
GenerativeAiUseCasesStackdev.ExportsOutputRefAuthUserPool8115E87F4F9C6D4C = ap-northeast-1_SuKu3GFPC
GenerativeAiUseCasesStackdev.ExportsOutputRefAuthUserPoolclientA74673A913CB5D33 = 2dv33a4bm8bscppacv4v5e6hf0
GenerativeAiUseCasesStackdev.Flows = W10=
GenerativeAiUseCasesStackdev.HiddenUseCases = {}
GenerativeAiUseCasesStackdev.IdPoolId = ap-northeast-1:5db059b7-eda9-49ba-b9f4-c4d4f0c6d029
GenerativeAiUseCasesStackdev.ImageGenerateModelIds = ["stability.stable-diffusion-xl-v1","stability.stable-image-ultra-v1:1","stability.stable-image-core-v1:1","amazon.titan-image-generator-v2:0","amazon.titan-image-generator-v1","stability.sd3-large-v1:0","stability.sd3-5-large-v1:0","stability.stable-image-core-v1:0","stability.stable-image-ultra-v1:0"]
GenerativeAiUseCasesStackdev.InlineAgents = false
GenerativeAiUseCasesStackdev.InvokeFlowFunctionArn = arn:aws:lambda:ap-northeast-1:326497581172:function:GenerativeAiUseCasesStackdev-APIInvokeFlow03786D76-R1pHgP1cuV86
GenerativeAiUseCasesStackdev.ModelIds = ["us.anthropic.claude-3-7-sonnet-20250219-v1:0","anthropic.claude-3-5-sonnet-20240620-v1:0","anthropic.claude-3-5-haiku-20241022-v1:0","anthropic.claude-3-5-sonnet-20241022-v2:0","anthropic.claude-3-opus-20240229-v1:0","anthropic.claude-3-sonnet-20240229-v1:0","anthropic.claude-3-haiku-20240307-v1:0","meta.llama3-1-70b-instruct-v1:0","meta.llama3-1-8b-instruct-v1:0","cohere.command-r-plus-v1:0","cohere.command-r-v1:0","mistral.mistral-large-2407-v1:0"]
GenerativeAiUseCasesStackdev.ModelRegion = us-west-2
GenerativeAiUseCasesStackdev.OptimizePromptFunctionArn = arn:aws:lambda:ap-northeast-1:326497581172:function:GenerativeAiUseCasesStack-APIOptimizePromptFunctio-AHwNf3oke9iD
GenerativeAiUseCasesStackdev.PredictStreamFunctionArn = arn:aws:lambda:ap-northeast-1:326497581172:function:GenerativeAiUseCasesStack-APIPredictStream44DDBC25-nE7XG5DZ6d7t
GenerativeAiUseCasesStackdev.RagEnabled = true
GenerativeAiUseCasesStackdev.RagKnowledgeBaseEnabled = false
GenerativeAiUseCasesStackdev.Region = ap-northeast-1
GenerativeAiUseCasesStackdev.SamlAuthEnabled = false
GenerativeAiUseCasesStackdev.SamlCognitoDomainName = 
GenerativeAiUseCasesStackdev.SamlCognitoFederatedIdentityProviderName = 
GenerativeAiUseCasesStackdev.SelfSignUpEnabled = true
GenerativeAiUseCasesStackdev.UseCaseBuilderEnabled = true
GenerativeAiUseCasesStackdev.UserPoolClientId = 2dv33a4bm8bscppacv4v5e6hf0
GenerativeAiUseCasesStackdev.UserPoolId = ap-northeast-1_SuKu3GFPC
GenerativeAiUseCasesStackdev.WebUrl = https://d2pye9lkf1lyw0.cloudfront.net
Stack ARN:
arn:aws:cloudformation:ap-northeast-1:326497581172:stack/GenerativeAiUseCasesStackdev/7587db30-f36c-11ef-8a20-0e382519b027
```

## 3rd Deploy outputs

``` bash

```
