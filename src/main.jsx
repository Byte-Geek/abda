import { createRoot } from 'react-dom/client'
import './index.css'

import DashboardLayoutBasic from './components/App.jsx'

createRoot(document.getElementById('main')).render(
	<div>
		<DashboardLayoutBasic />
	</div>
)
