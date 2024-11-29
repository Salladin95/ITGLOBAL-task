import { BadgesInput } from '~/features'
import { AddButton, Button, CalendarButton, FormField, FormFieldWithLabel, Input, SearchButton } from '~/shared/ui'
import {
	AddIcon,
	CalendarIcon,
	ClearIcon,
	FilterIcon,
	PinIcon,
	RightArrowIcon,
	SearchIcon,
	SettingsIcon,
	SideBarIcon,
	StarIcon,
} from '~/shared/ui/icons'

export function UiKit() {
	return (
		<div>
			<section className="w-full mb-4">
				<h1 className="text-center">Buttons</h1>
				<div className="w-full flex-center gap-4">
					<Button>Primary</Button>
					<Button variant={'secondary'}>Secondary</Button>
					<Button variant={'none'}>None</Button>
					<SearchButton />
					<AddButton />
					<CalendarButton />
				</div>
			</section>

			<section className="w-full mb-4">
				<h1 className="text-center">Icons</h1>
				<div className="w-full flex-center gap-4">
					<AddIcon />
					<CalendarIcon />
					<ClearIcon />
					<FilterIcon />
					<PinIcon />
					<SearchIcon />
					<SettingsIcon />
					<SideBarIcon />
					<StarIcon />
					<RightArrowIcon />
				</div>
			</section>

			<section className="w-md mx-auto">
				<h1 className="text-center">Inputs</h1>
				<div className="w-full flex-center flex-col gap-4">
					<Input />
					<Input error />
					<Input prefix={<SearchIcon />} suffix={<AddIcon />} />
					<BadgesInput />

					<FormFieldWithLabel id="form-field1" label="Sth" required>
						<BadgesInput id="form-field1" />
					</FormFieldWithLabel>

					<FormFieldWithLabel id="form-field" label="Ответственный">
						<BadgesInput id="form-field" />
					</FormFieldWithLabel>

					<FormField error='Sth went wrong'>
						<Input />
					</FormField>
				</div>
			</section>
		</div>
	)
}
