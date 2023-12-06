"use client";

import { useEffect, useState } from "react";
import { TvIcon } from "@/assets/icon_tv";
import { AcIcon } from "@/assets/icon_ac";
import { LightIcon } from "@/assets/icon_light";
import { BlindIcon } from "@/assets/icon_blind";
import Image from "next/image";
import { IRoutineCell } from "@/interfaces";

const RoutineCell = ({ data }: { data: IRoutineCell }) => {
  const [deviceInfo, setDeviceInfo] = useState<IRoutineCell>({
    deviceName: null,
    deviceStatus: null,
  });

  const statusColor = (num: number) => {
    switch (num) {
      case 0:
        return "bg-main_green";
      case 1:
        return "bg-gray-600 text-white";
      case 2:
        return "bg-[#FFBEC2]";
    }
  };

  const renderDeviceIcon = () => {
    switch (data.deviceName) {
      case "TV":
        return (
          <TvIcon
            width={40}
            height={40}
            fill={data.deviceStatus !== "off" ? "#000000" : "#c3c3c3"}
          />
        );
      case "AC":
        return (
          <AcIcon
            width={40}
            height={40}
            fill={data.deviceStatus !== "off" ? "#000000" : "#c3c3c3"}
          />
        );
      case "light":
        return (
          <LightIcon
            width={40}
            height={40}
            fill={data.deviceStatus !== "off" ? "#000000" : "#c3c3c3"}
          />
        );
      case "blind":
        return (
          <BlindIcon
            width={40}
            height={40}
            fill={data.deviceStatus !== "off" ? "#000000" : "#c3c3c3"}
          />
        );
    }
  };

  useEffect(() => {
    if (data.deviceName === "blind") {
      setDeviceInfo({
        ...data,
        statusList: ["올리기", "내리기", "위치조정"],
        place: "침실",
        deviceNameKR: "블라인드",
      });
    } else if (data.deviceName === "light") {
      setDeviceInfo({
        ...data,
        statusList: ["켜기", "끄기"],
        place: "침실",
        deviceNameKR: "전등",
      });
    } else if (data.deviceName === "AC") {
      setDeviceInfo({
        ...data,
        statusList: ["켜기", "끄기", "온도조정"],
        place: "거실",
        deviceNameKR: "에어컨",
      });
    } else {
      setDeviceInfo({
        ...data,
        statusList: ["켜기", "끄기"],
        place: "거실",
        deviceNameKR: "텔레비전",
      });
    }
  }, []);

  const getDeviceNum = (deviceStatus: string | (string | number)[]) => {
    if (typeof deviceStatus === "string") {
      if (deviceStatus === "on") {
        return 0;
      } else {
        return 1;
      }
    } else {
      return 2;
    }
  };

  return (
    deviceInfo && (
      <div
        className={`${
          data.deviceStatus === "on"
            ? "bg-white"
            : data.deviceStatus === "off"
            ? "bg-slate-200"
            : "bg-orange-100"
        }  w-full h-full rounded-3xl p-8 pb-6 flex flex-col justify-between`}
      >
        {renderDeviceIcon()}
        <div className="flex flex-col gap-2">
          <span className="text-gray-400 text-base">{deviceInfo.place}</span>
          <div className="flex flex-row justify-between">
            <span className="text-black font-semibold text-2xl">
              {deviceInfo.deviceNameKR}
            </span>
            {deviceInfo.statusList && deviceInfo.deviceStatus && (
              <span
                className={`${statusColor(
                  getDeviceNum(deviceInfo.deviceStatus)
                )} text-black text-base px-3 py-1 rounded-2xl`}
              >
                {typeof deviceInfo.deviceStatus[
                  getDeviceNum(deviceInfo.deviceStatus)
                ] === "string"
                  ? deviceInfo.statusList[getDeviceNum(deviceInfo.deviceStatus)]
                  : deviceInfo.deviceName === "AC"
                  ? deviceInfo.deviceStatus[1] + "℃"
                  : deviceInfo.deviceStatus[1] + "%"}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default RoutineCell;
