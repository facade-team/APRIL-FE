"use client";

import ChatBubble from "@/components/chatbubble";
import { IChatBubbleProps } from "@/interfaces";
import { useEffect, useState } from "react";
import iconSendSvg from "@/assets/icon_send.svg";
import iconMicSvg from "@/assets/icon_mic.svg";
import Image from "next/image";
import axios from "axios";
import MicIcon from "@/assets/icon_mic";
import io from "socket.io-client";
import {
  disconnectSocket,
  initSocketConnection,
  sendSocketMessage,
  socketInfoReceived,
} from "./api/socket";

const dummyChatData = [
  {
    id: 1,
    message: "안녕하세요",
    isMine: false,
    time: new Date().toString(),
  },

  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    isMine: false,
    time: new Date().toString(),
  },
  {
    id: 4,
    message:
      "명령하신 “오늘은 오후 11시에 자서 내일 오전 6시 30분에 일어날 예정이야” 에 대한 기기 예약 결과는 다음과 같습니다.\n\n2023년 11월 02일 23:00 블라인드 차단\n2023년 11월 02일 23:00 침실 전등 off\n2023년 11월 03일 06:30 블라인드 개방\n2023년 11월 03일 06:30 침실 전등 on\n2023년 11월 03일 06:30 TV on\n2023년 11월 02일 23:00 ~ 2023년 11월 03일 06:30에 에어컨 실내 온도는 26도로 유지",
    isMine: false,
    time: new Date().toString(),
  },
  {
    id: 5,
    message:
      "명령하신 “오늘은 오후 11시에 자서 내일 오전 6시 30분에 일어날 예정이야” 에 대한 기기 예약 결과는 다음과 같습니다.\n\n2023년 11월 02일 23:00 블라인드 차단\n2023년 11월 02일 23:00 침실 전등 off\n2023년 11월 03일 06:30 블라인드 개방\n2023년 11월 03일 06:30 침실 전등 on\n2023년 11월 03일 06:30 TV on\n2023년 11월 02일 23:00 ~ 2023년 11월 03일 06:30에 에어컨 실내 온도는 26도로 유지",
    isMine: false,
    time: new Date().toString(),
  },
  {
    id: 6,
    message:
      "명령하신 “오늘은 오후 11시에 자서 내일 오전 6시 30분에 일어날 예정이야” 에 대한 기기 예약 결과는 다음과 같습니다.\n\n2023년 11월 02일 23:00 블라인드 차단\n2023년 11월 02일 23:00 침실 전등 off\n2023년 11월 03일 06:30 블라인드 개방\n2023년 11월 03일 06:30 침실 전등 on\n2023년 11월 03일 06:30 TV on\n2023년 11월 02일 23:00 ~ 2023년 11월 03일 06:30에 에어컨 실내 온도는 26도로 유지",
    isMine: false,
    time: new Date().toString(),
  },
  {
    id: 2,
    message: "아뇨",
    isMine: true,
    time: new Date().toString(),
  },
  {
    id: 7,
    message:
      "명령하신 “오늘은 오후 11시에 자서 내일 오전 6시 30분에 일어날 예정이야” 에 대한 기기 예약 결과는 다음과 같습니다.\n\n2023년 11월 02일 23:00 블라인드 차단\n2023년 11월 02일 23:00 침실 전등 off\n2023년 11월 03일 06:30 블라인드 개방\n2023년 11월 03일 06:30 침실 전등 on\n2023년 11월 03일 06:30 TV on\n2023년 11월 02일 23:00 ~ 2023년 11월 03일 06:30에 에어컨 실내 온도는 26도로 유지",
    isMine: false,
    time: new Date().toString(),
  },
];

export default function Home() {
  const [chatValue, setChatValue] = useState("");

  useEffect(() => {
    initSocketConnection();
    socketInfoReceived("message", (error, message) => {
      if (error) {
        console.error("Socket error:", error);
        return;
      }
      console.log("Message from server:", message);
    });
    return () => {
      disconnectSocket();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatValue === "") {
      return;
    }
    const target = e.target as typeof e.target & {
      [key: string]: HTMLInputElement;
    };
    const message = target[0].value;
    console.log(message);
    sendSocketMessage("chat", { message });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatValue(e.target.value);
    handleResizeHeight(e);
  };
  const resizeChatArea = () => {
    if (window) {
      const chatBottom = document.getElementById("chatbottom");
      if (chatBottom) {
        chatBottom.scrollIntoView();
      }
    }
  };
  const handleResizeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
    resizeChatArea();
  };

  useEffect(() => {
    resizeChatArea();
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-slate-100 py-8 px-40 overflow-auto">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-hidden">
          <div className="relative h-full">
            <div className="h-full overflow-y-auto w-full">
              <div className="flex flex-col pb-9">
                {dummyChatData.map((chat: IChatBubbleProps) => (
                  <ChatBubble
                    key={chat.id}
                    {...chat}
                  />
                ))}
                <div id="chatbottom"></div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full pt-2 relative bg-slate-100"
        >
          <textarea
            rows={1}
            style={{ maxHeight: "200px" }}
            className="font-semibold w-full bg-white rounded-2xl px-6 py-4 flex-shrink-0 shadow-custom word-break-break-all whitespace-pre-wrap flex flex-col border border-r-0 resize-none focus:outline-none"
            onChange={handleTextChange}
          />
          <div className="absolute right-2 bottom-1 flex flex-row gap-2">
            {chatValue === "" && (
              <MicIcon
                width={48}
                height={48}
              />
            )}
            <button type="submit">
              <Image
                src={iconSendSvg}
                alt="send"
                width={48}
                height={48}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
