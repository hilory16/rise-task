import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme, GlobalStyles } from 'theme';
import Landing from 'pages/Landing';

export default function Index() {
  return (
    <BrowserRouter>
     <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
