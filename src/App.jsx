import { useState } from "react";
import Page from "./components/Page";
import ShoppingCartContext from "./contexts/shoppingCartContext";

const items = [
  {
    id: 1,
    title: "Product 1",
  },
];

export default function App() {
  const [page, setPage] = useState("/home");
  const [cartItems, setCartItems] = useState(items);

  function addItem() {
    setCartItems([...items, { id: 2, title: "Product 2" }]);
  }

  function handlePageChange() {
    setPage("/cart");
  }
  return (
    <div>
      <ShoppingCartContext.Provider value={cartItems}>
        <Page url={page} onAddItems={addItem} onPageChange={handlePageChange} />
      </ShoppingCartContext.Provider>
    </div>
  );
}
