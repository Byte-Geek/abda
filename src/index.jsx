import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

import App from './components/App.jsx'

createRoot(document.getElementById('main')).render(
	<Router>
		<App />
	</Router>
)
