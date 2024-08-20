//import { useSyncExternalStore } from "react";

import { useSyncExternalStore } from "react";

function subscribe(callback) {
  //subscribe
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  //cleanup
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export default function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, //client
    () => true //server
  );
}
