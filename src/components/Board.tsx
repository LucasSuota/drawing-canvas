import { useState, useEffect } from "react";

interface Tool {
  name: string;
  thickness: number;
  id: number;
}

export function Board(props: { currentTool: Tool }) {
  return (
    <div className="absolute left-24 ">
      <h2>{props.currentTool.name}</h2>
    </div>
  );
}
