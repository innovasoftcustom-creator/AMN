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
            className={`transform px-4 py-3 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
              activeTab === "quienes-somos"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:scale-105 hover:text-white"
            }`}
          >
            Quiénes Somos
          </button>
          <button
            onClick={() => setActiveTab("reglas")}
            className={`transform px-4 py-3 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
              activeTab === "reglas"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:scale-105 hover:text-white"
            }`}
          >
            Reglas a Cumplir
          </button>
          <button
            onClick={() => setActiveTab("formulario")}
            className={`transform px-4 py-3 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
              activeTab === "formulario"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:scale-105 hover:text-white"
            }`}
          >
            Formulario de Ingreso
          </button>
        </div>

        {/* Contenido de las Pestañas */}
        <div className="rounded-lg bg-neutral-900 p-6 sm:p-8">
          {activeTab === "quienes-somos" && (
            <div className="animation-fade-in">
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
            <div className="animation-fade-in">
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
            <div className="animation-fade-in">
              <h2 className="mb-6 text-2xl font-bold">
                Formulario de Ingreso
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Columna del Formulario */}
                <form className="flex flex-col gap-6 lg:col-span-2">
                  {/* Nombre y Usuario */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                        className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        placeholder="Nombre Completo"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="usuario_bsu"
                        className="mb-2 block text-sm font-medium text-neutral-300"
                      >
                        Usuario de Bus Simulator Ultimate
                      </label>
                      <input
                        type="text"
                        id="usuario_bsu"
                        className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        placeholder="Ingrese su usuario"
                      />
                    </div>
                  </div>

                  {/* Edad */}
                  <div>
                    <label
                      htmlFor="edad"
                      className="mb-2 block text-sm font-medium text-neutral-300"
                    >
                      ¿Cuántos años tiene?
                    </label>
                    <input
                      type="number"
                      id="edad"
                      className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="Su edad"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="mb-2 block text-sm font-medium text-neutral-300"
                    >
                      Número de Teléfono
                    </label>
                    <div className="flex">
                      <select
                        id="codigo_pais"
                        name="codigo_pais"
                        className="rounded-l-lg border border-r-0 border-neutral-700 bg-neutral-800 px-3 text-white focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      >
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+57">🇨🇴 +57</option>
                        <option value="+54">🇦🇷 +54</option>
                        <option value="+51">🇵🇪 +51</option>
                        <option value="+56">🇨🇱 +56</option>
                        <option value="+593">🇪🇨 +593</option>
                      </select>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className="w-full rounded-r-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        placeholder="Su número de teléfono"
                      />
                    </div>
                  </div>

                  {/* Nivel de Juego */}
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-neutral-300">
                      ¿Qué nivel consideras que tienes en el juego?
                    </legend>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <input id="principiante" name="nivel" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="principiante" className="ml-2 text-sm font-medium text-neutral-300">Principiante</label>
                      </div>
                      <div className="flex items-center">
                        <input id="intermedio" name="nivel" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="intermedio" className="ml-2 text-sm font-medium text-neutral-300">Intermedio</label>
                      </div>
                      <div className="flex items-center">
                        <input id="avanzado" name="nivel" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="avanzado" className="ml-2 text-sm font-medium text-neutral-300">Avanzado</label>
                      </div>
                    </div>
                  </fieldset>

                  {/* Pertenece a empresa */}
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-neutral-300">
                      ¿Pertenece actualmente a alguna empresa de Bus Simulator Ultimate?
                    </legend>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input id="empresa_si" name="empresa_actual" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="empresa_si" className="ml-2 text-sm font-medium text-neutral-300">Sí</label>
                      </div>
                      <div className="flex items-center">
                        <input id="empresa_no" name="empresa_actual" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="empresa_no" className="ml-2 text-sm font-medium text-neutral-300">No</label>
                      </div>
                    </div>
                  </fieldset>

                  {/* Perteneció a empresa anteriormente */}
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-neutral-300">
                      ¿Ha pertenecido anteriormente a alguna otra empresa de Bus Simulator Ultimate?
                    </legend>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input id="anterior_si" name="empresa_anterior" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="anterior_si" className="ml-2 text-sm font-medium text-neutral-300">Sí</label>
                      </div>
                      <div className="flex items-center">
                        <input id="anterior_no" name="empresa_anterior" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="anterior_no" className="ml-2 text-sm font-medium text-neutral-300">No</label>
                      </div>
                    </div>
                  </fieldset>

                  {/* Interés en unirse */}
                  <div>
                    <label
                      htmlFor="interes"
                      className="mb-2 block text-sm font-medium text-neutral-300"
                    >
                      ¿Por qué le interesa unirse a nuestra empresa?
                    </label>
                    <textarea
                      id="interes"
                      name="interes"
                      rows={4}
                      className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-colors duration-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      placeholder="Escriba aquí sus motivos..."
                    ></textarea>
                  </div>

                  {/* Acepta Reglas */}
                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-neutral-300">
                      ¿Acepta las reglas que tenemos en nuestra empresa?
                    </legend>
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input id="reglas_si" name="acepta_reglas" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="reglas_si" className="ml-2 text-sm font-medium text-neutral-300">Sí</label>
                      </div>
                      <div className="flex items-center">
                        <input id="reglas_no" name="acepta_reglas" type="radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500" />
                        <label htmlFor="reglas_no" className="ml-2 text-sm font-medium text-neutral-300">No</label>
                      </div>
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="mt-4 transform rounded-lg bg-red-600 px-8 py-3 font-semibold text-white no-underline transition-all duration-300 hover:scale-105 hover:bg-red-700"
                  >
                    Enviar Formulario
                  </button>
                </form>

                {/* Columna del Aviso */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 rounded-lg bg-neutral-800 p-6">
                    <h3 className="mb-3 flex items-center text-lg font-semibold text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2">Aviso Importante</span>
                    </h3>
                    <p className="text-sm text-neutral-300">
                      Le recordamos estar atento a la página para confirmar su ingreso o su rechazo en la empresa. En caso de ser aceptado, el número telefónico será ingresado en un grupo donde se realizarán los últimos ajustes para su ingreso.
                    </p>
                    <p className="mt-3 text-sm text-neutral-300">
                      Rogamos paciencia, debido a que los Administradores no pueden revisar en todo momento la página. ¡Gracias! :D
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}