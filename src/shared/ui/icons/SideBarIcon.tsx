import { SvgProps } from '~/shared/types'

export function SideBarIcon(props: SvgProps) {
	const { className, ...rest } = props
	return (
		<svg
			viewBox="0 0 20 20"
			className={`w-6 h-6 ${className} side-bar-icon`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 20C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3ZM2 3C2 2.44772 2.44772 2 3 2H6V18H3C2.44772 18 2 17.5523 2 17V3ZM8 18V2H17C17.5523 2 18 2.44772 18 3V17C18 17.5523 17.5523 18 17 18H8Z"
				fill="currentColor"
			/>
		</svg>
	)
}
