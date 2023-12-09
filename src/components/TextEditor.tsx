"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const TextEditor = () => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    socket.connect();

    socket.on("text-change", (data) => {
      setText(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setText(text);
    socket.emit("text-change", text);
  };

  return (
    <textarea
      style={{ width: "100%", height: "100%", background: "#000" }}
      placeholder="Write something..."
      value={text}
      onChange={handleText}
    ></textarea>
  );
};

export default TextEditor;
