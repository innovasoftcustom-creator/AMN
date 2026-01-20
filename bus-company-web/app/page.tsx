import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <div className="w-full max-w-md px-4 sm:max-w-lg md:max-w-xl">
          <Image
            src="/icon.jpeg"
            alt="Autobuses Nacionales de México"
            width={800}
            height={480}
            priority
            className="h-auto w-full"
          />
        </div>
        <h1 className="mt-8 text-3xl font-bold text-neutral-50 sm:text-4xl md:text-5xl">
          Bienvenido a la web oficial de Autobuses Nacionales de México
        </h1>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="/login"
            className="transform rounded-lg bg-white px-8 py-3 font-semibold text-black no-underline transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            Entrar como Usuario
          </a>
          <a
            href="/login/admin"
            className="transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Entrar como Administrador
          </a>
        </div>
      </main>
    </div>
  );
}
