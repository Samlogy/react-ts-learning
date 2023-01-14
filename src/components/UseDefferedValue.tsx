import React, { useDeferredValue, useState } from "react";
import { generateProducts } from "../helpers/functions";

export default function UseDefferedValue() {
  const [filterTerm, setFilterTerm] = useState("");

  const dummyProducts = generateProducts();

  function filterProducts(filterTerm: string) {
    if (!filterTerm) {
      return dummyProducts;
    }
    return dummyProducts.filter((product) => product.includes(filterTerm));
  }

  const filteredProducts = useDeferredValue(filterProducts(filterTerm));

  function updateFilterHandler(event: any) {
    setFilterTerm(event.target.value);
    console.log("here");
  }
  console.log(filteredProducts);

  // useDefferedValue: allows to fix slow renders problems by implementing a delay similar(throttling, debouncing)
  return (
    <div id="app">
      <input
        type="text"
        placeholder="filter term"
        onChange={updateFilterHandler}
      />

      <ul>
        {filteredProducts.map((product, idx) => (
          <li key={idx}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
