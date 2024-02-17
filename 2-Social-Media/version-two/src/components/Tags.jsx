const Tags = ({ tags }) => {
  return tags.map((tag, i) => (
    <h3
      key={i}
      className="bg-sky-500 text-gray-200 text-sm rounded-md font-semibold px-1"
    >
      {tag}
    </h3>
  ));
};

export default Tags;
