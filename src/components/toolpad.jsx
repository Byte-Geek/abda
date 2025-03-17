import * as React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import { createTheme } from '@mui/material/styles'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'
import PersonIcon from '@mui/icons-material/Person'
import Divider from '@mui/joy/Divider'

import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'

import Dashboard from './pages/DashBoard.jsx'
import Profile from './pages/Profile.jsx'
import MainPage from './pages/MainPage.jsx'

const Theme = createTheme({
	cssVariables: {
		colorSchemeSelector: 'data-toolpad-color-scheme',
	},
	colorSchemes: { light: true, dark: true },
	breakpoints: {
		values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
	},
})

function useRouter() {
	const location = useLocation()
	const navigate = useNavigate()

	return {
		pathname: location.pathname,
		searchParams: new URLSearchParams(location.search),
		navigate: path => navigate(path),
	}
}

function getNavigation(navigate) {
	return [
		{ kind: 'header', title: 'Main items' },
		{
			segment: 'dashboard',
			title: 'Dashboard',
			icon: <DashboardIcon />,
			onclick: () => navigate('/dashboard'),
		},
		{
			segment: 'profile',
			title: 'Profile',
			icon: <PersonIcon />,
			onclick: () => navigate('/profile'),
		},
		{ kind: 'divider' },
		{ kind: 'header', title: 'Analytics' },
		{
			segment: 'reports',
			title: 'Reports',
			icon: <BarChartIcon />,
			children: [
				{
					segment: 'chart',
					title: 'Chart',
					icon: <DescriptionIcon />,
					onclick: () => navigate('/chart'),
				},
				{
					segment: 'traffic',
					title: 'Traffic',
					icon: <DescriptionIcon />,
					onclick: () => navigate('/traffic'),
				},
			],
		},
		{ segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
	]
}

function DemoPageContent() {
	return (
		<Box
			sx={{
				py: 0,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<Divider sx={{ mb: 2.5 }}/>
		</Box>
	)
}

DemoPageContent.propTypes = {
	pathname: PropTypes.string.isRequired,
}

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

function DashboardLayoutWithRouter({ window }) {
	const router = useRouter()
	const navigation = getNavigation(router.navigate)

	const [session, setSession] = React.useState({})

	const authentication = React.useMemo(
		() => ({
			signIn: () => setSession({ user: { name: '', email: '', image: '' } }),
			signOut: () => setSession(null),
		}),
		[]
	)
	

	return (
		<AppProvider
			session={session}
			authentication={authentication}
			navigation={navigation}
			router={router}
			theme={Theme}
			window={window}
			branding={{
				logo: <img src='https://mui.com/static/logo.png' alt='MUI logo' />,
				title: 'App',
				homeUrl: './',
			}}
		>
			<DashboardLayout
				slots={{
					toolbarActions: () => null,
					sidebarFooter: () => <ThemeSwitcher />,
				}}
				defaultSidebarCollapsed
			>
				<PageContainer>
					<DemoPageContent pathname={router.pathname} />
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
	)
}

function DashboardLayoutBasic(props) {
	return (
		<Router>
			<DashboardLayoutWithRouter {...props} />
		</Router>
	)
}

DashboardLayoutBasic.propTypes = {
	window: PropTypes.func,
}

export default DashboardLayoutBasic
