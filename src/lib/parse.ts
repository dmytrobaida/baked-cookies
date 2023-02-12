export default function parse(cookieString: string): Record<string, string> {
    if (cookieString == null || cookieString.trim() === '') {
        return {};
    }

    const cookieObject = cookieString
        .split(';')
        .filter(cs => cs.trim() !== '')
        .reduce((acc, c) => {
            const stringParts = c.split('=');
            const key = stringParts[0].trim();
            const secondPart = stringParts[1]?.trim();
            const value = isNaN(secondPart as any) ? secondPart : +secondPart;
            
            return {
                ...acc,
                [key]: value,
            };
        }, {});

    return cookieObject;
};