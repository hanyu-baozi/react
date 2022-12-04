import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.term);

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/*传递对函数的引用*/}
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange()}/> */}
            {/* 更改自动发生 */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <input type="text" onChange={(e) =>console.log(e.target.value)}/> */}
            {/* 缩写语法 */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
