const Action = (props) => {
  return (
    <footer className="action">
      <section className="sec sec1">
        <button onClick={props.onAdd}>➕</button>
        <button onClick={props.onSearchButton}>🔍</button>
      </section>

      <section className="sec sec2">{props.leftItems} items Left</section>

      <section className="sec sec3">
        <button onClick={props.onShowAll}>All</button>
        <button onClick={props.onActive}>Active</button>
        <button onClick={props.onComplete}>Completed</button>
      </section>
    </footer>
  );
};

export default Action;
