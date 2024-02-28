import { createContext, useReducer } from "react";
import ReceiveOrder from "./components/ReceiveOrder";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";

import reducer from "./store/store";
const orderContext = createContext(null);

function App() {
  const [allOrders, dispatchNewOrder] = useReducer(reducer, []);

  return (
    <section
      style={{ color: "#efefef", backgroundColor: "#242424", height: "100vh" }}
    >
      <orderContext.Provider value={{ allOrders, dispatchNewOrder }}>
        <ReceiveOrder />
        <Table1 tableNo={"1"} />
        <Table2 tableNo={"2"} />
        <Table3 tableNo={"3"} />
      </orderContext.Provider>
    </section>
  );
}

export { orderContext };
export default App;
