import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'

import DashboardLayoutRouted from './utils/DashboardLayoutRouted.jsx'





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

function DashboardLayoutBasic(props) {
	return (
		<Router>
			<DashboardLayoutRouted {...props} />
		</Router>
	)
}

DashboardLayoutBasic.propTypes = {
	window: PropTypes.func,
}

export default DashboardLayoutBasic
