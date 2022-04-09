import { Route, Routes } from "react-router-dom";
import ImageList from "./ImageList";


function App(props) {

  return (
    <div className="ui container " style={{ marginTop: "30px" }}>
      <Routes>
        <Route path="/" element={<ImageList />} />
      </Routes>
    </div>
  );
}

export default App;
