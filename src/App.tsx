import { Board } from "./components/Board";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [currentTool, setCurrentTool] = useState({
    name: "Brush",
    thickness: 2.5,
    id: 1,
  });

  return (
    <div>
      <Sidebar setCurrentTool={setCurrentTool} />
      <Board currentTool={currentTool} />
    </div>
  );
}
export default App;
