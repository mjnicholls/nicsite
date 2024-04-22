import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./Home/Home";
import Approach from "./Approach/Approach";
import AboutMe from "./About/AboutMe";
import Cost from './Cost/Cost'
import Contact from "./Contact/Contact";
import Privacy from "./Privacy/Privacy";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

function App() {
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <div style={containerStyle}>
          <Layout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/cost" element={<Cost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
