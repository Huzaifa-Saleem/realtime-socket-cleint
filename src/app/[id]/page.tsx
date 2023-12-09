// Text.js
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://realtime-notes-api.onrender.com");

const Text = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [text, setText] = React.useState("");

  const BASE_URL = "https://realtime-notes-app.vercel.app/";

  useEffect(() => {
    socket.emit("join-room", params.id);

    socket.on("text-change", (data) => {
      setText(data);
    });

    return () => {
      socket.off("text-change");
    };
  }, [params.id]);

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    socket.emit("text-change", newText);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#000",
        position: "relative",
      }}
    >
      <div className="flex justify-cneter items-center py-5 w-full">
        <h2 className="text-center w-full">
          Share this link and Write in realtime{" "}
          <a
            className="text-blue-500 underline italic"
            target="_blank"
            href={`${BASE_URL}/${params.id}`}
          >
            link
          </a>
        </h2>
      </div>
      <textarea
        style={{
          width: "100%",
          height: "90vh",
          background: "#000",
          outline: "none",
          color: "#fff",
          padding: "20px",
        }}
        placeholder="Write something..."
        value={text}
        onChange={handleText}
      ></textarea>
    </div>
  );
};

export default Text;
