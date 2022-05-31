import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
