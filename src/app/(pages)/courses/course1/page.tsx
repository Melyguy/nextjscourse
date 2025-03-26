
import Image from "next/image";

export default function Course1(){
    return(
        <div className="w-screen h-full">
            <div className="flex flex-col items-center mt-16 h-full">
                <h1 className="text-6xl font-bold">Course 1: Setting up a basic page in Next.js 15</h1>
                <p className="text-3xl mt-12">Learn how to create your first Next.js project and build a simple page</p>
               
               <div className="flex mt-16">
            <div className="flex flex-col">
               <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">1. Setting Up Your Project</h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <code className="text-green-400">npx create-next-app@latest my-next-app</code>
                    </div>
                    <p className="text-gray-700">During setup, you will be asked several questions. Here are the recommended settings:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Would you like to use TypeScript? → Yes</li>
                        <li>Would you like to use ESLint? → Yes</li>
                        <li>Would you like to use Tailwind CSS? → Yes</li>
                        <li>Would you like to use `src/` directory? → Yes</li>
                        <li>Would you like to use App Router? → Yes</li>
                    </ul>
                </section>
                <section className="space-y-6 mt-16">
                    <h2 className="text-2xl font-semibold">2. Project Structure</h2>
                    <p> After Creation, Your project will have this basic structure:</p>
                    <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                        <pre>
                            {`src/
  app/
    page.tsx      # Home page
    layout.tsx    # Root layout
public/          # Static files
package.json     # Dependencies`}
                        </pre>
                    </div>
                </section>
                <section className="space-y-6 mt-16">
                    <h2 className="text-2xl font-semibold">3. Creating Your First Page</h2>
                    <p className="text-gray-700">Create a new file at <code className="bg-gray-100 px-2 py-1 rounded">src/app/about/page.tsx</code></p>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <pre className="text-sm">
                            {`export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        About Us
      </h1>
      <p className="mt-4">
        Welcome to our website!
      </p>
    </div>
  );
}`}
                        </pre>
                    </div>
                </section>
                <section className="space-y-6 mt-16">
                    <h2 className="text-2xl font-semibold">4. Running Your Project</h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <code className="text-green-400">npm run dev</code>
                    </div>
                    <p className="text-gray-700">Visit <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000/about</code> to see your new page!</p>
                </section>

                <div className="flex gap-4 items-center flex-col sm:flex-row mt-16 pb-10">
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/courses/course2"
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