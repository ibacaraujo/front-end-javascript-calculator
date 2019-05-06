class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <button id="equals">=</button>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("root")
);
