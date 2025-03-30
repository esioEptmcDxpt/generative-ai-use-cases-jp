import React, { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PiList,
  PiHouse,
  PiChatCircleText,
  PiPencil,
  PiNote,
  PiChatsCircle,
  PiPenNib,
  PiTranslate,
  PiImages,
  PiVideoLight,
  PiSpeakerHighBold,
  PiGear,
  PiGlobe,
  PiX,
  PiRobot,
  PiVideoCamera,
  PiFlowArrow,
  PiMagicWand,
  PiTreeStructure,
  PiLightningFill,
} from 'react-icons/pi';
import { Outlet } from 'react-router-dom';
import Drawer, { ItemProps } from './components/Drawer';
import ButtonIcon from './components/ButtonIcon';
import '@aws-amplify/ui-react/styles.css';
import useDrawer from './hooks/useDrawer';
import useChatList from './hooks/useChatList';
import PopupInterUseCasesDemo from './components/PopupInterUseCasesDemo';
import useInterUseCases from './hooks/useInterUseCases';
import { MODELS } from './hooks/useModel';
import useScreen from './hooks/useScreen';
import { optimizePromptEnabled } from './hooks/useOptimizePrompt';
import useUseCases from './hooks/useUseCases';

const ragEnabled: boolean = import.meta.env.VITE_APP_RAG_ENABLED === 'true';
const ragKnowledgeBaseEnabled: boolean =
  import.meta.env.VITE_APP_RAG_KNOWLEDGE_BASE_ENABLED === 'true';
const agentEnabled: boolean = import.meta.env.VITE_APP_AGENT_ENABLED === 'true';
const inlineAgents: boolean = import.meta.env.VITE_APP_INLINE_AGENTS === 'true';
const {
  visionEnabled,
  imageGenModelIds,
  videoGenModelIds,
  agentNames,
  flowChatEnabled,
} = MODELS;

// /chat/:chatId の形式から :chatId を返す
// path が別の形式の場合は null を返す
const extractChatId = (path: string): string | null => {
  const pattern = /\/chat\/(.+)/;
  const match = path.match(pattern);

  return match ? match[1] : null;
};

const App: React.FC = () => {
  const { switchOpen: switchDrawer, opened: isOpenDrawer } = useDrawer();
  const { pathname } = useLocation();
  const { getChatTitle } = useChatList();
  const { isShow } = useInterUseCases();
  const { screen, notifyScreen, scrollTopAnchorRef, scrollBottomAnchorRef } =
    useScreen();
  const { enabled } = useUseCases();

  const items: ItemProps[] = [
    {
      label: 'ホーム',
      to: '/',
      icon: <PiHouse />,
      display: 'usecase' as const,
    },
    {
      label: '設定情報',
      to: '/setting',
      icon: <PiGear />,
      display: 'none' as const,
    },
    {
      label: 'チャット',
      to: '/chat',
      icon: <PiChatsCircle />,
      display: 'usecase' as const,
    },
    ragEnabled
      ? {
          label: 'SIO-AI',
          to: '/rag',
          icon: <PiLightningFill />,
          display: 'usecase' as const,
          sub: '文書検索🔎',
        }
      : null,
    ragKnowledgeBaseEnabled
      ? {
          label: 'SIO-AI',
          to: '/rag-knowledge-base',
          icon: <PiChatCircleText />,
          display: 'usecase' as const,
          sub: '文書検索🔎',
        }
      : null,
    agentEnabled && !inlineAgents
      ? {
          label: 'Agent チャット',
          to: '/agent',
          icon: <PiRobot />,
          display: 'usecase' as const,
        }
      : null,
    ...(agentEnabled && inlineAgents
      ? agentNames.map((name: string) => {
          return {
            label: name,
            to: `/agent/${name}`,
            icon: <PiRobot />,
            display: 'usecase' as const,
            sub: 'Agent',
          };
        })
      : []),
    flowChatEnabled
      ? {
          label: 'Flow チャット',
          to: '/flow-chat',
          icon: <PiFlowArrow />,
          display: 'usecase' as const,
        }
      : null,
    enabled('generate')
      ? {
          label: '文章生成',
          to: '/generate',
          icon: <PiPencil />,
          display: 'usecase' as const,
        }
      : null,
    enabled('summarize')
      ? {
          label: '要約',
          to: '/summarize',
          icon: <PiNote />,
          display: 'usecase' as const,
        }
      : null,
    enabled('writer')
      ? {
          label: '執筆',
          to: '/writer',
          icon: <PiPenNib />,
          display: 'usecase' as const,
        }
      : null,
    enabled('translate')
      ? {
          label: '翻訳',
          to: '/translate',
          icon: <PiTranslate />,
          display: 'usecase' as const,
        }
      : null,
    enabled('webContent')
      ? {
          label: 'Web コンテンツ抽出',
          to: '/web-content',
          icon: <PiGlobe />,
          display: 'usecase' as const,
        }
      : null,
    imageGenModelIds.length > 0 && enabled('image')
      ? {
          label: '画像生成',
          to: '/image',
          icon: <PiImages />,
          display: 'usecase' as const,
        }
      : null,
    videoGenModelIds.length > 0 && enabled('video')
      ? {
          label: '動画生成',
          to: '/video',
          icon: <PiVideoLight />,
          display: 'usecase' as const,
        }
      : null,
    visionEnabled && enabled('videoAnalyzer')
      ? {
          label: '映像分析',
          to: '/video-analyzer',
          icon: <PiVideoCamera />,
          display: 'usecase' as const,
        }
      : null,
    enabled('diagram')
      ? {
          label: 'ダイアグラム生成',
          to: '/diagram',
          icon: <PiTreeStructure />,
          display: 'usecase' as const,
        }
      : null,
    {
      label: '音声認識',
      to: '/transcribe',
      icon: <PiSpeakerHighBold />,
      display: 'tool' as const,
    },
    optimizePromptEnabled
      ? {
          label: 'プロンプト最適化',
          to: '/optimize',
          icon: <PiMagicWand />,
          display: 'tool' as const,
        }
      : null,
  ].flatMap((i) => (i !== null ? [i] : []));

  const label = useMemo(() => {
    const chatId = extractChatId(pathname);

    if (chatId) {
      return getChatTitle(chatId) || '';
    } else {
      return items.find((i) => i.to === pathname)?.label || '';
    }
  }, [items, pathname, getChatTitle]);

  // 画面間遷移時にスクロールイベントが発火しない場合 (ページ最上部からページ最上部への移動など)
  // 最上部/最下部の判定がされないので、pathname の変化に応じて再判定する
  useEffect(() => {
    if (screen.current) {
      notifyScreen(screen.current);
    }
  }, [pathname, screen, notifyScreen]);

  return (
    <div
      className="screen:w-screen screen:h-screen overflow-x-hidden overflow-y-scroll"
      ref={screen}>
      <main className="flex-1">
        <div ref={scrollTopAnchorRef}></div>
        <header className="bg-aws-squid-ink visible flex h-12 w-full items-center justify-between text-lg text-white lg:invisible lg:h-0 print:hidden">
          <div className="flex w-10 items-center justify-start">
            <button
              className="focus:ring-aws-sky mr-2 rounded-full  p-2 hover:opacity-50 focus:outline-none focus:ring-1"
              onClick={() => {
                switchDrawer();
              }}>
              <PiList />
            </button>
          </div>

          {label}

          {/* label を真ん中にするためのダミーのブロック */}
          <div className="w-10" />
        </header>

        <div
          className={`fixed -left-64 top-0 z-50 transition-all lg:left-0 lg:z-0 ${
            isOpenDrawer ? 'left-0' : '-left-64'
          }`}>
          <Drawer items={items} />
        </div>

        <div
          id="smallDrawerFiller"
          className={`${isOpenDrawer ? 'visible' : 'invisible'} lg:invisible`}>
          <div
            className="screen:h-screen fixed top-0 z-40 w-screen bg-gray-900/90"
            onClick={switchDrawer}></div>
          <ButtonIcon
            className="fixed left-64 top-0 z-40 text-white"
            onClick={switchDrawer}>
            <PiX />
          </ButtonIcon>
        </div>
        <div className="text-aws-font-color lg:ml-64">
          {/* ユースケース間連携時に表示 */}
          {isShow && <PopupInterUseCasesDemo />}
          <Outlet />
        </div>
        <div ref={scrollBottomAnchorRef}></div>
      </main>
    </div>
  );
};

export default App;
