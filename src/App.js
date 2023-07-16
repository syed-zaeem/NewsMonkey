import "./App.css";

import React, { useState, Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   pageSize = 5;
//   apiKey = process.env.REACT_APP_NEWS_API;
//   state = {
//     progress: 0,
//   };
//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   };
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <LoadingBar
//             height={3}
//             color="#f11946"
//             progress={this.state.progress}
//             // onLoaderFinished={() => setProgress(0)}
//           />
//           <Routes>
//             <Route
//               exact
//               path="/"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="general"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="general"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/business"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="business"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="business"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/entertainment"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="entertainment"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="entertainment"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/health"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="health"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="health"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/science"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="science"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="science"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/sports"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="sports"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="sports"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/technology"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="technology"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="technology"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/general"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="general"
//                   pageSize={this.pageSize}
//                   country="in"
//                   category="general"
//                 />
//               }
//             />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='in' category="general" />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={pageSize} country='in' category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country='in' category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key='health' pageSize={pageSize} country='in' category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key='science' pageSize={pageSize} country='in' category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key='sports' pageSize={pageSize} country='in' category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={pageSize} country='in' category="technology" />} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='in' category="general" />} />
        </Routes>
        </Router>
      </div>
    )

}

export default App
