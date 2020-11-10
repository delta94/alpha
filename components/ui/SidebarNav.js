import ActiveLink from "components/router/ActiveLink";
import React from "react";
import Card from "./Card";

function SidebarNav({ children }) {
	return (
		<Card>
			<Card.Content>
				<nav>{children}</nav>
			</Card.Content>
		</Card>
	);
}

function SidebarNavLink({ route, params = {}, children }) {
	return (
		<ActiveLink
			route={route}
			activeClassName="text-gray-900 bg-gray-100"
			params={params}
		>
			<a
				className="flex items-center px-3 py-2 mb-1 text-sm font-medium text-gray-600 last:mb-0 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
				aria-current="page"
			>
				<span className="truncate">{children}</span>
			</a>
		</ActiveLink>
	);
}

SidebarNav.Link = SidebarNavLink;

export default SidebarNav;
