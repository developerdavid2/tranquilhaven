import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { useRef } from "react";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Track the previous filter and sort values
  const prevFilterValue = useRef(filterValue);
  const prevSortByRaw = useRef(sortByRaw);

  // Check if filter or sort has changed, and reset the page if necessary
  if (
    prevFilterValue.current !== filterValue ||
    prevSortByRaw.current !== sortByRaw
  ) {
    page = 1;
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  // Update the refs to the current values for future comparisons
  prevFilterValue.current = filterValue;
  prevSortByRaw.current = sortByRaw;

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
    keepPreviousData: true,
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, bookings, error, count };
}
