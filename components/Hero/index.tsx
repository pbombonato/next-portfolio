import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <section className="w-full grid grid-cols-2 gap-2">
      <div className="py-64">
        <h1 className="text-6xl font-bold">Eu crio sites que</h1>
        <h1 className="text-6xl font-bold text-gradient">geram resultados</h1>
        <div className="pr-10">
          <p className="text-2xl font-light text-slate-700 pt-8 pr-20">
            Eu vou criar um site moderno e responsivo que vai consolidar sua
            marca e aumentar suas vendas
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/6ywrRazHvLgGW255/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
}
