import React from "react";
import ClimbingBoxLoader from "../../vendor/ClimbingBoxLoader";

function Spinner({
	small = false,
	text = null,
	size = 15,
	color = "#fff",
	className = "",
}) {
	if (small) {
		return (
			<div className={"inline-flex " + className}>
				<svg
					width={size}
					height={size}
					viewBox="0 0 40 40"
					xmlns="http://www.w3.org/2000/svg"
					stroke={color}
					style={{ overflow: "visible" }}
				>
					<g fill="none" fill-rule="evenodd">
						<g transform="translate(1 1)" strokeWidth="4">
							<circle strokeOpacity=".5" cx="18" cy="18" r="18" />
							<path d="M36 18c0-9.94-8.06-18-18-18">
								<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 18 18"
									to="360 18 18"
									dur="0.8s"
									repeatCount="indefinite"
								/>
							</path>
						</g>
					</g>
				</svg>

				{text ? (
					<span className="font-semibold text-sm ml-2">{text}</span>
				) : null}
			</div>
		);
	}
	return (
		<center>
			<div>
				{small ? (
					<svg
						width={size}
						height={size}
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
						stroke={color}
						style={{ overflow: "visible" }}
					>
						<g fill="none" fill-rule="evenodd">
							<g transform="translate(1 1)" strokeWidth="4">
								<circle
									strokeOpacity=".5"
									cx="18"
									cy="18"
									r="18"
								/>
								<path d="M36 18c0-9.94-8.06-18-18-18">
									<animateTransform
										attributeName="transform"
										type="rotate"
										from="0 18 18"
										to="360 18 18"
										dur="0.8s"
										repeatCount="indefinite"
									/>
								</path>
							</g>
						</g>
					</svg>
				) : (
					<ClimbingBoxLoader />
				)}
			</div>
			{text ? (
				<span className="font-semibold text-sm mt-2">{text}</span>
			) : null}
		</center>
	);
}

export default Spinner;
