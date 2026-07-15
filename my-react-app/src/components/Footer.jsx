export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-center">
                <p className="text-sm text-gray-500">
                    &#9400; {new Date().getFullYear()} MyReactSite. All rights reserved.
                </p>
            </div>
        </footer>
    );
}