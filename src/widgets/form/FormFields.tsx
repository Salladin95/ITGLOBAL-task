import { BadgesInput } from '~/features'
import { CalendarButton, FormFieldWithLabel, Input } from '~/shared/ui'

import './form-fields.scss'

type FormFieldsProps = {
	className?: string
}

export function FormFields(props: FormFieldsProps) {
	const { className } = props
	return (
		<div className={className}>
			<div className="form-fields-wrapper">
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

			<div className="form-full-fields-wrapper">
				<FormFieldWithLabel forId={'comments'} label={'Комментарии'}>
					<Input id="comments" />
				</FormFieldWithLabel>
				<FormFieldWithLabel forId={'coordinators'} label={'Согласующие'}>
					<BadgesInput id="coordinators" />
				</FormFieldWithLabel>
			</div>

			<div className="form-fields-wrapper">
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
