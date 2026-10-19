import SideBar from "./components/SideBar";
import Docs from "./components/Docs";
import Guide from "./components/Guide";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <SideBar author="CHRISTIAN JOSH E. SAPURAS" />
      <Docs />
      <Guide />
    </div>
  );
}

export default App;