import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'
import PersonIcon from '@mui/icons-material/Person'

function getNavigation() {
	return [
		{ kind: 'header', title: 'Main items' },
		{
			segment: 'dashboard',
			title: 'Dashboard',
			icon: <DashboardIcon />,
			to: '/',
		},
		{
			segment: 'profile',
			title: 'Profile',
			icon: <PersonIcon />,
			to: '/profile',
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
					to: '/chart',
				},
				{
					segment: 'traffic',
					title: 'Traffic',
					icon: <DescriptionIcon />,
					to: '/traffic',
				},
			],
		},
		{
			segment: 'integrations',
			title: 'Integrations',
			icon: <LayersIcon />,
			to: '/integrations',
		},
	]
}

export default getNavigation
