import { useState } from "react";
import { useChatRoom } from "../hooks/useChatRoom";
//import { showNotification } from "../utils/notification.js";

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  // useChatRoom({
  //   roomId,
  //   serverUrl,
  //   onReceiveMessage(msg) {
  //     showNotification("New message: " + msg);
  //   },
  // });

  useChatRoom({
    roomId,
    serverUrl,
    onReceiveMessage(msg) {
      console.log(msg);
    },
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
