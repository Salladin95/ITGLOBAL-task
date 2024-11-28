import { RemoveIcon } from '../icons'

import './badge.scss'

type BadgeProps = {
	title: React.ReactNode
	onRemove?: () => void
}

export function Badge(props: BadgeProps) {
	const { title, onRemove } = props
	return (
		<div className="badge p3">
			<p>{title}</p>
			{onRemove && <RemoveIcon className="badge__suffix" onClick={onRemove} />}
		</div>
	)
}
