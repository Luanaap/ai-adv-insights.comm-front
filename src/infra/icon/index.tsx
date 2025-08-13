import type { CustomIconContainerProps } from "./model";
import "./style.scss";

export const CustomIcon = ({
	id = "",
	name = "home",
	color,
	iconSize = 16,
	circle,
	outline,
	inverse,
	role = "",
	tabIndex,
	onClick,
	customCircleBackgroundColor,
	padding="0px",
	customColor="",
	customStyle={},
	margin=""
}: CustomIconContainerProps) => {
	//const circleClass = circle ? "icon-container__circle" : "";

	const circleOutlineClass = outline && circle ? "icon-container__circle--outline" : "";

	const circleInverseClass = inverse && circle ? "icon-container__circle--inverse" : "";

	const circleInverseOutlineClass = inverse && outline ? "icon-container__circle--inverse--outline" : "";

	const clickEvent = onClick ? "icon-container__click-event" : "";

	const circleClass = circle ? "circle-div" : ""

	return (
		<div
			id={id}
			data-testid="icon-container"
			className={`icon-container ${clickEvent} ${circleClass} ${circleOutlineClass} ${circleInverseClass} ${circleInverseOutlineClass}`}
			style={{
				...customStyle,
				cursor: role === "button" || onClick ? "pointer" : "default",
				backgroundColor: customCircleBackgroundColor,
				padding: padding,
				color: customColor,
				width: `${iconSize}px`,
				height: `${iconSize}px`
			}}
			role={role}
			tabIndex={tabIndex}
			onClick={onClick}
		>
			<i
				className={`icon-container__icon icon-${name} icon-container__icon--${color}`}
				style={{
					fontSize: `${circle ? iconSize / 2 : iconSize}px`,
					margin: margin
				}}
			></i>
		</div>
	);
};
