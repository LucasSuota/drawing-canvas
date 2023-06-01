interface Tool {
  name: string;
  thickness: number;
  id: number;
}

export function Board(props: { currentTool: Tool }) {
  const Canvas = () => {
    return (
      <div className="bg-white w-3/5 h-4/5 drop-shadow-xl">
        <div className="bg-indigo-500 flex items-center justify-center">
          <h1 className="font-medium">Tool: {props.currentTool.name}</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="w-full h-[100vh] flex items-center justify-center bg-blue-50">
        <Canvas />
      </div>
    </div>
  );
}
