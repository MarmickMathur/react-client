import React from "react";
import { Router, Route } from "react-router-dom";
import StreamEdit from "./streams/streamEdit.js";
import StreamCreate from "./streams/streamCreate.js";
import StreamDelete from "./streams/streamDelete";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import Header from "./header.js";
import history from "../history.js";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
