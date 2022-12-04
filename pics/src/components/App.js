import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };

class App extends React.Component {
  state = { images: [] };
  //搜索调用
  onSearchSubmit = async (term) => {
    // console.log(term);
    //1.发送请求的地址 2.对象（自定义选项）
    const response = await unsplash.get("/search/photos", {
      //Params指定了不同的查询字符串参数
      //跨源资源共享请求
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
