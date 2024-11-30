import React from 'react'
import { BadgesInput } from '~/features'
import { FormHeader } from './FormHeader'
import { CalendarButton, FormFieldWithLabel, Input } from '~/shared/ui'

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

			<div className="main-form__fields-wrapper">
				<FormFieldWithLabel required forId={'topic'} label={'Тема'}>
					<Input id="topic" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'status'} label={'Статус'}>
					<Input id="status" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'description'} label={'Описание'}>
					<Input id="description" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'product'} label={'Продукт'}>
					<Input id="product" />
				</FormFieldWithLabel>
				<FormFieldWithLabel required forId={'notes'} label={'Рабочие заметки'}>
					<Input id="notes" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'priority'} label={'Приоритет'}>
					<Input id="priority" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'responsible'} label={'Ответственный'}>
					<BadgesInput id="responsible" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'group'} label={'Группа'}>
					<BadgesInput id="group" />
				</FormFieldWithLabel>
			</div>

			<div className="main-form__full-fields-wrapper">
				<FormFieldWithLabel forId={'comments'} label={'Комментарии'}>
					<Input id="comments" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'coordinators'} label={'Согласующие'}>
					<BadgesInput id="coordinators" />
				</FormFieldWithLabel>
			</div>

			<div className="main-form__fields-wrapper">
				<FormFieldWithLabel forId={'open-at'} label={'Когда открыто'}>
					<div className="flex gap-1">
						<Input id="open-at" />
						<CalendarButton />
					</div>
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'create-at'} label={'Когда создано'}>
					<div className="flex gap-1">
						<Input id="create-at" />
						<CalendarButton />
					</div>
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'opened-by'} label={'Кем открыто'}>
					<BadgesInput id="opened-by" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'created-by'} label={'Кем создано'}>
					<BadgesInput id="created-by" />
				</FormFieldWithLabel>
			</div>
		</div>
	)
}
