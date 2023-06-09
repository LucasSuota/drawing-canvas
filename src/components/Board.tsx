import { useLayoutEffect, useRef, useState, useEffect } from "react";

interface Tool {
  name: string;
  thickness: number;
  id: number;
}

export function Board(props: { currentTool: Tool }) {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current?.offsetHeight != null) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  });

  const Canvas = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e: { clientX: number; clientY: number }) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };

      ref.current?.addEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <div className="w-3/5 h-4/5 bg-white rounded-b-xl shadow-xl" ref={ref}>
        <h1>
          X: {width} Y: {height}
        </h1>
        <h2>
          X: {mousePos.x}, Y: {mousePos.y}
        </h2>
      </div>
    );
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-blue-50 ">
      <div className="w-3/5 h-8 flex gap-2 items-center justify-center bg-indigo-500 rounded-t-xl pb-1 pt-1">
        <h1 className="font-regular">Tool:</h1>
        <h2 className="font-medium"> {props.currentTool.name}</h2>
      </div>
      <Canvas />
    </div>
  );
}
