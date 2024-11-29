import { LogoIcon, SearchIcon, SettingsIcon, SideBarIcon } from '~/shared/ui/icons'

import './header.scss'
import { Button, Input } from '~/shared/ui'

export function Header() {
	return (
		<header className="header">
			<LogoIcon />
      <SideBarIcon />

			<div className="flex gap-4">
				<Input placeholder='Поиск' suffix={<SearchIcon />} />
				<Profile avatar="person.png" name="Максим Галактионов" />
				<Button variant={'secondary'}>
					<SettingsIcon />
				</Button>
			</div>
		</header>
	)
}

type ProfileProps = {
	avatar: string
	name: string
}

function Profile(props: ProfileProps) {
	const { avatar, name } = props
	return (
		<div className="profile">
			<img className="profile__avatar" src={avatar} alt="avatar" />
			<p className="profile__name">{name}</p>
		</div>
	)
}
