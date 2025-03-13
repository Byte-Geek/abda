import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createTheme } from '@mui/material/styles'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'
import PersonIcon from '@mui/icons-material/Person'

import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout'

import Divider from '@mui/joy/Divider'
import { PageContainer } from '@toolpad/core/PageContainer'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'

import App from '../App.jsx'

const NAVIGATION = [
	{
		kind: 'header',
		title: 'Main items',
	},
	{
		segment: 'dashboard',
		title: 'Dashboard',
		icon: <DashboardIcon />,
	},
	{
		segment: 'person',
		title: 'Person',
		icon: <PersonIcon />,
	},
	{
		kind: 'divider',
	},
	{
		kind: 'header',
		title: 'Analytics',
	},
	{
		segment: 'reports',
		title: 'Reports',
		icon: <BarChartIcon />,
		children: [
			{
				segment: 'chart',
				title: 'Chart',
				icon: <DescriptionIcon />,
			},
			{
				segment: 'traffic',
				title: 'Traffic',
				icon: <DescriptionIcon />,
			},
		],
	},
	{
		segment: 'integrations',
		title: 'Integrations',
		icon: <LayersIcon />,
	},
]

const Theme = createTheme({
	cssVariables: {
		colorSchemeSelector: 'data-toolpad-color-scheme',
	},
	colorSchemes: { light: true, dark: true },
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 600,
			lg: 1200,
			xl: 1536,
		},
	},
})

function DemoPageContent({ pathname }) {
	return (
		<Box
			sx={{
				py: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<Divider />
			<App />
			<Typography>Dashboard content for {pathname}</Typography>
		</Box>
	)
}

function useDemoRouter(initialPath) {
	const [pathname, setPathname] = React.useState(initialPath)

	const router = React.useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: path => setPathname(String(path)),
		}
	}, [pathname])

	return router
}

DemoPageContent.propTypes = {
	pathname: PropTypes.string.isRequired,
}

function CustomAppTitle() {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<Typography variant='h6'>My App</Typography>
		</Stack>
	)
}

function DashboardLayoutBasic(props) {
	const { window } = props

	const [session, setSession] = React.useState({})

	const authentication = React.useMemo(() => {
		return {
			signIn: () => {
				setSession({
					user: {
						name: '',
						email: '',
						image: '',
					},
				})
			},
			signOut: () => {
				setSession(null)
			},
		}
	}, [])

	const router = useDemoRouter('./')

	// Remove
	const demoWindow = window !== undefined ? window() : undefined

	return (
		// preview-start

		<AppProvider
			session={session}
			authentication={authentication}
			navigation={NAVIGATION}
			router={router}
			theme={Theme}
			window={demoWindow}
			branding={{
				logo: <img src='https://mui.com/static/logo.png' alt='MUI logo' />,
				title: 'App',
				homeUrl: './',
			}}
		>
			<DashboardLayout
				slots={{
					toolbarActions: () => null,
					sidebarFooter: () => {
						return (<ThemeSwitcher />)},
				}}
				defaultSidebarCollapsed
			>
				<PageContainer>
					<DemoPageContent pathname={router.pathname} />
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
		// preview-end
	)
}

DashboardLayoutBasic.propTypes = {
	window: PropTypes.func,
}

export default DashboardLayoutBasic
