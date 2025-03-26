
import Image from "next/image";

export default function Course4() {
    return (
        <div className="w-screen h-full">
            <div className="flex flex-col items-center mt-16 h-full">
                <h1 className="text-6xl font-bold">Course 4: Dynamic Routing in Next.js</h1>
                <p className="text-3xl mt-12">Learn how to create dynamic routes and handle dynamic parameters</p>

                <div className="flex mt-16">
                    <div className="flex flex-col">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold">1. Creating Dynamic Routes</h2>
                            <p className="text-gray-700">Create a folder structure for dynamic routes:</p>
                            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                                <pre>
                                    {`app/
  blog/
    [slug]/     # Dynamic segment
      page.tsx  # Page for individual blog posts
    page.tsx    # Main blog listing page`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">2. Creating a Dynamic Page</h2>
                            <p className="text-gray-700">Create <code className="bg-gray-100 px-2 py-1 rounded">app/blog/[slug]/page.tsx</code>:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`export default function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold">
        Post: {params.slug}
      </h1>
    </article>
  )
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">3. Generating Static Params</h2>
                            <p className="text-gray-700">Add static generation for dynamic routes:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`// In app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// This will generate:
// /blog/post-1
// /blog/post-2
// etc...`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">4. Multiple Dynamic Segments</h2>
                            <p className="text-gray-700">Creating nested dynamic routes:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`app/
  shop/
    [category]/
      [product]/
        page.tsx

// In page.tsx
export default function Product({
  params,
}: {
  params: { category: string; product: string }
}) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>Product: {params.product}</h2>
    </div>
  )
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="space-y-6 mt-16">
                            <h2 className="text-2xl font-semibold">5. Catch-all Segments</h2>
                            <p className="text-gray-700">Handle multiple dynamic segments with [...slug]:</p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm">
                                    {`app/
  docs/
    [...slug]/
      page.tsx

export default function Docs({
  params,
}: {
  params: { slug: string[] }
}) {
  // URL: /docs/features/routing/dynamic
  // params.slug: ['features', 'routing', 'dynamic']
  return (
    <div>
      <h1>Documentation</h1>
      <p>Current path: {params.slug.join('/')}</p>
    </div>
  )
}`}
                                </pre>
                            </div>
                        </section>

                        <div className="flex gap-4 items-center flex-col sm:flex-row mt-16 pb-10">
                            <a
                                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                                href="/courses/courseHome"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="dark:invert"
                                    src="/vercel.svg"
                                    alt="Vercel logomark"
                                    width={20}
                                    height={20}
                                />
                                Back to Courses
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}