export const required = (value) => (value ? undefined : "Field is required");
export const maxLength = (size) => (value) =>
    value.length <= size ? undefined : `Max length ${size}`;
