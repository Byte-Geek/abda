// LogIn.jsx
import { AppProvider } from '@toolpad/core/AppProvider'
import { SignInPage } from '@toolpad/core/SignInPage'
import { useTheme } from '@mui/material/styles'

const providers = [{ id: 'credentials', name: 'Credentials' }]

export default function LogIn({ onLogin }) {
	const theme = useTheme()

	const signIn = async (provider, formData) => {

		await new Promise(resolve => setTimeout(resolve, 500))
		console.log('Autentificare reușită!')
		onLogin?.() 
	}

	return (
		<AppProvider theme={theme}>
			<SignInPage
				signIn={signIn}
				providers={providers}
				slotProps={{
					emailField: { variant: 'standard', autoFocus: false },
					passwordField: { variant: 'standard' },
					submitButton: { variant: 'outlined' },
					rememberMe: null,
				}}
			/>
		</AppProvider>
	)
}
