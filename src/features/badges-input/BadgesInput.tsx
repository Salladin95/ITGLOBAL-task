import React from 'react'
import { ClearIcon } from '~/shared/ui/icons'
import { RemoveIcon } from '~/shared/ui/icons'
import { Input, InputProps } from '~/shared/ui/inputs'
import { AddButton, SearchButton } from '~/shared/ui/buttons'

import './badges-input.scss'

type BadgesInputProps = InputProps

export function BadgesInput(props: BadgesInputProps) {
	const [badges, setBadges] = React.useState<string[]>([])
	const inputRef = React.useRef<HTMLInputElement>(null!)

	function handleAddBadge() {
		const newBadge = inputRef.current.value

		if (!newBadge || badges.includes(newBadge)) {
			return
		}

		setBadges([...badges, inputRef.current.value])
		inputRef.current.value = ''
	}

	function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key.toLocaleLowerCase() === 'enter') {
			handleAddBadge()
		}
	}

	function handleRemoveBadge(badgeTitle: React.ReactNode) {
		setBadges(badges.filter((badge) => badge !== badgeTitle))
	}

	function clearBadges() {
		setBadges([])
	}

	return (
		<div className="badges-input-wrapper flex gap-1">
			<div className="badges-input">
				<Input
					{...props}
					ref={inputRef}
					prefix={
						<>
							{...badges.map((badge) => (
								<Badge title={badge} onRemove={badges.length > 1 ? () => handleRemoveBadge(badge) : undefined} />
							))}
						</>
					}
					onKeyDown={handleEnter}
				/>
				<ClearIcon onClick={clearBadges} className="badges-input__clear-icon" />
			</div>
			<div className="badges-input__controls flex gap-1">
				<AddButton onClick={handleAddBadge} />
				<SearchButton />
			</div>
		</div>
	)
}

type BadgeProps = {
	title: string
	onRemove?: () => void
}

export function Badge(props: BadgeProps) {
	const { title, onRemove } = props

	return (
		<span className="badge p3">
			<span className="badge__title">{title}</span>
			{onRemove && <RemoveIcon className="badge__suffix" onClick={onRemove} />}
		</span>
	)
}
