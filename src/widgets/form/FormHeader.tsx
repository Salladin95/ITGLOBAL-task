import { Button } from '~/shared/ui'

import './form-header.scss'

type FormHeaderProps = { hasScrolled: boolean }
export function FormHeader(props: FormHeaderProps) {
	const { hasScrolled } = props
	return (
		<div data-scrolled={hasScrolled} className="form-header">
			<div className="form-header__block form-header__sub-task-block">
				<p className="form-header__sub-task">Подзадача</p>
				<Button variant={'secondary'}>Создать</Button>
			</div>
			<div className="form-header__block form-header__submit-controls">
				<Button variant={'primary'}>Сохранить</Button>
				<Button variant={'secondary'}>Сохранить и Выйти</Button>
			</div>
		</div>
	)
}
