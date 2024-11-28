import { SvgProps } from '~/shared/types'

export function RightArrowIcon(props: SvgProps) {
	const { className, ...rest } = props
	return (
		<svg
			viewBox="0 0 16 16"
			className={`w-1 h-1 ${className}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.5286 3.5286C5.78895 3.26825 6.21106 3.26825 6.4714 3.5286L10.4714 7.5286C10.7318 7.78895 10.7318 8.21106 10.4714 8.47141L6.4714 12.4714C6.21106 12.7318 5.78895 12.7318 5.5286 12.4714C5.26825 12.2111 5.26825 11.7889 5.5286 11.5286L9.05719 8L5.5286 4.4714C5.26825 4.21106 5.26825 3.78895 5.5286 3.5286Z"
				fill="#ABB1BA"
			/>
		</svg>
	)
}
