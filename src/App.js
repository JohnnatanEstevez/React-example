import { Component } from "react";
import List from "./List";
import ToggleTheme from "./ToggleTheme";

export default class App extends Component {
  render() {
    return (
      <div>
        <List />
        <ToggleTheme />
      </div>
    );
  }
}
