'use client';

import Script from 'next/script';

export default function ReunionesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Agenda una reunión con DataConSentido
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-7">
          Selecciona el día y la hora que mejor te convengan para conversar sobre
          protección de datos personales, cumplimiento normativo y soluciones
          aplicadas para tu organización.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-3 md:p-5">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/contacto-dataconsentido/new-meeting"
          style={{ minWidth: '320px', height: '850px' }}
        />
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </main>
  );
}