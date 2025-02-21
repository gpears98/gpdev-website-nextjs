import Image from "next/image";
export default function Home() {
  return (
    <div className="relative">
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-transparent text-white px-6">
        <h1 className="text-5xl text-black font-bold">Hey lol</h1>
        <p className="text-lg text-black mt-4">
            Want a website or something?
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-900 text-white rounded-lg text-lg hover:bg-purple-700">
            Get Started
        </button>
      </section>
    </div>
  );
}
