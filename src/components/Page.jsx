import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import ShoppingCartContext from "../contexts/shoppingCartContext";
import logVisit from "../utils/logVisit";

export default function Page({ url, onPageChange, onAddItems }) {
  const items = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  const onVisit = useEffectEvent((url) => {
    logVisit(url, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]);

  return (
    <div>
      <div>This is page</div>
      <div>
        <button onClick={onPageChange}>Change Page</button>
        <button onClick={onAddItems}>Add Items</button>
      </div>
      <div>
        <p>{numberOfItems}</p>
      </div>
    </div>
  );
}
