import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { convertToCleanUrl, isGitHubPages } from '@/lib/urlUtils';

const UrlCleaner = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isGitHubPages() && location.hash) {
            // Convert hash URL to clean URL for sharing
            const cleanUrl = convertToCleanUrl();

            // Update clipboard API to use clean URL
            const originalClipboardWriteText = navigator.clipboard.writeText;
            navigator.clipboard.writeText = async (text: string) => {
                if (text.includes('#')) {
                    return originalClipboardWriteText.call(
                        navigator.clipboard,
                        text.replace(window.location.origin, cleanUrl)
                    );
                }
                return originalClipboardWriteText.call(navigator.clipboard, text);
            };
        }
    }, [location, navigate]);

    return null;
};

export default UrlCleaner;