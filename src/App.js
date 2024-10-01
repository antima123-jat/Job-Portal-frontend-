import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import JobApplication from "./pages/JobApplication";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-16">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/apply/:id" element={<JobApplication />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
