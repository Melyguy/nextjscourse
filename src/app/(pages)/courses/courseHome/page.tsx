import Link from "next/link";

export default function courses() {
    return(
        <div className="container mx-auto px-4 py-16 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Courses
                </h1>
                <p className="text-2xl mt-6 text-gray-600 max-w-3xl mx-auto">
                    We have a variety of courses and tasks that are meant to be easy to understand for beginners. Take a look!
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <h2 className="text-xl font-bold text-blue-800 mb-3">Course 1: Create a simple page</h2>
                    <p className="text-gray-600 mb-6">
                        This course will teach you how to create a simple page using javascript/typescript frameworks.
                    </p>
                    <Link
                        href="/courses/course1"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300">
                        Get Started!
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <h2 className="text-xl font-bold text-blue-800 mb-3">Course 2: Create a simple layout component</h2>
                    <p className="text-gray-600 mb-6">
                        This course will teach you how to create a simple layout component using javascript/typescript frameworks.
                    </p>
                    <Link
                        href="/courses/course2"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300">
                        Get Started!
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <h2 className="text-xl font-bold text-blue-800 mb-3">Course 3: NextJS Image Component</h2>
                    <p className="text-gray-600 mb-6">
                        This course will teach you how to create a simple image using javascript/typescript frameworks.
                    </p>
                    <Link
                        href="/courses/course3"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300">
                        Get Started!
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <h2 className="text-xl font-bold text-blue-800 mb-3">Course 4: Dynamic Routing</h2>
                    <p className="text-gray-600 mb-6">
                        This course will teach you how to create a dynamic routing system using javascript/typescript frameworks.
                    </p>
                    <Link
                        href="/courses/course4"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300">
                        Get Started!
                    </Link>
                </div>
            </div>
        </div>
    );
}