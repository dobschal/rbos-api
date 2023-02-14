export function observable(obj, onChange) {
    return new Proxy(obj, {
        set(target, key, value) {
            target[key] = value;
            onChange(key, value, target);
            return true;
        }
    });
}