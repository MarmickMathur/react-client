import React from "react";
import { Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
