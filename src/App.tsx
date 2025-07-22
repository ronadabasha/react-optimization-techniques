import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";

const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));
const ServicesPage = lazy(() => import("./pages/services"));
const BlogPage = lazy(() => import("./pages/blog"));
const ContactPage = lazy(() => import("./pages/contact"));

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </div>
  );
}

export default App;
