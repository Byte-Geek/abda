import * as React from 'react'
import { BrowserRouter as Router, StaticRouter, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'


import DashboardLayoutRouted from './utils/DashboardLayoutRouted.jsx'
import LogIn from './pages/LogIn.jsx'

function CustomRouter({ children }) {
	if (typeof window === 'undefined') {
		return <StaticRouter location='/'>{children}</StaticRouter>
	}
	return <Router>{children}</Router>
}

function App(props) {


	return (
		<CustomRouter>
			<Routes>
				<Route path='/login' element={<LogIn />} />
				<Route path='/*' element={<DashboardLayoutRouted {...props} />} />
			</Routes>
		</CustomRouter>
	)
}

App.propTypes = {
	window: PropTypes.object, // Nu PropTypes.func
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
