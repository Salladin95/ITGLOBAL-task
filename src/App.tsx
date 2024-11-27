import { Button } from './shared/ui'

import './index.scss'

function App() {
	return (
		<main className='app'>
			<Button>Primary</Button>
			<Button variant={'secondary'}>Secondary</Button>
			<Button variant={'none'}>None</Button>
		</main>
	)
}

export default App
