import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamEdit from "./streams/streamEdit.js";
import StreamCreate from "./streams/streamCreate.js";
import StreamDelete from "./streams/streamDelete";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import Header from "./header.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
