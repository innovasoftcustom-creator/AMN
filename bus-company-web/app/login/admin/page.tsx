"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginAdmin() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación.
    // Por ahora, solo redirigimos al panel de admin.
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
            Acceso de Administrador
          </h1>
          <p className="text-neutral-400">
            Bienvenido de nuevo.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
              placeholder="••••••••"
              required
            />
          </div>
           <div>
            <label
              htmlFor="admin_code"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Código de Administrador
            </label>
            <input
              type="password"
              id="admin_code"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              placeholder="Código Secreto"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          ¿No tienes una cuenta de administrador?{" "}
          <Link
            href="/Registro/admin"
            className="font-medium text-red-500 hover:underline"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </main>
  );
}