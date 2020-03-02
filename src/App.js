/*
Start here and then work through the
PostsContainer components and the CommentSection Components.
Not all files need code added.
Look at each file to see where you need to pass props or add code
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage.js";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import dummyData from "./dummy-data.js";

const App = () => {
  const [postData, setPostData] = useState(dummyData);

  const searchFilter = (searchString) => {
      setPostData(dummyData);
      setPostData(dummyData.filter((p)=>{
          return (p.username.toLowerCase().includes(searchString.toLowerCase()) || commentsInclude(p.comments,searchString));
      }));
  };

  const commentsInclude = (comments, searchString) => {
      let testCase = false;
      comments.forEach((comment)=>{
        if (comment.username.toLowerCase().includes(searchString.toLowerCase()) || comment.text.toLowerCase().includes(searchString.toLowerCase())) {
            testCase = true;
        }});
      return testCase;
  };

  return (
    <div className="App">
      <SearchBar searchFunction={searchFilter} />
      <PostsPage posts={postData} />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
