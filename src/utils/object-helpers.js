export const updateObject = (items, id, propName, newProps) =>
    items.map((i) => (i[propName] === id ? { ...i, newProps } : i));
