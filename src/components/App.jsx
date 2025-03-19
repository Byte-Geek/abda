import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'

import DashboardLayoutRouted from './utils/DashboardLayoutRouted.jsx'


function App(props) {
	return (

			<DashboardLayoutRouted {...props} />

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
