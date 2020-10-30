import routes from "@fuelrats/next-named-routes";

// https://github.com/FuelRats/next-named-routes

// Destructure what you need
const routerHelper = routes()
	.add("index", "/")
	.add("login", "/login")
	.add("register", "/start")
	.add("forgot-password", "/auth/forgot/")
	.add("auth-complete", "/auth/complete/[method]")
	.add("task", "/tasks/[id]")
	.add("profile", ({ username, ...query }) => {
		return {
			href: "/users/[username]",
			as: `/@${username}`,
			query,
		};
	})
	.add("profile-products", ({ username, ...query }) => {
		return {
			href: "/users/[username]/products",
			as: `/@${username}/products`,
			query,
		};
	})
	.add("settings", "/settings")
	.add("logout", "/logout")
	.add("tasks", "/tasks")
	.add("discussions", "/discussions")
	.add("notifications", "/notifications")
	.add("discussions-thread", "/discussions/[slug]")
	.add("products", "/products")
	.add("products-create", "/products/create")
	.add("product", "/products/[slug]")
	.add("product-edit", "/products/[slug]/edit")
	.add("not-implemented", "/not-implemented");

const { Link, Router, useRouter, withRouter } = routerHelper;

// export what you need
export { Link, Router, useRouter, withRouter, routerHelper };
