import Sidebar from "@/components/sidebar";

const RoutineLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
};

export default RoutineLayout;
