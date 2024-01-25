const List = (props) => {
  return (
    <p className="list">
      <input type="checkbox" name="check" id="" />
      <label htmlFor="">{props.label} Labels</label>
    </p>
  );
};

export default List;
