var groceryItems = ['apples', 'bananas', 'lemons'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onMouseEnterHandler() {
    this.setState({
      hover: !this.state.hover
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onMouseEnterHandler.bind(this)}
      onMouseLeave={this.onMouseLeaveHandler.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((item, i) => <GroceryListItem item = {item} key = {i}/>)}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems = {groceryItems}/>, document.getElementById("app"));


// var GroceryListItem = (props) => (
//   <li>{props.item}</li>
// );


// var GroceryList = () => (
//   <ul>
//     {groceryItems.map(item => <GroceryListItem item = {item} />)}
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));
