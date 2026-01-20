import Link from "next/link";

export default function RegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <div className="w-full max-w-md rounded-lg bg-neutral-900 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Crear una Cuenta
        </h1>
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-red-600"
              placeholder="Tu Nombre Completo"
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
              name="email"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-red-600"
              placeholder="tu@email.com"
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
              name="password"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-red-600"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-neutral-400">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login/usuario"
            className="font-medium text-red-500 hover:underline"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}