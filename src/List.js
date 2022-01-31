import { connect } from "react-redux";
import { Component } from "react";

class List extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Lista</h1>
        <ul
          style={{
            backgroundColor: this.props.bgColor,
            color: this.props.color,
          }}
        >
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.theme.color,
    bgColor: state.theme.bgColor,
  };
}
function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(List);
