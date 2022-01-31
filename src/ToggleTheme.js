import { connect } from "react-redux";
import { Component } from "react";
import { toggleTheme } from "./redux/theme/actionCreators";
class ToggleTheme extends Component {
  render() {
    console.log(this.props);
    return <button onClick={this.props.toggleTheme}>Toggle</button>;
  }
}

function mapStateToProps() {}
function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: () => dispatch(toggleTheme()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);
