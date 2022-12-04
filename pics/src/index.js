import React from 'react';

import { createRoot } from 'react-dom/client';
import App from './components/App';

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// );

const container = document.getElementById('root');
const root =createRoot(container);
root.render(<App />);