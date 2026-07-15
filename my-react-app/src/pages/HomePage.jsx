import profilePic from '../assets/profile.jpg';
import StemBuilding from '../assets/stem.jpeg';

export default function HomePage() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center py-10 px-4 space-y-12">
            <section className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 justify-center">
                <img 
                    src={profilePic}
                    alt="Profile"
                    className="w-40 h-40 rounded-full shadow-lg border-4 border-white object-cover"
                />
                
                <div className="space-y-4 text-center md:text-left py-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Welcome to My React Site
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Hello! I'm learning <span className="font-semibold text-blue-600">React</span>
                    </p>
                </div>
            </section>

            <div className="w-full max-w-3xl px-4">
                <img 
                    src={StemBuilding}
                    alt="StemBuilding"
                    className="w-full rounded-2xl shadow-xl border border-gray-200 object-cover"
                />
            </div>
        </main>
    );
}