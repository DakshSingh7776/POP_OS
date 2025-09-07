import Link from "next/link";

export function EvolvingSection() {
    return (
        <section className="w-full py-12 md:py-20 lg:py-24 bg-[#f2f2f2] -mt-10 md:-mt-20 relative z-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-normal font-headline tracking-tight text-gray-700">
                    <span className="bg-[#4a4a88] text-white px-2 py-1">POP!_OS</span> IS EVOLVING
                </h2>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
                    COSMIC, our budding desktop environment, brings new features, refinements, core apps, stability, security, and performance to Pop!_OS users everywhere.
                </p>
                <Link href="#" className="inline-block mt-6 font-bold text-gray-500 hover:text-gray-900 transition-colors tracking-wider text-sm">
                    LEARN MORE ABOUT COSMIC &gt;
                </Link>
            </div>
        </section>
    );
}
