
const MovingDotsBorder = ({borderWidth='8', color='currentColor', rx='12' }) =>  <svg
		className={`abs-full `}
		rx={rx+'px'}
		fill="none"
		stroke={color}
		strokeWidth={borderWidth}
		strokeLinecap="round"
		strokeDasharray={`0 ${borderWidth+2} `}
		strokeDashoffset={0}
		overflow={'visible'}
	>
		<rect rx={rx+'px'} width="100%" height="100%"/>

		<animate
			attributeName="stroke-dashoffset"
			// values="0;-100"
			to={'100'}
			dur="3s"
			// calcMode=""
			repeatCount="indefinite"
		/>
	</svg>

export default MovingDotsBorder;