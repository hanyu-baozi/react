import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
// const App = () =>{
//     const buttonText = {text: 'Click me'};
//     const labelText = 'Enter name:';
//     return (
//         <div>
//             <label className="label" htmlFor="name">
//                 {labelText}
//             </label>
//             <input id='name' type="text"/>
//             <button style={{backgroundColor:'blue',color:'white'}}>
//                 {buttonText.text}
//             </button>
//         </div>
//     );
// };

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )

const App = (props) => {
  console.log(props.children);
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.nature()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          avatar={faker.image.nature()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.nature()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
