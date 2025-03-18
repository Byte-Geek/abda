import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import DescriptionIcon from '@mui/icons-material/Description'
import LayersIcon from '@mui/icons-material/Layers'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'

function getNavigation(navigate) {
	return [
		{ kind: 'header', title: 'Main items' },
		{
			segment: 'dashboard',
			title: 'Dashboard',
			icon: <DashboardIcon />,
			onclick: () => navigate(<Link to='/'></Link>),
		},
		{
			segment: 'profile',
			title: 'Profile',
			icon: <PersonIcon />,
			onclick: () => navigate(<link to='/profile'></link>),
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
					onclick: () => navigate(<Link to='/chart'></Link>),
				},
				{
					segment: 'traffic',
					title: 'Traffic',
					icon: <DescriptionIcon />,
					onclick: () => navigate(<Link to='/traffic'></Link>),
				},
			],
		},
		{ segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
	]
}

export default getNavigation
