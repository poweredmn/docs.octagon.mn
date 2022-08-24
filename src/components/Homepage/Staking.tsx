import React from 'react';
import Link from '@docusaurus/Link';

export default function Staking() {
  return (
    <section className="relative my-8 md:my-12">
      <div className="relative max-w-xl mx-auto px-8 md:max-w-5xl ">
        <div className="relative sm:grid md:grid-cols-2 lg:gap-8 lg:items-center bg-slate-500/10 hover:bg-slate-500/20 rounded-3xl px-8 py-8 md:py-12 group transition-all duration-300">
          <div
            className="mb-4 md:mb-0 relative lg:mt-0 items-center"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto my-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] group-hover:animate-pulse"
              src="/img/staking.jpg"
              alt=""
            />
          </div>

          <div className="relative">
            <h3 className="text-center md:text-left text-3xl md:text-5xl uppercase pb-4">
              ARBC Staking
            </h3>
            <p className="mt-6 text-center md:text-left text-base sm:text-xl lg:text-lg xl:text-xl">
              Зөвхөн Legendary болон Titan цуглуулагчид өөрийн NFT-үүдээ Stake
              хийснээр, маркетплейсийн ашгаас 20, 30 хүртэлх хувийн ашиг хүртэл
              боломжтой юм.
            </p>
            <p className="pt-2 text-center md:text-left text-base sm:text-xl lg:text-lg xl:text-xl font-bold">
              Одоогийн байдлаар *** хэрэглэгч stake хийж байна..
            </p>
            <p className="opacity-50 text-center md:text-left text-sm font-bold">
              2022 оны 08 сарын 23-ны өдрийн байдлаар.
            </p>
            <div className="block pt-8 pb-4 md:pb-0 text-center md:text-left">
              <Link to="/Staking">
                <span className="inline-block px-6 py-3 rounded-full bg-pink-500 hover:bg-white hover:shadow-lg hover:shadow-pink-500 text-base font-medium text-white hover:text-pink-500 transition-all duration-300 hover:-translate-y-1">
                  Дэлгэрэнгүй мэдээлэл
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
