import { useContext, useRef } from "react";
import { orderContext } from "../App";

const receiveOrder = () => {
  const { dispatchNewOrder } = useContext(orderContext);
  const uniqueOrderIdRef = useRef("");
  const priceRef = useRef(0);
  const dishNameRef = useRef("");
  const tableNumberRef = useRef("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatchNewOrder({
          name: "ADD_ORDER",
          payload: {
            uniqueOrderId: uniqueOrderIdRef.current.value,
            price: priceRef.current.value,
            dishName: dishNameRef.current.value,
            tableNumber: tableNumberRef.current.value,
          },
        });
      }}
    >
      <label htmlFor="Unique-Order-Id">Unique Order Id</label>
      <input ref={uniqueOrderIdRef} type="text" name="Unique-Order-Id" />

      <label htmlFor="Choose-Price">Choose Price</label>
      <input ref={priceRef} type="number" name="Choose-Price" />

      <label htmlFor="Choose-Dish">Choose Dish</label>
      <input ref={dishNameRef} type="text" name="Choose-Dish" />

      <label htmlFor="Choose-A-Table">Choose A Table</label>
      <select ref={tableNumberRef}>
        <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
      </select>
      <button type="submit">Add To Bill</button>
    </form>
  );
};

export default receiveOrder;
