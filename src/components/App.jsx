import * as React from 'react'
import { BrowserRouter as Router, StaticRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'

import DashboardLayoutRouted from './utils/DashboardLayoutRouted.jsx'
import LogIn from './pages/LogIn.jsx'

function CustomRouter({ children }) {
	if (typeof window === 'undefined') {
		return <StaticRouter location='/'>{children}</StaticRouter>
	}
	return <Router>{children}</Router>
}

function App(props) {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	return (
		<CustomRouter>
			{isAuthenticated ? (
				<DashboardLayoutRouted {...props} />
			) : (
				<LogIn onLogin={() => setIsAuthenticated(true)} />
			)}
		</CustomRouter>
	)
}

App.propTypes = {
	window: PropTypes.func,
}

export default App



// function useRoute(initialPath) {
// 	const [pathname, setPathname] = React.useState(initialPath)

// 	const router = React.useMemo(() => {
// 		return {
// 			pathname,
// 			searchParams: new URLSearchParams(),
// 			navigate: path => setPathname(String(path)),
// 		}
// 	}, [pathname])

// 	return router
// }
