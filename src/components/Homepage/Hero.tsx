import React from 'react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-0 py-4 md:py-8 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-7xl px-4">
            <div className="lg:grid lg:grid-cols-12">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:max-w-3xl lg:text-left">
                <h1>
                  <span className="block text-base uppercase tracking-wide sm:text-xl xl:text-3xl ">
                    Мэдлэгийн сан буюу
                  </span>
                  <span className=" block text-4xl font-bold sm:text-5xl xl:text-6xl">
                    Octagon DOCS v2.0
                  </span>
                </h1>
                <p className="pt-1 text-base sm:pt-3 sm:text-xl lg:text-lg xl:text-xl">
                  Октагон маркетплейс болон бидний гаргаж байгаа бүтээгдэхүүн
                  үйлчилгээний тухай мэдээлэл, заавар зөвлөгөөг агуулав.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
