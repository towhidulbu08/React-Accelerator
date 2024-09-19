import { useState } from "react";
import ProductDetails from "./components/ProductDetails";

import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

// import AddProduct from "./components/AddProduct"
function App() {
  const [passId, setPassId] = useState(9);

  const handleShowDetails = (id) => {
    setPassId(id);
  };
  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList onShowDetails={handleShowDetails} />
      <ProductDetails id={passId} />
    </div>
  );
}

export default App;
