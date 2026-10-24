import { useSyncExternalStore } from "react";

const subscribe = (): (() => void) => () => undefined;

/** `false` during server rendering and hydration, `true` once mounted in the browser. */
export function useMounted(): boolean {
    return useSyncExternalStore(
        subscribe,
        () => true,
        () => false
    );
}
