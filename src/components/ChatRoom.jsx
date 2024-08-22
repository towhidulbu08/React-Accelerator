import { useEffect } from "react";
import createConnection from "../utils/connection";

// const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId, serverUrl }) {
  useEffect(() => {
    // synchoronize with external chat server
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    // cleanup
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
