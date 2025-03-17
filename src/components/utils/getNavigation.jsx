import DashboardIcon  from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'
import PersonIcon from '@mui/icons-material/Person'

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

export default getNavigation
