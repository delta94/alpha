import React from "react";

export default function SidebarItem({ title, titleRight = null, children }) {
	return (
		<div className="mb-2 last:mb-0">
			<div className="inline-flex flex-row w-full">
				<h3 className="heading">{title}</h3>
				<span className="flex-grow"></span>
				{titleRight}
			</div>
			{children}
		</div>
	);
}
