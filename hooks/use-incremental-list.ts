import { useEffect, useState } from "react";

type IncrementalList<T> = {
    visibleItems: T[];
    hasMore: boolean;
    loadMore: () => void;
};

/** Reveals `items` in pages of `pageSize`; resets when the `items` reference changes. */
export function useIncrementalList<T>(items: T[], pageSize: number): IncrementalList<T> {
    const [count, setCount] = useState(pageSize);

    useEffect(() => {
        setCount(pageSize);
    }, [items, pageSize]);

    return {
        visibleItems: items.slice(0, count),
        hasMore: count < items.length,
        loadMore: () => setCount((current) => current + pageSize),
    };
}
