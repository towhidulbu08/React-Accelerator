import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import ShoppingCartContext from "../contexts/shoppingCartContext";
import logVisit from "../utils/logVisit";

export default function Page({ url, onPageChanged, onAddItems }) {
  const items = useContext(ShoppingCartContext);

  const numberOfItems = items.length;

  const onVisit = useEffectEvent((url) => {
    logVisit(url, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <div>This is page</div>
      <button onClick={onPageChanged}>Change Page</button>
      <button onClick={onAddItems}>Add New Item</button>
      <div>Total Cart Items {numberOfItems}</div>
    </div>
  );
}
