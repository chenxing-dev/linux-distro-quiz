import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100">
            <Card className="text-center max-w-xs md:max-w-md p-6">
                <CardTitle className="text-4xl font-bold">404</CardTitle>
                <h2 className="text-2xl font-semibold">Page Not Found</h2>
                <CardDescription>
                    The page you're looking for doesn't exist or has been moved.
                </CardDescription>
                <Button>
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-lg transition"
                    >
                        Return to Home
                    </Link>
                </Button>
            </Card>
        </div>
    );
}