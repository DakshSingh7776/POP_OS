import Image from 'next/image';
import Link from 'next/link';
import placeholderImages from '@/lib/placeholder-images.json';

const appIcons = [
  { name: 'Steam', src: placeholderImages.steam.src, hint: placeholderImages.steam.hint },
  { name: 'Google Chrome', src: placeholderImages.chrome.src, hint: placeholderImages.chrome.hint },
  { name: 'Firefox', src: placeholderImages.firefox.src, hint: placeholderImages.firefox.hint },
  { name: 'VS Code', src: placeholderImages.vscode.src, hint: placeholderImages.vscode.hint },
  { name: 'Zoom', src: placeholderImages.zoom.src, hint: placeholderImages.zoom.hint },
  { name: 'Spotify', src: placeholderImages.spotify.src, hint: placeholderImages.spotify.hint },
  { name: 'VLC', src: placeholderImages.vlc.src, hint: placeholderImages.vlc.hint },
  { name: 'GIMP', src: placeholderImages.gimp.src, hint: placeholderImages.gimp.hint },
  { name: 'Dropbox', src: placeholderImages.dropbox.src, hint: placeholderImages.dropbox.hint },
  { name: 'Slack', src: placeholderImages.slack.src, hint: placeholderImages.slack.hint },
];


export function FeatureShowcase() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase font-bold tracking-widest text-gray-500">Features</h3>
          <h2 className="text-4xl md:text-5xl font-headline font-medium mt-2 text-gray-800">Why Pop!_OS?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-headline text-gray-800 mb-4">Workflow</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pop!_OS is designed for fast navigation, easy workspace organization, and fluid, convenient workflow. Your operating system should encourage discovery, not obstruct it.
            </p>
            <Link href="#" className="font-bold text-gray-500 hover:text-gray-900 transition-colors tracking-wider text-sm">
              LEARN MORE &gt;
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src={placeholderImages.workflow1.src}
              alt="Code editor screenshot"
              width={500}
              height={300}
              data-ai-hint={placeholderImages.workflow1.hint}
              className="rounded-lg shadow-2xl absolute top-0 right-0 w-4/5 z-10"
            />
            <Image
              src={placeholderImages.workflow2.src}
              alt="Github screenshot"
              width={400}
              height={250}
              data-ai-hint={placeholderImages.workflow2.hint}
              className="rounded-lg shadow-2xl absolute bottom-0 left-0 w-3/5"
            />
             <Image
              src={placeholderImages.workflow3.src}
              alt="Code editor with dark theme"
              width={450}
              height={280}
              data-ai-hint={placeholderImages.workflow3.hint}
              className="rounded-lg shadow-2xl absolute -bottom-10 right-10 w-2/3 z-20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="grid grid-cols-5 gap-4">
                {appIcons.map((icon) => (
                    <div key={icon.name} className="flex justify-center items-center p-2">
                        <Image 
                            src={icon.src} 
                            alt={`${icon.name} logo`} 
                            width={80} 
                            height={80} 
                            data-ai-hint={icon.hint}
                            className="rounded-full shadow-md"
                        />
                    </div>
                ))}
            </div>
            <div>
                <h3 className="text-3xl font-headline text-gray-800 mb-4">Compatibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pop!_OS is pre-installed with a vast array of libraries and tools for your projects. Use what you want; we’ll get out of your way. Pop!_OS uses APT and Flatpak package management.
                </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-headline text-gray-800 mb-4">Software Development</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              A smoothly operating system and a clean desktop free of distractions give you a focused environment to develop your next big idea.
            </p>
            <Link href="#" className="font-bold text-gray-500 hover:text-gray-900 transition-colors tracking-wider text-sm">
              LEARN MORE &gt;
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src={placeholderImages.dev.src}
              alt="Software development environment"
              fill
              data-ai-hint={placeholderImages.dev.hint}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-96">
            <Image
              src={placeholderImages.media.src}
              alt="Media production software"
              fill
              data-ai-hint={placeholderImages.media.hint}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-headline text-gray-800 mb-4">Media Production</h3>
            <p className="text-gray-600 leading-relaxed">
              When your muse takes over, your OS needs to provide a frictionless experience. Pop!_OS helps you get in the zone and stay there.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-headline text-gray-800 mb-4">Gaming</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pop!_OS provides a stellar gaming experience with its built-in NVIDIA drivers and Game-Ready drivers available for download in the Pop!_Shop.
            </p>
            <Link href="#" className="font-bold text-gray-500 hover:text-gray-900 transition-colors tracking-wider text-sm">
              LEARN MORE &gt;
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src={placeholderImages.gaming.src}
              alt="Gaming on Pop!_OS"
              fill
              data-ai-hint={placeholderImages.gaming.hint}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
