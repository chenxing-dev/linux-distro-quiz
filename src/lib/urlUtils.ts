export const convertToHashUrl = (url: string): string => {
    if (url.includes('#/')) return url;

    const path = url.replace(window.location.origin, '');
    return `${window.location.origin}/#${path}`;
};

export const convertToCleanUrl = (): string => {
    const hashPath = window.location.hash.substring(1);
    return `${window.location.origin}${hashPath}`;
};

export const isGitHubPages = () => {
    return window.location.hostname.includes('github.io');
};