import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from 'react-router-dom'
import React, { lazy, Suspense, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { createTheme } from '@mui/material/styles'
import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import Box from '@mui/material/Box'

import getNavigation from './getNavigation.jsx'
import Loading from '../pages/Loading.jsx'
import MainPage from '../pages/MainPage.jsx'

const Dashboard = lazy(() => import('../pages/DashBoard.jsx'))
const Profile = lazy(() => import('../pages/Profile.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))


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
		navigate: (path) => navigate(path),
	}
}



function DashboardLayoutRouted({ window }) {
	const router = useRouter()
	const navigation = getNavigation() 

	const [session, setSession] = React.useState({})

	const authentication = useMemo(
		() => ({
			signIn: () => setSession({ user: { name: '', email: '', image: '' } }),
			signOut: () => setSession({}),
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
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Suspense>
				</PageContainer>
			</DashboardLayout>
		</AppProvider>
	)
}

DashboardLayoutRouted.propTypes = {
	window: PropTypes.object,
}

export default DashboardLayoutRouted
