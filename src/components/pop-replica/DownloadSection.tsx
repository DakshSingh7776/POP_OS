import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
            Download Pop!_OS
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Choose the version that's right for your hardware. All downloads are free and open source.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-between rounded-lg border p-6 text-center shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-headline">Pop!_OS 22.04 LTS</h3>
              <p className="text-muted-foreground">
                Long-term support release for maximum stability.
              </p>
            </div>
            <Button size="lg" className="mt-6 w-full">
              <Download className="mr-2 h-5 w-5" />
              Download LTS
            </Button>
          </div>
          <div className="flex flex-col items-center justify-between rounded-lg border p-6 text-center shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-headline">Pop!_OS 22.04 LTS (NVIDIA)</h3>
              <p className="text-muted-foreground">
                Includes the proprietary NVIDIA driver.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="mt-6 w-full">
              <Download className="mr-2 h-5 w-5" />
              Download for NVIDIA
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Need help? Check out our <a href="#" className="underline hover:text-primary">installation guide</a>.</p>
        </div>
      </div>
    </section>
  );
}
