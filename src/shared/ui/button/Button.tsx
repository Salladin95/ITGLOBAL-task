import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import './button.scss'

const buttonVariants = cva('btn', {
	variants: {
		variant: {
			primary: 'btn--variant--primary',
			secondary: 'btn--variant--secondary',
			none: '',
		},
		size: {
			default: 'btn--size--default',
			sm: 'btn--size--sm',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default',
	},
})

export type ButtonVariant = VariantProps<typeof buttonVariants>

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant['variant']
	size?: ButtonVariant['size']
	children: React.ReactNode // Children is a required field
}

export function Button(props: ButtonProps) {
	const { className, variant, size, ...rest } = props
	return (
		<button
			className={buttonVariants({
				className,
				variant,
				size,
			})}
			{...rest}
		/>
	)
}
