import { type ReactElement } from "react";
import { type JsonLdSchema } from "@/types/seo";

type JsonLdProps = {
    schemas: JsonLdSchema[];
};

// Escape "<" so a value can never close the surrounding <script> tag.
const serialize = (schema: JsonLdSchema): string => JSON.stringify(schema).replace(/</g, "\\u003c");

export function JsonLd({ schemas }: JsonLdProps): ReactElement {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`${schema["@type"]}-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: serialize(schema) }}
                />
            ))}
        </>
    );
}
