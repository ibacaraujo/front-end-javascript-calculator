const data = [
  {id: 'equals', symbol: '='},
  {id: 'zero', symbol: '0'}, 
  {id: 'one', symbol: '1'}, 
  {id: 'two', symbol: '2'}, 
  {id: 'three', symbol: '3'}, 
  {id: 'four', symbol: '4'}, 
  {id: 'five', symbol: '5'}, 
  {id: 'six', symbol: '6'}, 
  {id: 'seven', symbol: '7'}, 
  {id: 'eight', symbol: '8'}, 
  {id: 'nine', symbol: '9'},
  {id: 'add', symbol: '+'}, 
  {id: 'subtract', symbol: '-'}, 
  {id: 'multiply', symbol: '*'}, 
  {id: 'divide', symbol: '/'}
];

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button id={this.props.id}>
        {this.props.symbol}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {data.map(d => (
	        <CalculatorButton
	          id={d.id}
	          symbol={d.symbol}
	        />
	      ))}
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById("root")
);
