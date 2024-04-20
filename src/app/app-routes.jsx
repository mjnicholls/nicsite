import React, { Suspense, useState } from "react";
import Home from "../Home/Home"; // Import the Home component
import Approach from "../Approach/Approach"; // Import the Approach component
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/layout";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const color = 'red'

  return (

      <Suspense fallback={<div>Loading...</div>}>
        <div style={containerStyle}>
          <Layout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/approach" element={<Approach />} />
              {/* Add other routes here */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Layout>
        </div>
      </Suspense>

  );
}

export default AppRoutes;
