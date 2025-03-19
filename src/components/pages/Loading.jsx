import React, { useEffect, useState } from 'react'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
	const [showFallback, setShowFallback] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowFallback(true)
		}, 300)
		return () => clearTimeout(timer)
	}, [])

	return showFallback ? (
		<Backdrop
			sx={theme => ({
				color: '#fff',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: theme.zIndex.drawer + 1,
			})}
			open={true}
		>
			<CircularProgress color='inherit' />
		</Backdrop>
	) : null
}
