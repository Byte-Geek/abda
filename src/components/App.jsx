import * as React from 'react'
import { BrowserRouter as Router, StaticRouter } from 'react-router-dom'
import PropTypes from 'prop-types'


import DashboardLayoutRouted from './utils/DashboardLayoutRouted.jsx'


function CustomRouter({ children }) {
	if (typeof window === 'undefined') {
		return <StaticRouter location='/'>{children}</StaticRouter>
	}
	return <Router>{children}</Router>
}

function App(props) {


	return (
		<Router>
			<DashboardLayoutRouted {...props} />
		</Router>
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
