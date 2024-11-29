// import { UiKit } from './widgets'
import { Header , SideBar } from './widgets/'

import './index.scss'

function App() {
	return (
		<>
			<Header />
			<main className="app">
				<SideBar />
				{/* <UiKit /> */}
			</main>
		</>
	)
}

export default App
