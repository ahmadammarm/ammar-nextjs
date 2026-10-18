import { type ReactElement, type ReactNode } from "react";

export const fieldInputClass =
    "w-full px-4 py-3 bg-background neo-border text-foreground text-sm font-medium placeholder:text-muted-foreground neo-shadow-sm focus:outline-none focus:bg-brand-blue/5 transition-all";

type FormFieldProps = {
    id: string;
    label: string;
    error?: string;
    children: ReactNode;
};

/** Label, control and validation message for one contact form field. */
export function FormField({ id, label, error, children }: FormFieldProps): ReactElement {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-xs font-black uppercase tracking-wider text-foreground">
                {label} <span className="text-brand-blue">*</span>
            </label>
            {children}
            {error && (
                <p id={`${id}-error`} role="alert" className="text-xs font-bold text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
}
