import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <main className="flex flex-col items-center justify-center text-center">
        <Image
          src="/icon.jpeg"
          alt="Autobuses Nacionales de México"
          width={500}
          height={300}
          priority
        />
        <h1 className="mt-8 text-4xl font-bold text-neutral-50">
          Bienvenido a la web oficial de Autobuses Nacionales de México
        </h1>
        <div className="mt-12 flex gap-6">
          <a
            href="/login/user"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black no-underline transition-colors hover:bg-gray-200"
          >
            Entrar como Usuario
          </a>
          <a
            href="/login/admin"
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-red-700"
          >
            Entrar como Administrador
          </a>
        </div>
      </main>
    </div>
  );
}
