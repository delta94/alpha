import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { extractResultsFromGroups } from "utils/random";
import ErrorCard from "components/ui/ErrorCard";
import Button from "components/ui/Button";
import Spinner from "components/ui/Spinner";
import orderBy from "lodash/orderBy";
import Message from "components/ui/Message";

export default function InfiniteSearch({ queryState, renderData = () => {} }) {
	const {
		data,
		fetchMore,
		canFetchMore,
		status,
		isFetching,
		isFetchingMore,
	} = queryState;
	const items = orderBy(extractResultsFromGroups(data), "desc", "rank").map(
		(r) => r.item
	);

	return (
		<InfiniteScroll
			dataLength={items.length}
			next={() => fetchMore()} // important!
			hasMore={canFetchMore}
			style={{ overflow: "none" }}
		>
			{status === "loading" ? (
				<div className="flex items-center justify-center w-full h-32">
					<Spinner text="Loading..." small />
				</div>
			) : status === "error" ? (
				<ErrorCard
					message="Failed to load the search results."
					actions={
						<Button
							primary
							loading={isFetching}
							onClick={fetchMore}
						>
							Retry
						</Button>
					}
				/>
			) : (
				<>
					<div className="space-y-2">
						{items.map((item, idx) => (
							<div key={idx}>{renderData(item)}</div>
						))}
						{items.length === 0 && (
							<Message info>No results.</Message>
						)}
					</div>
					{canFetchMore && (
						<div className="mt-4">
							<center>
								<Button
									small
									onClick={() => fetchMore()}
									loading={isFetchingMore}
								>
									Load more results
								</Button>
							</center>
						</div>
					)}
				</>
			)}
		</InfiniteScroll>
	);
}
