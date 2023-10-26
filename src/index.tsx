import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Camera as CameraIcon } from "@stelli/components-library-experiment.icons.camera";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <CameraIcon />
  </React.StrictMode>
);