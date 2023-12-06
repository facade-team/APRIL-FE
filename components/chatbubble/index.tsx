import { IChatBubbleProps } from "@/interfaces";
import moment from "moment";

const ChatBubble = (props: IChatBubbleProps) => {
  const { message, isMine, time } = props;
  const myMessageStyle = `bg-main_green rounded-ee-none items-end`;
  const yourMessageStyle = `bg-white rounded-es-none items-start`;
  const chatBubbleStyle = `min-w-[120px] max-w-[calc(70%)] rounded-2xl p-4 flex-shrink-0 shadow-custom word-break-break-all whitespace-pre-wrap flex flex-col`;

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"} mb-4 `}>
      <div
        className={`${chatBubbleStyle} ${
          isMine ? myMessageStyle : yourMessageStyle
        } `}
      >
        <div className="text-base pb-1">{message}</div>
        <div className="text-sm text-gray-300">
          {moment(time).format("M월 D일 h:mm A")}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
