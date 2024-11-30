import { Button } from '~/shared/ui'
import './form-header.scss'

export function FormHeader() {
	return (
		<div className="form-header">
			<div>
				<p className='form-header__sub-task'>Подзадача</p>
				<Button variant={'secondary'}>Создать</Button>
			</div>
			<div>
				<Button variant={'primary'}>Сохранить</Button>
				<Button variant={'secondary'}>Сохранить и Выйти</Button>
			</div>
		</div>
	)
}
