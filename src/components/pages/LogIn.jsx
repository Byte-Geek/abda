import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppProvider } from '@toolpad/core/AppProvider'
import { SignInPage } from '@toolpad/core/SignInPage'
import { createTheme } from '@mui/material/styles'
import { Box } from '@mui/material'

const providers = [{ id: 'credentials', name: 'Credentials' }]

const Theme = createTheme({
	cssVariables: {
		colorSchemeSelector: 'data-toolpad-color-scheme',
	},
	colorSchemes: { dark: true },
	breakpoints: {
		values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
	},
})

export default function LogIn() {
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/dashboard' // Default la Dashboard

	// Verifică dacă utilizatorul este deja logat
	useEffect(() => {
		const session = localStorage.getItem('session')
		if (session) {
			navigate(from, { replace: true })
		}
	}, [navigate, from])

	const signIn = async () => {
		await new Promise(resolve => setTimeout(resolve, 500)) // Simulare delay login

		// Salvăm sesiunea în localStorage
		const userSession = {
			user: { name: 'User', email: 'user@example.com', image: '' },
		}
		localStorage.setItem('session', JSON.stringify(userSession))

		console.log('Autentificare reușită!')
		navigate(from, { replace: true })
	}

	return (
		<AppProvider theme={Theme}>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					overflow: 'hidden',
					margin: 0,
					padding: 0,
				}}
			>
				<SignInPage
					signIn={signIn}
					providers={providers}
					slotProps={{
						emailField: { variant: 'standard', autoFocus: true },
						passwordField: { variant: 'standard' },
						submitButton: { variant: 'outlined' },
					}}
				/>
			</Box>
		</AppProvider>
	)
}
