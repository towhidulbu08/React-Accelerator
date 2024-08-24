import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import { SettingsContext } from "./contexts/settings";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState(null);
  const [show, setShow] = useState(false);

  function handleChangeRoom(e) {
    setRoomId(e.target.value);
    console.log(e.target.value);
  }

  function handleServerChange(e) {
    setServerUrl(e.target.value);
  }

  return (
    <>
      <div>
        <label>
          Select Server:{" "}
          <select onChange={handleServerChange}>
            <option value="http://localhost:1234">Server 1</option>
            <option value="http://localhost:1235">Server 2</option>
            <option value="http://localhost:1238">Server 3</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Chat" : "Show Chat"}
        </button>
      </div>

      {show && (
        <>
          <hr />
          <div>
            <label>
              Select Chat Room:{" "}
              <select onChange={handleChangeRoom}>
                <option value="general">General</option>
                <option value="travel">Travel</option>
                <option value="music">Music</option>
              </select>
            </label>
          </div>
          <SettingsContext.Provider
            value={{
              defaultServer: "https://localhost:1000",
            }}
          >
            <ChatRoom selectedServerUrl={serverUrl} roomId={roomId} />
          </SettingsContext.Provider>
        </>
      )}
    </>
  );
}
