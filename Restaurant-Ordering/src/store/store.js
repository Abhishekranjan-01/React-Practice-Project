const addOrder = (currentList, newOrder) => [...currentList, newOrder];

const deleteOrder = (currentList, newOrder) =>
  currentList.filter((order) => order.uniqueOrderId != newOrder.uniqueOrderId);

const reducer = (currentList, action) => {
  let newOrderList = currentList;

  if (action.name === "ADD_ORDER") {
    newOrderList = addOrder(currentList, action.payload);
  } else if (action.name === "DELETE_ORDER") {
    newOrderList = deleteOrder(currentList, action.payload);
  }
  return newOrderList;
};

export default reducer;
