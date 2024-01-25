import Action from "./Action";
import List from "./List";

const App = () => {
  return (
    <div className="app">
      <header>THINGS TO DO</header>
      <input type="text" placeholder="Add New" className="searchbox" />
      {/* LIST */}
      <List label />
      <hr />
      <List label />
      <hr />
      <List label />
      <hr />
      {/* Action */}
      <Action />
    </div>
  );
};

export default App;

// Last Note: Layout is given for the app. Continue with styling and logic building
