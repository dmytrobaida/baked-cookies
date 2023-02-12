export default function serialize(cookieObject: Record<string, string | number>): string {
    if (cookieObject == null || Object.keys(cookieObject).length === 0) {
        return '';
    }

    const cookieString = Object
        .keys(cookieObject)
        .reduce((acc, key) => {
            const value = cookieObject[key];
            if (value == null) {
                return acc.concat(`${key};`);
            }
            return acc.concat(`${key}=${cookieObject[key]};`);
        }, '');

    return cookieString;
};