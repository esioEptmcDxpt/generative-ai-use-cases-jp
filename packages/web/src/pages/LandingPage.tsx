import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardDemo from '../components/CardDemo';
import Button from '../components/Button';
import {
  PiChatCircleText,
  PiPencil,
  PiNote,
  PiChatsCircle,
  PiTranslate,
  PiGlobe,
  PiImages,
  PiVideoLight,
  PiNotebook,
  PiPen,
  PiRobot,
  PiVideoCamera,
  PiFlowArrow,
  PiTreeStructure,
  PiPenNib,
  PiMicrophoneBold,
} from 'react-icons/pi';
import AwsIcon from '../assets/aws.svg?react';
import DxIcon from '../assets/DX_Logo_2024.svg?react';
import useInterUseCases from '../hooks/useInterUseCases';
import {
  AgentPageQueryParams,
  ChatPageQueryParams,
  GenerateImagePageQueryParams,
  GenerateVideoPageQueryParams,
  GenerateTextPageQueryParams,
  InterUseCaseParams,
  RagPageQueryParams,
  SummarizePageQueryParams,
  TranslatePageQueryParams,
  WebContentPageQueryParams,
  VideoAnalyzerPageQueryParams,
  DiagramPageQueryParams,
} from '../@types/navigate';
import queryString from 'query-string';
import { MODELS } from '../hooks/useModel';
import useUseCases from '../hooks/useUseCases';
import { useTranslation } from 'react-i18next';

const ragEnabled: boolean = import.meta.env.VITE_APP_RAG_ENABLED === 'true';
const ragKnowledgeBaseEnabled: boolean =
  import.meta.env.VITE_APP_RAG_KNOWLEDGE_BASE_ENABLED === 'true';
const agentEnabled: boolean = import.meta.env.VITE_APP_AGENT_ENABLED === 'true';
const inlineAgents: boolean = import.meta.env.VITE_APP_INLINE_AGENTS === 'true';
const {
  imageGenModelIds,
  videoGenModelIds,
  speechToSpeechModelIds,
  visionEnabled,
  flowChatEnabled,
  agentNames,
} = MODELS;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { enabled } = useUseCases();
  const { setIsShow, init } = useInterUseCases();
  const { t } = useTranslation();

  const demoChat = () => {
    const params: ChatPageQueryParams = {
      // content: t('landing.demo.chat.content'),
      content: `あなたは、最新のデジタル技術とエネルギー効率に精通した鉄道設備エンジニアです。これからの時代、IoTやAI、再生可能エネルギーを駆使して、安全かつ効率的な鉄道インフラの未来を創り出す使命があります。次のテーマについて、具体的な戦略や技術的解決策、そして実現可能なロードマップを交えて語ってください：
『デジタル化と持続可能性が融合する未来の鉄道システム』`,    // ESIO用サンプル
      systemContext: '',
    };
    navigate(`/chat?${queryString.stringify(params)}`);
  };

  const demoRag = () => {
    const params: RagPageQueryParams = {
      // content: t('landing.demo.rag.content'),
      content: `鋼管ビームにやぐらを取り付けるとき、回転防止はどうしたらいい？`,    // ESIO用サンプル
    };
    navigate(`/rag?${queryString.stringify(params)}`);
  };

  const demoRagKnowledgeBase = () => {
    const params: RagPageQueryParams = {
      // content: t('landing.demo.rag.content'),
      content: `鋼管ビームにやぐらを取り付けるとき、回転防止はどうしたらいい？`,    // ESIO用サンプル
    };
    navigate(`/rag-knowledge-base?${queryString.stringify(params)}`);
  };

  const demoAgent = () => {
    if (agentNames.includes('CodeInterpreter')) {
      const params: AgentPageQueryParams = {
        modelId: 'CodeInterpreter',
        // content: t('landing.demo.agent.content'),
        content: `あなたはPythonコードを実行可能なAIエージェントです。以下のタスクに従い、視覚的にインパクトのある3Dグラフを生成し、出力結果とその解説を提示してください。

【タスク】
「サンプルデータを使用して、立体的な3Dグラフ（例：3Dサーフェスプロット）を描画するプログラムを作成せよ」

【要件】
1. サンプルデータとして、x, y軸のグリッドデータおよび対応するz値（例えば、z = sin(√(x²+y²)) など）を生成すること。
2. 3Dグラフの描画には、matplotlibの\`mpl_toolkits.mplot3d\`などのライブラリを使用すること。
3. グラフの見た目や色、角度などを調整し、視覚的なインパクトを高める工夫を盛り込むこと。
4. コードは簡潔かつ明快に記述し、出力結果（3Dグラフの画像）がインパクトのあるものとなるようにすること。
5. 生成したコードの各部分について、どのように3Dグラフを生成・調整しているかの解説を添えること。

【出力形式】
- 生成したPythonコード（コメントを含む）  
- 実行結果（出力された3Dグラフの画像またはその説明）  
- コードの動作や調整ポイントについての解説

上記の手順に従い、立体的な3Dグラフを描画するインパクト重視のPythonプログラムを生成し、実行結果と解説を提示してください。`,    // ESIO用サンプル
      };
      navigate(`/agent?${queryString.stringify(params)}`);
    } else {
      navigate(`/agent`);
    }
  };

  const demoVoiceChat = () => {
    navigate('/voice-chat');
  };

  const demoGenerate = () => {
    const params: GenerateTextPageQueryParams = {
      // information: t('landing.demo.generate.information'),
      // ESIO用サンプル
      information: `鉄道電化方式の歴史は、19世紀末の蒸気機関車による運行から脱却し、環境負荷の低減と運行効率の向上を目指す技術革新の歩みとして位置付けられます。初期には直流方式が採用され、都市近郊や地下鉄などでシンプルな電力供給システムとして運用され、その実用性が確認されました。以降、送電距離の延長や高出力化の必要性から交流方式が導入され、ヨーロッパや北米、日本各国で独自の技術進展が見られるようになりました。各国の事情に合わせた最適な電化方式の選択は、技術者による絶え間ない研究開発と安全性向上の取り組みの成果です。さらに、近年では再生可能エネルギーやデジタル制御技術との融合が試みられ、従来の方式を超えた次世代の電化システムの実現が期待されています。こうした歴史的な進化の過程は、鉄道輸送の信頼性向上と環境保全、そして経済合理性を両立するための不断の挑戦を象徴しており、今後も持続可能な交通インフラの基盤としてさらなる発展が見込まれています。`,
      context: t('landing.demo.generate.context'),
    };
    navigate(`/generate?${queryString.stringify(params)}`);
  };

  const demoSummarize = () => {
    const params: SummarizePageQueryParams = {
      // sentence: t('landing.demo.summarize.sentence'),
      // ESIO用サンプル
      sentence:
        '【鉄道電化方式の歴史】鉄道の電化方式は、19世紀末の産業革命以降、急速な技術進展とともに進化してきた。初期の実験段階では、蒸気機関車による環境負荷や運転効率の問題が指摘され、電力を動力源とする新たな可能性が模索された。最初に採用されたのは直流方式で、都市近郊や地下鉄での運行に適したシンプルな制御系統が特徴であった。これにより、初期の実験路線で一定の成功を収め、電化鉄道の実用化が進んだ。20世紀に入ると、直流方式は広範に普及し、都市部を中心に大量輸送システムが整備された。しかし、送電距離の長大化や高出力を必要とする路線では、直流方式の制限が露呈するようになった。そこで登場したのが交流方式である。交流方式は変圧器や整流装置を利用することで、効率的な長距離送電を可能とし、欧州や一部アジア地域で採用が進んだ。交流と直流、双方の方式が、各国の地理的条件や運行形態に応じて使い分けられるようになった。日本においては、明治以降、都市軌道電車や地下鉄で直流方式が導入され、その後、地方路線や幹線鉄道において交流方式も採用された。高度経済成長期には、通勤輸送の効率化や環境改善を背景に、両方式が融合する形で電化システムが発展し、現在の高性能な鉄道網の基盤を築くに至った。各技術の発展は、安全性やエネルギー効率の向上とともに、経済的合理性を追求する中で、国際的な技術交流や標準化にも寄与している。今日では、再生可能エネルギーの導入やデジタル制御技術の進化が、次世代の電化方式への期待を高めている。鉄道電化の歴史は、技術革新と社会的要請が融合した成果であり、未来の持続可能な交通システムの実現に向けた重要な指針となっている。',
      additionalContext: '',
    };
    navigate(`/summarize?${queryString.stringify(params)}`);
  };

  const demoWriter = () => {
    navigate(`/writer`);
  };

  const demoTranslate = () => {
    const params: TranslatePageQueryParams = {
      sentence: t('landing.demo.translate.sentence'),
      additionalContext: '',
      language: t('landing.demo.translate.language'),
    };
    navigate(`/translate?${queryString.stringify(params)}`);
  };

  const demoWebContent = () => {
    const params: WebContentPageQueryParams = {
      // url: t('landing.demo.web_content.url'),
      url: 'https://ja.wikipedia.org/wiki/Suica%E3%81%AE%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3',    // ESIO用サンプル
      context: '',
    };
    navigate(`/web-content?${queryString.stringify(params)}`);
  };

  const demoGenerateImage = () => {
    const params: GenerateImagePageQueryParams = {
      // content: t('landing.demo.image.content'),
      // ESIO用のサンプル
      content: `鉄道電気設備技術者向けの広告デザイン案を作成してください。
キーワード：先進技術、精密、安全、信頼性、鉄道電化、効率、産業、技術革新、エネルギー管理、プロフェッショナル`,
    };
    navigate(`/image?${queryString.stringify(params)}`);
  };

  const demoGenerateVideo = () => {
    const params: GenerateVideoPageQueryParams = {
      prompt: 'A banana is dancing in the middle of the ocean',
    };
    navigate(`/video?${queryString.stringify(params)}`);
  };

  const demoVideoAnalyzer = () => {
    const params: VideoAnalyzerPageQueryParams = {
      content: t('landing.demo.video.content'),
    };
    navigate(`/video-analyzer?${queryString.stringify(params)}`);
  };

  const demoGenerateDiagram = () => {
    const params: DiagramPageQueryParams = {
      content: t('landing.demo.diagram.content'),
    };
    navigate(`/diagram?${queryString.stringify(params)}`);
  };

  const demoBlog = () => {
    setIsShow(true);
    init(t('landing.use_cases_integration.blog.title'), [
      {
        title: t('useCaseBuilder.blog.reference_info'),
        description: t('useCaseBuilder.blog.reference_info_description'),
        path: 'web-content',
        params: {
          url: {
            value: 'https://aws.amazon.com/jp/what-is/generative-ai/',
          },
          context: {
            value: t('useCaseBuilder.blog.reference_info_context'),
          },
        } as InterUseCaseParams<WebContentPageQueryParams>,
      },
      {
        title: t('useCaseBuilder.blog.generate_article'),
        description: t('useCaseBuilder.blog.generate_article_description'),
        path: 'generate',
        params: {
          context: {
            value: t('useCaseBuilder.blog.generate_article_context'),
          },
          information: {
            value: '{content}',
          },
        } as InterUseCaseParams<GenerateTextPageQueryParams>,
      },
      {
        title: t('useCaseBuilder.blog.summarize_article'),
        description: t('useCaseBuilder.blog.summarize_article_description'),
        path: 'summarize',
        params: {
          sentence: {
            value: '{text}',
          },
        } as InterUseCaseParams<SummarizePageQueryParams>,
      },
      {
        title: t('useCaseBuilder.blog.generate_thumbnail'),
        description: t('useCaseBuilder.blog.generate_thumbnail_description'),
        path: 'image',
        params: {
          content: {
            value: t('useCaseBuilder.blog.generate_thumbnail_content', {
              summarizedSentence: '{summarizedSentence}',
            }),
          },
        } as InterUseCaseParams<GenerateImagePageQueryParams>,
      },
    ]);
  };

  const demoMeetingReport = () => {
    setIsShow(true);
    init(t('landing.use_cases_integration.meeting.title'), [
      {
        title: t('useCaseBuilder.meeting.transcription'),
        description: t('useCaseBuilder.meeting.transcription_description'),
        path: 'transcribe',
      },
      {
        title: t('useCaseBuilder.meeting.formatting'),
        description: t('useCaseBuilder.meeting.formatting_description'),
        path: 'generate',
        params: {
          context: {
            value: t('useCaseBuilder.meeting.formatting_context'),
          },
          information: {
            value: '{transcript}',
          },
        } as InterUseCaseParams<GenerateTextPageQueryParams>,
      },
      {
        title: t('useCaseBuilder.meeting.create_minutes'),
        description: t('useCaseBuilder.meeting.create_minutes_description'),
        path: 'generate',
        params: {
          context: {
            value: t('useCaseBuilder.meeting.create_minutes_context'),
          },
          information: {
            value: '{text}',
          },
        } as InterUseCaseParams<GenerateTextPageQueryParams>,
      },
    ]);
  };

  const demoFlowChat = () => {
    navigate(`/flow-chat`);
  };

  return (
    <div className="pb-24">
      <div className="bg-aws-squid-ink flex flex-col items-center justify-center px-3 py-5 text-xl font-semibold text-white lg:flex-row">
        <AwsIcon className="mr-5 size-20" />
        {/* {t('landing.title')} */}
        ではじめる生成 AI - (社内通称)SIO-AI
        <DxIcon className="ml-5 size-20" />
      </div>

      <div className="mx-3 mb-6 mt-5 flex flex-col items-center justify-center text-xs lg:flex-row">
        <Button className="mb-2 mr-0 lg:mb-0 lg:mr-2" onClick={() => {}}>
          {t('common.try')}
        </Button>
        {t('landing.try_message')}
      </div>

      <h1 className="mb-6 flex justify-center text-2xl font-bold">
        {t('landing.use_cases_title')}
      </h1>

      <div className="mx-4 grid gap-x-20 gap-y-5 md:grid-cols-1 xl:mx-20 xl:grid-cols-2">
        <CardDemo
          label={t('landing.use_cases.chat.title')}
          onClickDemo={demoChat}
          icon={<PiChatsCircle />}
          // description={t('landing.use_cases.chat.description')}
          description="ChatGPT, Copilot のように、生成AIとチャット形式で対話できます。初めての方はこちらからお試しください。"
        />
        {ragEnabled && (
          <CardDemo
            label={t('landing.use_cases.rag_chat.title')}
            sub={t('landing.use_cases.rag_chat.sub_kendra')}
            onClickDemo={demoRag}
            icon={<PiChatCircleText />}
            // description={t('landing.use_cases.rag_chat.description_kendra')}
            description="「社内情報に対応した AI チャット」です。電気SIOが運用するデータベースを参照して、社内情報に基づいた回答を生成します。"
          />
        )}
        {ragKnowledgeBaseEnabled && (
          <CardDemo
            // label={t('landing.use_cases.rag_chat.title')}
            label="SIO-AI"
            sub={t('landing.use_cases.rag_chat.sub_kb')}
            onClickDemo={demoRagKnowledgeBase}
            icon={<PiChatCircleText />}
            description={t('landing.use_cases.rag_chat.description_kb')}
          />
        )}
        {agentEnabled && !inlineAgents && (
          <CardDemo
            label={t('landing.use_cases.agent_chat.title')}
            onClickDemo={demoAgent}
            icon={<PiRobot />}
            description={t('landing.use_cases.agent_chat.description')}
          />
        )}
        {flowChatEnabled && (
          <CardDemo
            label={t('landing.use_cases.flow_chat.title')}
            onClickDemo={demoFlowChat}
            icon={<PiFlowArrow />}
            description={t('landing.use_cases.flow_chat.description')}
          />
        )}
        {speechToSpeechModelIds.length > 0 && enabled('voiceChat') && (
          <CardDemo
            label={t('landing.use_cases.voice_chat.title')}
            onClickDemo={demoVoiceChat}
            icon={<PiMicrophoneBold />}
            description={t('landing.use_cases.voice_chat.description')}
          />
        )}
        {enabled('generate') && (
          <CardDemo
            label={t('landing.use_cases.generate_text.title')}
            onClickDemo={demoGenerate}
            icon={<PiPencil />}
            description={t('landing.use_cases.generate_text.description')}
          />
        )}
        {enabled('summarize') && (
          <CardDemo
            label={t('landing.use_cases.summarize.title')}
            onClickDemo={demoSummarize}
            icon={<PiNote />}
            description={t('landing.use_cases.summarize.description')}
          />
        )}
        {enabled('writer') && (
          <CardDemo
            label={t('landing.use_cases.writer.title')}
            onClickDemo={demoWriter}
            icon={<PiPenNib />}
            description={t('landing.use_cases.writer.description')}
          />
        )}
        {enabled('translate') && (
          <CardDemo
            label={t('landing.use_cases.translate.title')}
            onClickDemo={demoTranslate}
            icon={<PiTranslate />}
            description={t('landing.use_cases.translate.description')}
          />
        )}
        {enabled('webContent') && (
          <CardDemo
            label={t('landing.use_cases.web_content.title')}
            onClickDemo={demoWebContent}
            icon={<PiGlobe />}
            description={t('landing.use_cases.web_content.description')}
          />
        )}
        {imageGenModelIds.length > 0 && enabled('image') && (
          <CardDemo
            label={t('landing.use_cases.image.title')}
            onClickDemo={demoGenerateImage}
            icon={<PiImages />}
            description={t('landing.use_cases.image.description')}
          />
        )}
        {videoGenModelIds.length > 0 && enabled('video') && (
          <CardDemo
            label={t('landing.use_cases.video-generation.title')}
            onClickDemo={demoGenerateVideo}
            icon={<PiVideoLight />}
            description={t('landing.use_cases.video-generation.description')}
          />
        )}
        {visionEnabled && enabled('videoAnalyzer') && (
          <CardDemo
            label={t('landing.use_cases.video-analysis.title')}
            onClickDemo={demoVideoAnalyzer}
            icon={<PiVideoCamera />}
            description={t('landing.use_cases.video-analysis.description')}
          />
        )}
        {enabled('diagram') && (
          <CardDemo
            label={t('landing.use_cases.diagram.title')}
            onClickDemo={demoGenerateDiagram}
            icon={<PiTreeStructure />}
            description={t('landing.use_cases.diagram.description')}
          />
        )}
      </div>

      {
        // If any use case integration is enabled, display it
        // Blog article creation
        (enabled('webContent', 'generate', 'summarize', 'image') ||
          // Meeting report creation
          enabled('generate')) && (
          <>
            <h1 className="mb-6 mt-12 flex justify-center text-2xl font-bold">
              {t('landing.use_cases_integration.title')}
            </h1>

            <div className="mx-4 grid gap-x-20 gap-y-5 md:grid-cols-1 xl:mx-20 xl:grid-cols-2">
              {enabled('webContent', 'generate', 'summarize', 'image') && (
                <CardDemo
                  label={t('landing.use_cases_integration.blog.title')}
                  onClickDemo={demoBlog}
                  icon={<PiPen />}
                  description={t(
                    'landing.use_cases_integration.blog.description'
                  )}
                />
              )}

              {enabled('generate') && (
                <CardDemo
                  label={t('landing.use_cases_integration.meeting.title')}
                  onClickDemo={demoMeetingReport}
                  icon={<PiNotebook />}
                  description={t(
                    'landing.use_cases_integration.meeting.description'
                  )}
                />
              )}
            </div>
          </>
        )
      }
    </div>
  );
};

export default LandingPage;
