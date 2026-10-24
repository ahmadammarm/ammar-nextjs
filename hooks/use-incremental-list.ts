import { useState } from "react";

type IncrementalList<T> = {
    visibleItems: T[];
    hasMore: boolean;
    loadMore: () => void;
};

type PagingState<T> = {
    source: T[];
    count: number;
};

/** Reveals `items` in pages of `pageSize`; paging restarts whenever the `items` reference changes. */
export function useIncrementalList<T>(items: T[], pageSize: number): IncrementalList<T> {
    const [paging, setPaging] = useState<PagingState<T>>({ source: items, count: pageSize });

    // Derive the count instead of resetting it in an effect, so a new list never renders with a stale count.
    const count = paging.source === items ? paging.count : pageSize;

    return {
        visibleItems: items.slice(0, count),
        hasMore: count < items.length,
        loadMore: () => setPaging({ source: items, count: count + pageSize }),
    };
}
