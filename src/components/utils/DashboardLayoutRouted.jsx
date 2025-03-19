import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

import { createTheme } from '@mui/material/styles'
import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import Box from '@mui/material/Box'


import getNavigation from './getNavigation.jsx'
import Loading from '../pages/Loading.jsx'

import { lazy, Suspense } from 'react'

import MainPage from '../pages/MainPage.jsx'
//const MainPage = lazy(() => import('../pages/MainPage.jsx'))
const Dashboard = lazy(() => import('../pages/DashBoard.jsx'))
const Profile = lazy(() => import('../pages/Profile.jsx'))

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
			
		</Box>
	)
}

DemoPageContent.propTypes = {
	pathname: PropTypes.string.isRequired,
}

function DashboardLayoutRouted({ window }) {
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
					sidebarFooter: () => (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
								my: 2,
							}}
						>
							<ThemeSwitcher />
						</Box>
					),
				}}
				defaultSidebarCollapsed
			>
				
					<PageContainer>
						<DemoPageContent pathname={router.pathname} />
						<Routes>
							<Route
								path='/'
								element={
									<Suspense fallback={<Loading />}>
										<MainPage />
									</Suspense>
								}
							/>
							<Route
								path='/dashboard'
								element={
									<Suspense fallback={<Loading />}>
										<Dashboard />
									</Suspense>
								}
							/>
							<Route
								path='/profile'
								element={
									<Suspense fallback={<Loading />}>
										<Profile />
									</Suspense>
								}
							/>
							<Route path='*' element={<div>404</div>} />
						</Routes>
					</PageContainer>
				
			</DashboardLayout>
		</AppProvider>
	)
}

export default DashboardLayoutRouted
