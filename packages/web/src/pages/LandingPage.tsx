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
  PiNotebook,
  PiPen,
  PiRobot,
  PiVideoCamera,
  PiFlowArrow,
  PiTreeStructure,
  PiPenNib,
} from 'react-icons/pi';
import AwsIcon from '../assets/aws.svg?react';
import DxIcon from '../assets/DX_Logo_2024.svg?react';
import useInterUseCases from '../hooks/useInterUseCases';
import {
  AgentPageQueryParams,
  ChatPageQueryParams,
  GenerateImagePageQueryParams,
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

const ragEnabled: boolean = import.meta.env.VITE_APP_RAG_ENABLED === 'true';
const ragKnowledgeBaseEnabled: boolean =
  import.meta.env.VITE_APP_RAG_KNOWLEDGE_BASE_ENABLED === 'true';
const agentEnabled: boolean = import.meta.env.VITE_APP_AGENT_ENABLED === 'true';
const inlineAgents: boolean = import.meta.env.VITE_APP_INLINE_AGENTS === 'true';
const { visionEnabled, flowChatEnabled } = MODELS;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { enabled } = useUseCases();
  const { setIsShow, init } = useInterUseCases();

  const demoChat = () => {
    const params: ChatPageQueryParams = {
      content: `あなたは、最新のデジタル技術とエネルギー効率に精通した鉄道設備エンジニアです。これからの時代、IoTやAI、再生可能エネルギーを駆使して、安全かつ効率的な鉄道インフラの未来を創り出す使命があります。次のテーマについて、具体的な戦略や技術的解決策、そして実現可能なロードマップを交えて語ってください：
『デジタル化と持続可能性が融合する未来の鉄道システム』`,
      systemContext: '',
    };
    navigate(`/chat?${queryString.stringify(params)}`);
  };

  const demoRag = () => {
    const params: RagPageQueryParams = {
      content: `鋼管ビームにやぐらを取り付けるとき、回転防止はどうしたらいい？`,
    };
    navigate(`/rag?${queryString.stringify(params)}`);
  };

  const demoRagKnowledgeBase = () => {
    const params: RagPageQueryParams = {
      content: `鋼管ビームにやぐらを取り付けるとき、回転防止はどうしたらいい？`,
    };
    navigate(`/rag-knowledge-base?${queryString.stringify(params)}`);
  };

  const demoAgent = () => {
    const params: AgentPageQueryParams = {
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

上記の手順に従い、立体的な3Dグラフを描画するインパクト重視のPythonプログラムを生成し、実行結果と解説を提示してください。`,
    };
    navigate(`/agent?${queryString.stringify(params)}`);
  };

  const demoGenerate = () => {
    const params: GenerateTextPageQueryParams = {
      information: `鉄道電化方式の歴史は、19世紀末の蒸気機関車による運行から脱却し、環境負荷の低減と運行効率の向上を目指す技術革新の歩みとして位置付けられます。初期には直流方式が採用され、都市近郊や地下鉄などでシンプルな電力供給システムとして運用され、その実用性が確認されました。以降、送電距離の延長や高出力化の必要性から交流方式が導入され、ヨーロッパや北米、日本各国で独自の技術進展が見られるようになりました。各国の事情に合わせた最適な電化方式の選択は、技術者による絶え間ない研究開発と安全性向上の取り組みの成果です。さらに、近年では再生可能エネルギーやデジタル制御技術との融合が試みられ、従来の方式を超えた次世代の電化システムの実現が期待されています。こうした歴史的な進化の過程は、鉄道輸送の信頼性向上と環境保全、そして経済合理性を両立するための不断の挑戦を象徴しており、今後も持続可能な交通インフラの基盤としてさらなる発展が見込まれています。`,
      context:
        'プレゼンテーションのために、マークダウン形式で章立てして、それぞれ端的に説明を',
    };
    navigate(`/generate?${queryString.stringify(params)}`);
  };

  const demoSummarize = () => {
    const params: SummarizePageQueryParams = {
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
      sentence:
        'こんにちは。私は翻訳を支援する AI アシスタントです。お好きな文章を入力してください。',
      additionalContext: '',
      language: '英語',
    };
    navigate(`/translate?${queryString.stringify(params)}`);
  };

  const demoWebContent = () => {
    const params: WebContentPageQueryParams = {
      url: 'https://ja.wikipedia.org/wiki/Suica%E3%81%AE%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3',
      context: '',
    };
    navigate(`/web-content?${queryString.stringify(params)}`);
  };

  const demoGenerateImage = () => {
    const params: GenerateImagePageQueryParams = {
      content: `鉄道電気設備技術者向けの広告デザイン案を作成してください。
キーワード：先進技術、精密、安全、信頼性、鉄道電化、効率、産業、技術革新、エネルギー管理、プロフェッショナル`,
    };
    navigate(`/image?${queryString.stringify(params)}`);
  };

  const demoVideoAnalyzer = () => {
    const params: VideoAnalyzerPageQueryParams = {
      content:
        '映っているものを説明してください。もし映っているものに文字が書かれている場合はそれも読んでください。',
    };
    navigate(`/video?${queryString.stringify(params)}`);
  };

  const demoGenerateDiagram = () => {
    const params: DiagramPageQueryParams = {
      content: `会社の一般的な経費生産フローを色つきで図示してください。`,
    };
    navigate(`/diagram?${queryString.stringify(params)}`);
  };

  const demoBlog = () => {
    setIsShow(true);
    init('ブログ記事作成', [
      {
        title: '参考情報の取得',
        description: `URL を指定して、記事の参考となる情報を自動取得します。
追加コンテキストを設定することで、自分の欲しい情報のみを抽出可能です。`,
        path: 'web-content',
        params: {
          url: {
            value: 'https://aws.amazon.com/jp/what-is/generative-ai/',
          },
          context: {
            value:
              '生成AIの概要、仕組みを解説している部分、AWSについて説明している部分のみ抽出してください。',
          },
        } as InterUseCaseParams<WebContentPageQueryParams>,
      },
      {
        title: '記事の生成',
        description:
          '参考情報を元にブログの記事を自動生成します。コンテキストを詳細に設定することで、自分の意図した内容で記事が生成されやすくなります。',
        path: 'generate',
        params: {
          context: {
            value: `生成AIの仕組みの解説とAWSで生成AIを利用するメリットを解説するブログ記事を生成してください。記事を生成する際は、<rules></rules>を必ず守ってください。
<rules>
- マークダウン形式で章立てして書いてください。
- 生成AIおよび、AWS初心者をターゲットにした記事にしてください。
- IT初心者が分からないような用語は使わないか、分かりやすい言葉に置き換えてください。
- 生成AIで何ができるのかがわかる記事にしてください。
- 文章量が少ないと読者が満足しないので、一般的な情報は補完しながら文量を多くしてください。
- 読者の興味を惹きつけるような文章にしてください。
</rules>`,
          },
          information: {
            value: '{content}',
          },
        } as InterUseCaseParams<GenerateTextPageQueryParams>,
      },
      {
        title: '記事の要約',
        description:
          'OGP（記事のリンクをシェアする際に表示される記事のプレビュー）用に、記事を要約します。OGP を適切に設定することで、記事がシェアされた際に記事の概要を正しく伝えることができます。',
        path: 'summarize',
        params: {
          sentence: {
            value: '{text}',
          },
        } as InterUseCaseParams<SummarizePageQueryParams>,
      },
      {
        title: '記事のサムネイル生成',
        description:
          'OGP（記事のリンクをシェアする際に表示される記事のプレビュー）用に、サムネイルを生成します。OGP にキャッチーなサムネイルを設定することで、読者の関心を惹くことができるかもしれません。',
        path: 'image',
        params: {
          content: {
            value: `ブログ記事のOGP用にサムネイル画像を生成してください。クラウドやAIの記事であることが一目でわかる画像にしてください。
ブログ記事の概要は<article></article>に設定されています。
<article>
{summarizedSentence}
</article>`,
          },
        } as InterUseCaseParams<GenerateImagePageQueryParams>,
      },
    ]);
  };

  const demoMeetingReport = () => {
    setIsShow(true);
    init('議事録作成', [
      {
        title: '文字起こし',
        description: `「音声認識」の機能を使って、録音データから会話の内容を文字起こしします。任意の音声ファイルで実行してください。
音声認識が完了したら、「整形」ボタンを押してください（音声認識結果は自動でコピーされます）。`,
        path: 'transcribe',
      },
      {
        title: '整形',
        description:
          '「文章生成」の機能を使って、文字起こしファイルを整形します。フィラーワードの除去や音声認識が正しくできていない部分などを補正し、人間が理解しやすいようにします。',
        path: 'generate',
        params: {
          context: {
            value: `録音データの文字起こし結果が入力されているので、<rules></rules>の通りに整形してください。
<rules>
- フィラーワードを除去してください。
- 文字起こしの誤認識と思われる内容は正しい内容に書き換えてください。
- 接続詞などが省略されている場合は、読みやすいように補完してください。
- 質疑応答も省略せず、記載してください。
</rules>`,
          },
          information: {
            value: '{transcript}',
          },
        } as InterUseCaseParams<GenerateTextPageQueryParams>,
      },
      {
        title: '議事録作成',
        description:
          '「文章生成」の機能を使って、議事録を生成します。コンテキストを詳細に指定することで、議事録のフォーマットや記載の粒度を指示できます。',
        path: 'generate',
        params: {
          context: {
            value: `会議の発言内容を元にマークダウン形式の議事録を作成してください。
会議で話したテーマごとに章立てし、議論した内容、決定事項、宿題事項をまとめてください。`,
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
        ではじめる生成 AI - 電力AIチャット
        <DxIcon className="ml-5 size-20" />
      </div>

      <div className="mx-3 mb-6 mt-5 flex flex-col items-center justify-center text-xs lg:flex-row">
        <Button className="mb-2 mr-0 lg:mb-0 lg:mr-2" onClick={demoFlowChat}>
          試す
        </Button>
        をクリックすることで、各ユースケースを体験できます。
      </div>

      <h1 className="mb-6 flex justify-center text-2xl font-bold">
        ユースケース一覧
      </h1>

      <div className="mx-4 grid gap-x-20 gap-y-5 md:grid-cols-1 xl:mx-20 xl:grid-cols-2">
        <CardDemo
          label="チャット"
          onClickDemo={demoChat}
          icon={<PiChatsCircle />}
          description="ChatGPT, Copilot のように、生成AIとチャット形式で対話できます。初めての方はこちらからお試しください。"
        />
        {ragEnabled && (
          <CardDemo
            label="RAG チャット"
            sub="Amazon Kendra"
            onClickDemo={demoRag}
            icon={<PiChatCircleText />}
            description="「社内情報に対応した AI チャット」です。電気SIOが運用するデータベースを参照して、社内情報に基づいた回答を生成します。"
          />
        )}
        {ragKnowledgeBaseEnabled && (
          <CardDemo
            label="RAG チャット"
            sub="Knowledge Base"
            onClickDemo={demoRagKnowledgeBase}
            icon={<PiChatCircleText />}
            description="RAG (Retrieval Augmented Generation) は、情報の検索と LLM の文章生成を組み合わせる手法のことで、効果的な情報アクセスを実現できます。Knowledge Base の Hybrid Search を利用して参考ドキュメントを取得し、LLM が回答を生成します。"
          />
        )}
        {agentEnabled && !inlineAgents && (
          <CardDemo
            label="Agent チャット"
            onClickDemo={demoAgent}
            icon={<PiRobot />}
            description="Agent チャットを体験できます。現在は、データ分析屋さん (AIエージェント) を利用して、データ分析を行えますが、今後は複数のエージェントを組み合わせたチャットを行えるようになります。"
          />
        )}
        {flowChatEnabled && (
          <CardDemo
            label="Flow チャット"
            onClickDemo={demoFlowChat}
            icon={<PiFlowArrow />}
            description="Flow を使用して、複数のステップを持つ対話型チャットフローを作成します。ユーザーの入力に基づいて、動的に次のステップを決定し、より複雑な対話シナリオを実現します。"
          />
        )}
        {enabled('generate') && (
          <CardDemo
            label="文章生成"
            onClickDemo={demoGenerate}
            icon={<PiPencil />}
            description="あらゆる指示に基づいて文章を生成することは 生成AI が最も得意とするタスクの 1 つです。記事・レポート・メールなど、何でも生成できます。"
          />
        )}
        {enabled('summarize') && (
          <CardDemo
            label="要約"
            onClickDemo={demoSummarize}
            icon={<PiNote />}
            description="生成AI は、大量の文章を要約するタスクを得意としています。要約する際に「1行で」や「子供でもわかる言葉で」など指示を与えることができます。"
          />
        )}
        {enabled('writer') && (
          <CardDemo
            label="執筆"
            onClickDemo={demoWriter}
            icon={<PiPenNib />}
            description="多言語で学習した 生成AI は、翻訳を行うことも可能です。また、ただ翻訳するだけではなく、カジュアルさ・対象層など様々な指定された背景情報を翻訳に反映させることができます。"
          />
        )}
        {enabled('translate') && (
          <CardDemo
            label="翻訳"
            onClickDemo={demoTranslate}
            icon={<PiTranslate />}
            description="多言語で学習した 生成AI は、翻訳を行うことも可能です。また、ただ翻訳するだけではなく、カジュアルさ・対象層など様々な指定された背景情報を翻訳に反映させることができます。"
          />
        )}
        {enabled('webContent') && (
          <CardDemo
            label="Web コンテンツ抽出"
            onClickDemo={demoWebContent}
            icon={<PiGlobe />}
            description="ブログやドキュメントなどの Web コンテンツを抽出します。生成AI によって不要な情報はそぎ落とし、成立した文章として整形します。抽出したコンテンツは要約、翻訳などの別のユースケースで利用できます。"
          />
        )}
        {enabled('image') && (
          <CardDemo
            label="画像生成"
            onClickDemo={demoGenerateImage}
            icon={<PiImages />}
            description="画像生成 AI は、テキストや画像を元に新しい画像を生成できます。アイデアを即座に可視化することができ、デザイン作業などの効率化を期待できます。こちらの機能では、プロンプトの作成を 生成AI に支援してもらうことができます。"
          />
        )}
        {visionEnabled && enabled('video') && (
          <CardDemo
            label="映像分析"
            onClickDemo={demoVideoAnalyzer}
            icon={<PiVideoCamera />}
            description="画像も理解できる 生成AI を使って、映像の分析ができます。"
          />
        )}
        {enabled('diagram') && (
          <CardDemo
            label="ダイアグラム生成"
            onClickDemo={demoGenerateDiagram}
            icon={<PiTreeStructure />}
            description="(IT向け) 自然言語による説明、文書やコードから、フローチャート、シーケンス図、マインドマップなどの様々な図を自動的に作成できます。システム設計、ビジネスフロー、プロジェクト計画などの複雑な関係性を、視覚的に表現し理解を効率化します。"
          />
        )}
      </div>

      {
        // いずれかのユースケース連携が有効であれば表示する
        // ブログ記事作成
        (enabled('webContent', 'generate', 'summarize', 'image') ||
          // 議事録作成
          enabled('generate')) && (
          <>
            <h1 className="mb-6 mt-12 flex justify-center text-2xl font-bold">
              ユースケース連携
            </h1>

            <div className="mx-4 grid gap-x-20 gap-y-5 md:grid-cols-1 xl:mx-20 xl:grid-cols-2">
              {enabled('webContent', 'generate', 'summarize', 'image') && (
                <CardDemo
                  label="ブログ記事作成"
                  onClickDemo={demoBlog}
                  icon={<PiPen />}
                  description="複数のユースケースを組み合わせて、ブログ記事を生成します。記事の概要とサムネイル画像も自動生成することで、OGP の設定も容易になります。例として、AWS 公式サイトの情報を元に生成 AI を紹介するブログ記事を生成します。"
                />
              )}

              {enabled('generate') && (
                <CardDemo
                  label="議事録作成"
                  onClickDemo={demoMeetingReport}
                  icon={<PiNotebook />}
                  description="複数のユースケースを組み合わせて、会議の録音データから議事録を自動作成します。録音データの文字起こし、文字起こし結果の整形、議事録作成を人的コストをかけずに行うことが可能です。"
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
