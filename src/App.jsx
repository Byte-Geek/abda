import { useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Count is {count}</h1>
			<div className='card'>
				<Stack spacing={2} direction='row'>
					<Button
						variant='contained'
						onClick={() => setCount(count => count + 1)}
					>
						{' '}
						Increment{' '}
					</Button>
					<Button
						variant='outlined'
						onClick={() => setCount(count => count - 1)}
					>
						{' '}
						Decrement{' '}
					</Button>
				</Stack>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				eaque neque nisi culpa, qui rem aut voluptatum ducimus, excepturi
				tempore sequi animi, itaque nihil pariatur quos placeat laudantium!
				Ducimus, quibusdam.
			</p>
		</>
	)
}

export default App
