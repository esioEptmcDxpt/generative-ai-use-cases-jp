import React from 'react';

type Props = {
  className?: string;
};

const ChatDisclaimer: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`text-sm text-gray-500 ${className}`}>
      AIチャットの回答は必ずしも正しいとは限りません。重要な情報は確認するようにしてください。
    </div>
  );
};

export default ChatDisclaimer;