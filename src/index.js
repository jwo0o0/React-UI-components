import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Title from './components/Title';
import { Modal } from './components/Modal';
import { Toggle } from './components/Toggle';
import { Tab } from './components/Tab';
import { Tag } from './components/Tag';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Modal />
    <Toggle />
    <Tab />
    <Tag />
  </React.StrictMode>
);

