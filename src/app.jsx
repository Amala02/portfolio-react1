import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route element={<Layout> <Outlet /> </Layout>} >
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App;