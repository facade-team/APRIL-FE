import RoutineLine from "@/components/routine/routineLine";

const Routine = () => {
  return (
    <div className="w-full h-full bg-slate-100 pl-12 py-16 flex flex-col gap-4 overflow-y-auto">
      <RoutineLine />
      <RoutineLine />
      <RoutineLine />
      <RoutineLine />
      <RoutineLine />
      <RoutineLine />
    </div>
  );
};
export default Routine;
