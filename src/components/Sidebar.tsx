import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

export function Sidebar() {
  const [showPanel, setShowPanel] = useState(false);
  const [currentTool, setCurrentTool] = useState({
    name: "brush",
    thickness: 2.5,
    id: 1,
  });

  useEffect(() => {
    console.log(currentTool);
  }, [currentTool]);

  const handlePanelClick = () => {
    setShowPanel(!showPanel);
  };

  const paintingTools = [
    { name: "Brush", thickness: 2.5, id: 1 },
    { name: "Pencil", thickness: 1, id: 2 },
    { name: "Eraser", thickness: 2, id: 3 },
  ];

  const Items = (props: {
    toolName: string;
    toolThickness: number;
    id: number;
  }) => {
    return (
      <div
        onClick={() => {
          setCurrentTool({
            name: props.toolName,
            thickness: props.toolThickness,
            id: props.id,
          });
        }}
        className="w-[64px] h-[64px] bg-white rounded-full duration-100 flex items-center justify-center "
      >
        <h1>{props.toolName}</h1>
      </div>
    );
  };

  if (showPanel) {
    return (
      <div>
        <div className="bg-indigo-500 absolute top-0 left-0 h-full w-24 ease-in-out duration-200">
          <div
            onClick={handlePanelClick}
            className="absolute h-full left-[96px] flex items-center"
          >
            <div className="w-[30px] h-[30px] bg-indigo-500 flex items-center justify-center rounded-r-xl">
              <BiLeftArrowAlt />
            </div>
          </div>
          <div className="h-full flex flex-col gap-4 items-center justify-center">
            {paintingTools.map((item) => (
              <Items
                key={item.id}
                toolName={item.name}
                toolThickness={item.thickness}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-indigo-500 absolute top-0 left-[-100px] h-full w-24 ease-in-out duration-500">
        <div
          onClick={handlePanelClick}
          className="absolute h-full left-[96px] flex items-center"
        >
          <div className="w-[30px] h-[30px] bg-indigo-500 flex items-center justify-center rounded-r-xl">
            <BiRightArrowAlt />
          </div>
        </div>
        <div className="h-full flex flex-col gap-4 items-center justify-center">
          {paintingTools.map((item) => (
            <Items
              key={item.id}
              toolName={item.name}
              toolThickness={item.thickness}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
