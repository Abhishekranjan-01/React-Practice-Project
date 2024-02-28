import { useContext } from "react";
import { orderContext } from "../App";

const OrderList = ({ order }) => {
  const { dispatchNewOrder } = useContext(orderContext);

  return (
    <li style={{ display: "flex", gap: "5px" }}>
      {order.price} {order.tableNumber} {order.dishName}{" "}
      <button
        onClick={() => {
          dispatchNewOrder({
            name: "DELETE_ORDER",
            payload: { uniqueOrderId: order.uniqueOrderId },
          });
        }}
      >
        Delete Order
      </button>
    </li>
  );
};
export default OrderList;
