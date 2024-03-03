import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import { createConnection } from "../utils/chat.js";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.on("message", onMessage);
    connection.connect();
    //cleanup
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
