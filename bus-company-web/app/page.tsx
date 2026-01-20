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
        <h1 className="mt-8 text-4xl font-bold">
          Bienvenido a la web oficial de Autobuses Nacionales de México
        </h1>
      </main>
    </div>
  );
}
