import { cn } from '~/shared/utils'
import { PropsWithChildren, PropsWithClassName } from '~/shared/types'

type FormFieldProps = {
	error?: string
} & Required<PropsWithChildren> &
	PropsWithClassName

type FormFieldWithLabelProps = {
	id: string
	label: string
} & FormFieldProps

export function FormFieldWithLabel(props: FormFieldWithLabelProps) {
	const { id, label, children, error, className } = props
	return (
		<div className={cn('relative text-primary', className, { 'text-red-400': Boolean(error) })}>
			{label && (
				<label className={'cursor-pointer inline-block mb-2'} htmlFor={id}>
					{label}
				</label>
			)}
			{children}
			{error && <span className={'absolute right-0 -bottom-6'}>{error}</span>}
		</div>
	)
}

export function FormField(props: FormFieldProps) {
	const { children, error, className } = props
	return (
		<div className={cn({ 'text-red-400': Boolean(error) }, 'relative', className)}>
			{children}
			{error && <span className={'absolute right-0 -bottom-6'}>{error}</span>}
		</div>
	)
}
