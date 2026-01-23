"use client";

import Image from "next/image";
import { useState } from "react";

export default function UserPanelPage() {
  const [activeTab, setActiveTab] = useState("quienes-somos");

  return (
    <div className="min-h-screen bg-black p-4 text-white sm:p-8">
      <header className="mb-8 flex flex-col items-center text-center">
        <div className="w-full max-w-xs px-4 sm:max-w-sm">
          <Image
            src="/icon.jpeg"
            alt="Autobuses Nacionales de México"
            width={600}
            height={360}
            priority
            className="h-auto w-full"
          />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-neutral-50 sm:text-3xl md:text-4xl">
          Bienvenido a Autobuses Nacionales de México
        </h1>
      </header>

      <main className="mx-auto w-full max-w-4xl">
        {/* Pestañas de Navegación */}
        <div className="mb-6 flex justify-center border-b border-neutral-700">
          <button
            onClick={() => setActiveTab("quienes-somos")}
            className={`px-4 py-3 text-sm font-medium sm:px-6 sm:text-base ${
              activeTab === "quienes-somos"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Quiénes Somos
          </button>
          <button
            onClick={() => setActiveTab("reglas")}
            className={`px-4 py-3 text-sm font-medium sm:px-6 sm:text-base ${
              activeTab === "reglas"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Reglas a Cumplir
          </button>
          <button
            onClick={() => setActiveTab("formulario")}
            className={`px-4 py-3 text-sm font-medium sm:px-6 sm:text-base ${
              activeTab === "formulario"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Formulario de Ingreso
          </button>
        </div>

        {/* Contenido de las Pestañas */}
        <div className="rounded-lg bg-neutral-900 p-6 sm:p-8">
          {activeTab === "quienes-somos" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold">Quiénes Somos</h2>
              <p className="text-neutral-300">
                Autobuses Nacionales de México es una empresa líder en el
                transporte de pasajeros, comprometida con la seguridad,
                comodidad y puntualidad. Conectamos destinos a lo largo y ancho
                del país, "Recorriendo el país con orgullo". Nuestra moderna
                flota y personal capacitado están a tu servicio para brindarte
                la mejor experiencia de viaje.
              </p>
            </div>
          )}

          {activeTab === "reglas" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold">Reglas a Cumplir</h2>
              <ul className="list-disc space-y-2 pl-5 text-neutral-300">
                <li>
                    Pertenecer unicamente a la empresa Autobuses Nacionales de México.
                </li>
                <li>
                    Respetar a todos y cada uno de los usuarios de la empresa.
                </li>
                <li>
                    No compartir las skins de uso exclusivo de la empresa con otros usuarios.
                </li>
                <li>
                  Tener en cuenta la participacion en las rutas caso contrario podria tener como consecuencia la expulsion de la empresa 
                </li>
              </ul>
            </div>
          )}

          {activeTab === "formulario" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Formulario de Ingreso
              </h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-red-600"
                    placeholder="Nombre Completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destino"
                    className="mb-2 block text-sm font-medium text-neutral-300"
                  >
                    Usuario de Bus simulator ultimate 
                  </label>
                  <input
                    type="text"
                    id="destino"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-red-600"
                    placeholder="Ingrese su usuario"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-red-700"
                >
                  Enviar Formulario
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}