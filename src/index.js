import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HangulLib from './components/HangulLib';

// import Mainpage from './pages/Mainpage';
// import Playpage from './pages/Playpage';
// import Resultpage from './pages/Resultpage';

import './styles/index.scss';

import store from './store';

import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <HangulLib/>
    </Provider>
  </React.StrictMode>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Mainpage />} />
        <Route path="/play" element={<Playpage />} />
        <Route path="/result" element={<Resultpage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
