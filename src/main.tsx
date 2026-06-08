import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import TagManager from 'react-gtm-module';
import App from './App.tsx';
import './index.css';

const tagManagerArgs = {
  gtmId: 'GTM-5C7V63LJ',
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
