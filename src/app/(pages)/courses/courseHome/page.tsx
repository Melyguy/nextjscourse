import Link from "next/link";

export default function courses() {
    return(
        <div className="w-screen h-screen grid grid-row gap-1 mt-32 justify-center items-center font-[family-name:var(--font-geist-mono)]">
            <h1 className="text-6xl">Courses</h1>
            
            <h1 className="text-2xl">We have a variety of courses and tasks that are meant to be easy to understand for beginners. Take a look!</h1>
            
            <div className="max-w-7xl mx-auto grid grid-cols-2 place-items-center gap-11">
                <div className="w-[30vw] h-[30vh] bg-blue-100 border-2 flex flex-col justify-center items-center border-blue-400 rounded-3xl">
                    <h1 className=" m-2"> Course 1: Create a simple page. </h1>
                    <h1 className=" m-2"> Description: This course will teach you how to create a simple page using javascript/typescript frameworks. </h1>
                    <Link
                    href="/courses/course1"
                    className="w-32 rounded-full p-1 text-white bg-blue-500">
                    Get Started!</Link>
                </div>
                <div className="w-[30vw] h-[30vh] bg-blue-100 border-2 flex flex-col justify-center items-center border-blue-400 rounded-3xl">
                    <h1 className=" m-2"> Course 2: Create a simple layout component(Header and Footer). </h1>
                    <h1 className=" m-2"> Description: This course will teach you how to create a simple layout component using javascript/typescript frameworks. </h1>
                    <Link
                    href="/courses/course2"
                    className="w-32 rounded-full p-1 text-white bg-blue-500">
                    Get Started!</Link>
                </div>
                <div className="w-[30vw] h-[30vh] bg-blue-100 border-2 flex flex-col justify-center items-center border-blue-400 rounded-3xl">
                    <h1 className=" m-2"> Course 3: Create a simple image using NextJS Image component. </h1>
                    <h1 className=" m-2"> Description: This course will teach you how to create a simple image using javascript/typescript frameworks. </h1>
                    <Link
                    href="/courses/course3"
                    className="w-32 rounded-full p-1 text-white bg-blue-500">
                    Get Started!</Link>
                </div>
                <div className="w-[30vw] h-[30vh] bg-blue-100 border-2 flex flex-col justify-center items-center border-blue-400 rounded-3xl">
                    <h1 className=" m-2"> Course 4: Create a dynamic route. </h1>
                    <h1 className=" m-2"> Description: This course will teach you how to create a dynamic routing system using javascript/typescript frameworks. </h1>
                    <Link
                    href="/courses/course4"
                    className="w-32 rounded-full p-1 text-white bg-blue-500">
                    Get Started!</Link>
                </div>
            </div>
        </div>
    );
}