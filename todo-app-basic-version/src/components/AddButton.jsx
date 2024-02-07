function AddButton({ listItems, setTodo, currentTodo }) {
  return (
    <button
      className="bg-green-500 px-4 py-1 w-20 rounded-md text-white"
      type="submit"
      onClick={(e) => {
        e.preventDefault();

        if (currentTodo.todoName !== "") {
          setTodo([...listItems, currentTodo]);
          e.target.form.firstChild.value = "";
        } else {
          alert("Please Enter Todo");
        }

        // console.log(listItems);
      }}
    >
      Add
    </button>
  );
}
export default AddButton;
