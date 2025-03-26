
import Image from "next/image";

export default function Course3() {
    return (
        <div className="w-screen h-full">
            <div className="flex flex-col items-center mt-16 h-full">
                <h1 className="text-6xl font-bold">Course 3: Using Next.js Image Component</h1>
                <p className="text-3xl mt-12">Learn how to optimize images using Next.js built-in Image component</p>

                <div className="flex mt-16">
                    <div className="flex flex-col">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold">1. Understanding the Image Component</h2>
                            <p className="text-gray-700">The Next.js Image component provides:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Automatic image optimization</li>
                                <li>Lazy loading by default</li>
                                <li>Prevents layout shift</li>
                                <li>Responsive images</li>
                            </ul>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">2. Basic Image Usage</h2>
                            <p className="text-gray-700">Import and use the Image component:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`import Image from 'next/image'

export default function MyComponent() {
  return (
    <Image
      src="/example.jpg"    // Place image in public folder
      alt="Example Image"
      width={500}          // Required
      height={300}         // Required
      priority={false}     // Set true for above-fold images
    />
  )
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">3. Responsive Images</h2>
                            <p className="text-gray-700">Make images responsive with fill and sizes:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`<div className="relative w-full h-[300px]">
  <Image
    src="/hero-image.jpg"
    alt="Hero image"
    fill
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    className="object-cover"
  />
</div>`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">4. Remote Images</h2>
                            <p className="text-gray-700">Using images from external sources:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`// First, configure domains in next.config.js
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
}

// Then use in your component
<Image
  src="https://example.com/image.jpg"
  alt="Remote image"
  width={500}
  height={300}
/>`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">5. Practical Example</h2>
                            <p className="text-gray-700">Here is a complete example with different image techniques:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Local image with fixed dimensions */}
      <Image
        src="/local-image.jpg"
        alt="Local image"
        width={400}
        height={300}
        className="rounded-lg"
      />
      
      {/* Responsive container with fill */}
      <div className="relative aspect-video">
        <Image
          src="/hero.jpg"
          alt="Hero image"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}`}
                                </pre>
                            </div>
                        </section>

                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-16 pb-10">
                            <a
                                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                                href="/courses/course4"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="dark:invert"
                                    src="/vercel.svg"
                                    alt="Vercel logomark"
                                    width={20}
                                    height={20}
                                />
                                Next Course!
                            </a>
                            <a
                                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                                href="/courses/courseHome"
                                rel="noopener noreferrer"
                            >
                                Course list
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}