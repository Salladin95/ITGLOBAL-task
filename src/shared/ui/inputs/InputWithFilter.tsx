import React from 'react'
import { FilterIcon } from '~/shared/ui/icons'
import { Input, InputProps } from './Input'

type InputWithFilterProps = InputProps & {
	onFilterClick?: (e?: React.SyntheticEvent) => void
}

export function InputWithFilter(props: InputWithFilterProps) {
	const { onFilterClick, ...rest } = props
	return <Input {...rest} suffix={<FilterIcon className='cursor-pointer' onClick={onFilterClick} />} />
}
