export interface IChatBubbleProps {
  id: number;
  message: string;
  isMine: boolean;
  time: string;
}

export interface IIcon extends React.HTMLAttributes<HTMLOrSVGElement> {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}

export interface IRoutineLine {
  executionTime: string;
  routineId: number;
  routineList: IRoutineCell[];
}

export interface IRoutineCell {
  deviceName: "TV" | "AC" | "light" | "blind" | null;
  deviceStatus: "on" | "off" | ["level", number] | null;
  deviceNameKR?: string;
  statusList?: string[];
  place?: string;
}
