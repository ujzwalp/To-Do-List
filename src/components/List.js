import { forwardRef } from "react";

const List = forwardRef((props, ref) => {
  return (
    <div className="list" id={props.id}>
      <input
        type="checkbox"
        name="check"
        ref={ref}
        onChange={props.onCheck}
        checked={props.checked}
      />
      <label htmlFor="">{props.label}</label>
    </div>
  );
});

export default List;
