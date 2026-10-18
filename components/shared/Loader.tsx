import { type ReactElement } from "react";

/** Full-screen spinner; styles live in app/globals.css (.loader). */
export function Loader(): ReactElement {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="loader" />
        </div>
    );
}
