"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Definición de tipos para las solicitudes
type ApplicationStatus = "Pendiente" | "Aprobada" | "Rechazada";

interface Application {
  id: number;
  nombre: string;
  usuarioBSU: string;
  fecha: string;
  estado: ApplicationStatus;
}

const statusColors: { [key in ApplicationStatus]: string } = {
  Pendiente: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Aprobada: "bg-green-500/20 text-green-400 border-green-500/30",
  Rechazada: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function AdminPanel() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // En una aplicación real, los datos se cargarían desde una API.
  useEffect(() => {
    // Ejemplo de cómo se haría la llamada a la API:
    // fetch('/api/applications')
    //   .then(res => res.json())
    //   .then(data => setApplications(data));
    
    // Como no tenemos API, lo dejamos vacío por ahora.
  }, []);

  const handleApprove = (id: number) => {
    setApplications(apps =>
      apps.map(app => (app.id === id ? { ...app, estado: "Aprobada" } : app))
    );
  };

  const handleReject = (id: number) => {
    setApplications(apps =>
      apps.map(app => (app.id === id ? { ...app, estado: "Rechazada" } : app))
    );
  };

  const filteredApplications = applications.filter(
    app =>
      app.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.usuarioBSU.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const pendingCount = applications.filter(a => a.estado === 'Pendiente').length;
  const approvedCount = applications.filter(a => a.estado === 'Aprobada').length;
  const rejectedCount = applications.filter(a => a.estado === 'Rechazada').length;


  return (
    <main className="min-h-screen bg-neutral-900 p-4 sm:p-6 lg:p-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/icon.jpeg"
              alt="Logo de la Empresa"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-neutral-100 sm:text-3xl">
              Panel de Administración
            </h1>
          </div>
          <p className="text-neutral-400">Bienvenido, Administrador.</p>
        </div>

        {/* Tarjetas de Resumen */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-neutral-800 p-5 shadow">
            <p className="truncate text-sm font-medium text-neutral-400">Solicitudes Pendientes</p>
            <p className="mt-1 text-3xl font-semibold text-yellow-400">{pendingCount}</p>
          </div>
          <div className="overflow-hidden rounded-lg bg-neutral-800 p-5 shadow">
            <p className="truncate text-sm font-medium text-neutral-400">Miembros Activos</p>
            <p className="mt-1 text-3xl font-semibold text-green-400">{approvedCount}</p>
          </div>
          <div className="overflow-hidden rounded-lg bg-neutral-800 p-5 shadow">
            <p className="truncate text-sm font-medium text-neutral-400">Solicitudes Rechazadas</p>
            <p className="mt-1 text-3xl font-semibold text-red-400">{rejectedCount}</p>
          </div>
        </div>

        {/* Tabla de Solicitudes */}
        <div className="rounded-lg bg-neutral-800 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Nuevas Solicitudes</h2>
            <input
              type="text"
              placeholder="Buscar por nombre o usuario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-xs rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-700">
              <thead className="bg-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Nombre</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Usuario BSU</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Fecha</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-400">Estado</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-neutral-400">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700 bg-neutral-800/50">
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-neutral-700/50 transition-colors">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">{app.nombre}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-300">{app.usuarioBSU}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-300">{app.fecha}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold border ${statusColors[app.estado]}`}>
                          {app.estado}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                        {app.estado === 'Pendiente' && (
                          <div className="flex justify-center gap-2">
                            <button onClick={() => handleApprove(app.id)} className="transform rounded-md bg-green-600 px-3 py-1 text-white transition-transform duration-200 hover:scale-105 hover:bg-green-700">
                              Aprobar
                            </button>
                            <button onClick={() => handleReject(app.id)} className="transform rounded-md bg-red-600 px-3 py-1 text-white transition-transform duration-200 hover:scale-105 hover:bg-red-700">
                              Rechazar
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-neutral-400">
                      {searchTerm
                        ? "No se encontraron solicitudes que coincidan con la búsqueda."
                        : "Actualmente no hay solicitudes para revisar."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
             {filteredApplications.length === 0 && searchTerm.length > 0 && applications.length > 0 && (
              <p className="py-8 text-center text-neutral-400">
                No se encontraron solicitudes que coincidan con la búsqueda.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}