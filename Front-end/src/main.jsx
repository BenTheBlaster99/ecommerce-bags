import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { debugAppStart } from './hooks/debug.js';

console.log('main.jsx is being executed');
debugAppStart();
const rootElement = document.getElementById("root")
console.log("Root element:",rootElement);
if (rootElement){
  const root = createRoot(rootElement)
  console.log('Root created successfully');

    root.render(
      <React.StrictMode>
      <App />
    </React.StrictMode>,
    )
    console.log("Render called on root");
} else {
  console.error("failed to find root elemnt");
  
}



createRoot(document.getElementById('root')).render(
 
)
