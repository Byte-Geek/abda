import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DashboardLayoutBasic from './components/toolpad.jsx'

createRoot(document.getElementById('main')).render(
	<div>
		<DashboardLayoutBasic />
	</div>
)
