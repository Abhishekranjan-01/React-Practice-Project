function DeleteButton() {
  const handleDeleteButton = (e) => {
    console.log(e);
    e.target.parentElement.parentElement.remove();
  };

  return (
    <button
      className="bg-red-500 px-4 py-1 w-20 rounded-lg text-white"
      type="button"
      onClick={(e) => {
        handleDeleteButton(e);
      }}
    >
      delete
    </button>
  );
}

export default DeleteButton;
