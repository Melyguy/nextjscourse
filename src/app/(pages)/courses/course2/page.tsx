
import Image from "next/image";

export default function Course2() {
    return (
        <div className="w-screen h-full">
            <div className="flex flex-col items-center mt-16 h-full">
                <h1 className="text-6xl font-bold">Course 2: Creating Layout Components in Next.js 15</h1>
                <p className="text-3xl mt-12">Learn how to create reusable layout components with header and footer</p>

                <div className="flex mt-16">
                    <div className="flex flex-col">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold">1. Creating the Layout Structure</h2>
                            <p className="text-gray-700">Create a new folder and files in your project:</p>
                            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                                <pre>
                                    {`src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      Layout.tsx`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">2. Creating the Header Component</h2>
                            <p className="text-gray-700">Create a basic header in <code className="bg-gray-100 px-2 py-1 rounded">src/components/layout/Header.tsx</code></p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
          <div className="space-x-4">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">3. Creating the Footer Component</h2>
                            <p className="text-gray-700">Create a footer in <code className="bg-gray-100 px-2 py-1 rounded">src/components/layout/Footer.tsx</code></p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>© 2024 Your Company</p>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-blue-600">Privacy</a>
            <a href="/terms" className="hover:text-blue-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">4. Creating the Layout Component</h2>
                            <p className="text-gray-700">Combine Header and Footer in <code className="bg-gray-100 px-2 py-1 rounded">src/components/layout/Layout.tsx</code></p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">5. Using the Layout</h2>
                            <p className="text-gray-700">In your <code className="bg-gray-100 px-2 py-1 rounded">src/app/layout.tsx</code></p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`import Layout from '@/components/layout/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}`}
                                </pre>
                            </div>
                        </section>

                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-16 pb-10">
                            <a
                                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                                href="/courses/course3"
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