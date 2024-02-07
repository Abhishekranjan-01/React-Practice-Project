function Container(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-fit mx-auto p-4 my-4 border border-gray-500 rounded-md">
      {props.children}
    </div>
  );
}

export default Container;
