import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AnimatedBarChart from "./AnimatedBarChart/Main";
import CollapsibleTree from "./CollapsibleTree/Main";
import ReactVertexSphere from "./ReactVertexSphere/Main";

function Home() {
  return <h2>Select one animation project</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Week 7 Day 1 Exercise</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/bar-chart" style={{ marginRight: "15px" }}>Bar Chart</Link>
          <Link to="/tree" style={{ marginRight: "15px" }}>Tree</Link>
          <Link to="/sphere">Sphere</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bar-chart" component={AnimatedBarChart} />
          <Route path="/tree" component={CollapsibleTree} />
          <Route path="/sphere" component={ReactVertexSphere} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;