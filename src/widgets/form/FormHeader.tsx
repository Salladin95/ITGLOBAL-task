import React from 'react'
import { FormFields } from './FormFields'
import { Button, Dialog } from '~/shared/ui'
import { RemoveIcon } from '~/shared/ui/icons'
import { PropsWithClassName } from '~/shared/types'

import './form-header.scss'

type FormHeaderProps = { hasScrolled: boolean }
export function FormHeader(props: FormHeaderProps) {
	const { hasScrolled } = props
	return (
		<div data-scrolled={hasScrolled} className="form-header">
			<div className="form-header__block form-header__sub-task-block">
				<p className="form-header__sub-task">Подзадача</p>
				<SubtaskDialog />
			</div>
			<div className="form-header__block form-header__submit-controls">
				<Button variant={'primary'}>Сохранить</Button>
				<Button variant={'secondary'}>Сохранить и Выйти</Button>
			</div>
		</div>
	)
}

function SubtaskDialog() {
	const [open, setOpen] = React.useState(false)

	function ControlButtons(props: PropsWithClassName) {
		return (
			<div className={props.className}>
				<Button variant={'primary'}>Сохранить</Button>
				<Button onClick={() => setOpen(false)} variant={'secondary'}>
					Отменить
				</Button>
			</div>
		)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen} trigger={<Button variant={'secondary'}>Создать</Button>}>
			<div className="sub-task-dialog-header">
				<p className="sub-task-dialog-header__title">Подзадача</p>
				<ControlButtons className="sub-task-dialog-header__submit-controls" />
				<Button onClick={() => setOpen(false)} className="sub-task-dialog-header__cancel-btn" variant={'secondary'}>
					<RemoveIcon />
				</Button>
			</div>
			<div className="sub-task-dialog-content">
				<p className="sub-task-dialog-content__title">Новая запись</p>
				<FormFields />
				<ControlButtons className="sub-task-dialog-content__submit-controls" />
			</div>
		</Dialog>
	)
}
