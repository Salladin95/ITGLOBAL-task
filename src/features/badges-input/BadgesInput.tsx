import React from 'react'
import { Badge } from '~/shared/ui/badge'
import { Input } from '~/shared/ui/inputs'
import { ClearIcon } from '~/shared/ui/icons'
import { AddButton, SearchButton } from '~/shared/ui/buttons'

import './badges-input.scss'

export function BadgesInput() {
	const [badges, setBadges] = React.useState<React.ReactNode[]>([])
	const inputRef = React.useRef<HTMLInputElement>(null!)

	function handleAddBadge() {
		if (inputRef.current.value) {
			setBadges([...badges, inputRef.current.value])
			inputRef.current.value = ''
		}
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
