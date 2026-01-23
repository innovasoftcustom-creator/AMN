"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterAdmin() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para registrar al admin y verificar el código.
    // Al finalizar, redirigir al panel de admin.
    alert("¡Registro de administrador exitoso!");
    router.push("/Panel-admin");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 p-8">
      <div className="w-full max-w-md rounded-2xl bg-neutral-800 p-8 shadow-lg">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/icon.jpeg"
            alt="Logo de la Empresa"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="mt-4 text-3xl font-bold text-white">
            Registro de Administrador
          </h1>
          <p className="text-neutral-400">
            Crea una cuenta para gestionar la plataforma.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="admin@empresa.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="Crea una contraseña segura"
              required
            />
          </div>
          <div>
            <label
              htmlFor="admin_code"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Código de Registro de Administrador
            </label>
            <input
              type="password"
              id="admin_code"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="Código Secreto de Registro"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Crear Cuenta de Administrador
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login/admin"
            className="font-medium text-red-500 hover:underline"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </main>
  );
}