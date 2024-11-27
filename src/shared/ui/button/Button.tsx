import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva('btn', {
	variants: {
		variant: {
			primary: 'btn--primary',
			secondary: 'btn--secondary',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
})

export type ButtonVariant = VariantProps<typeof buttonVariants>

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant['variant']
  children: React.ReactNode; // Children is a required field
}

export function Button(props: ButtonProps) {
	const { className, variant, ...rest } = props
	return <button className={buttonVariants({ className, variant })} {...rest} />
}
