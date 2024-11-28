import React from 'react'
import { ClearIcon } from '~/shared/ui/icons'
import { Input, InputProps } from './Input'

type InputWithClearProps = InputProps & {
	onClearClick?: (e?: React.SyntheticEvent) => void
}

export function InputWithClear(props: InputWithClearProps) {
	const { onClearClick, ...rest } = props
	return <Input {...rest} suffix={<ClearIcon className="cursor-pointer" onClick={onClearClick} />} />
}
