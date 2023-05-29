import { Board } from "./components/Board";
import { Sidebar } from "./components/Sidebar";
import { useState, useEffect } from "react";

function App() {
  const [currentTool, setCurrentTool] = useState({
    name: "brush",
    thickness: 2.5,
    id: 1,
  });

  useEffect(() => {
    console.log(currentTool);
  });

  return (
    <div>
      <Board />
      <Sidebar setCurrentTool={setCurrentTool} />
    </div>
  );
}
export default App;
