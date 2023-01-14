import React, { useTransition, useState } from "react";
import { generateProducts } from "../../helpers/functions";

export default function UseTransitionCpt() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const dummyProducts = generateProducts();

  function filterProducts(filterTerm: string) {
    if (!filterTerm) {
      return dummyProducts;
    }
    return dummyProducts.filter((product) => product.includes(filterTerm));
  }

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: any) {
    startTransition(() => {
      setFilterTerm(event.target.value);
      console.log("here");
    });
  }
  console.log(isPending);

  // useTransition: used specially for slow devices (the code is more responsive, less laggy)
  // startTransition: wraps a function responsile for this behaviour (ex: filtering in our case)
  // isPending: boolean value that tells us some state updates that are still pending (hasn't been yet by react) --> so we can show some fallback in the UI.

  return (
    <div id="app">
      <input
        type="text"
        placeholder="filter term"
        onChange={updateFilterHandler}
      />
      {isPending && <p style={{ color: "gray" }}>Updating list..</p>}
      <ul>
        {filteredProducts.map((product, idx) => (
          <li key={idx}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
