// import { UiKit } from './widgets'
import { Header, SideBar, Form } from './widgets/'

import './index.scss'

function App() {
	return (
		<>
			<Header />
			<main className="app">
				<SideBar />
				<Form />
			</main>
		</>
	)
}

export default App
