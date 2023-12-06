"use client";

import moment from "moment";
import RoutineCell from "../routineCell";
import IconThreeDot from "@/assets/icon_threedot";
import { IRoutineLine } from "@/interfaces";

// 실행 : {id}번 루틴을 지금 실행해줘
// 수정 : {id}번 루틴 실행시간을 {hh:mm}으로 바꿔줘. -> now ~ 23:59 input 받아서 예외배재

const DummyData: IRoutineLine[] = [
  {
    executionTime: "2021-10-20T14:00:00.000Z",
    routineId: 1,
    routineList: [
      {
        deviceName: "AC",
        deviceStatus: ["level", 26],
      },
      {
        deviceName: "blind",
        deviceStatus: ["level", 50],
      },
      {
        deviceName: "light",
        deviceStatus: "on",
      },
      {
        deviceName: "TV",
        deviceStatus: "off",
      },
    ],
  },
];

const RoutineLine = () => {
  const handleDotClick = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    console.log(DummyData[0].routineId);
    console.log(e);
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-[280px] justify-between mb-5">
        <span className="text-sm font-semibold text-gray-400">
          {moment(new Date(DummyData[0].executionTime)).format("A h:mm")}
        </span>

        <IconThreeDot onClick={(e) => handleDotClick(e)} />
      </div>
      <div className="flex flex-row gap-5">
        {DummyData[0].routineList.map((data, index) => {
          return (
            <span
              key={index}
              className="basis-[280px] h-[200px] shrink-0"
            >
              <RoutineCell data={data} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RoutineLine;
