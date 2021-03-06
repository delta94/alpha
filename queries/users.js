import axios, { axiosWrapper } from "utils/axios";
import { useQuery } from "react-query";
import { userSchema } from "schemas/user";
import { StdErrorCollection } from "utils/error";

export const USER_QUERIES = {
	getUser: "users.getUser",
};

export async function getUser(key, { username }) {
	const { data } = await axiosWrapper(axios.get, `/users/${username}/`);
	const { value, error } = userSchema.validate(data);
	if (error) throw new StdErrorCollection(error);
	return value;
}

export function useUser(username) {
	return useQuery([USER_QUERIES.getUser, { username }], getUser, {
		staleTime: 1000 * 60 * 5,
	});
}
