import { useContext } from "react";
import { orderContext } from "../App";
import OrderList from "./OrderList";

const Table1 = ({ tableNo }) => {
  const { allOrders } = useContext(orderContext);
  return (
    <>
      <h1> Table {tableNo}</h1>

      <ul>
        {allOrders.map((orderItem) => {
          if (orderItem.tableNumber == "Table 1") {
            return (
              <OrderList key={orderItem.uniqueOrderId} order={orderItem} />
            );
          } else {
          }
          return "";
        })}
      </ul>
    </>
  );
};

export default Table1;
