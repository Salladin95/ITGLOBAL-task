import React from 'react'
import { FormHeader } from './FormHeader'
import { FormFields } from './FormFields'

import './form.scss'

export function Form() {
	const ref = React.useRef<HTMLDivElement>(null!)
	const [hasScrolled, setHasScrolled] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => {
			console.log('here we are')
			if (ref.current?.scrollTop > 0) {
				setHasScrolled(true)
			} else {
				setHasScrolled(false)
			}
		}

		const element = ref.current
		if (element) {
			element.addEventListener('scroll', handleScroll)
		}

		return () => {
			if (element) {
				element.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	return (
		<div ref={ref} className="main-form">
			<FormHeader hasScrolled={hasScrolled} />
			<p className="main-form__title">
				STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента
				если он Caller
			</p>
			<FormFields />
		</div>
	)
}
