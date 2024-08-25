import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import createConnection from "../utils/connection.js";
import { showNotification } from "../utils/notifications.js";

const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification("Connected!", theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
