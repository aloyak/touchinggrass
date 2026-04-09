export default function App() {
  return (
    <main className="min-h-screen">
      <section
        id="hero-section"
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <img
          src="/hero/1.png"
          alt=""
          aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
        <img
          src="/hero/2.png"
          alt=""
          aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute inset-0 z-[5] h-full w-full object-cover"
        />

        <img
          src="https://assets.hackclub.com/flag-orpheus-left.svg"
          alt="Hack Club flag"
          className="hero-hc-flag transition-transform duration-300 hover:scale-105 hover:rotate-2"
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl items-center justify-center px-6 py-8">
          <div className="w-full max-w-2xl rounded-3xl bg-emerald-100/30 p-8 text-center text-emerald-950 shadow-2xl backdrop-blur-sm md:p-12">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Touching Grass</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg font-bold text-emerald-900 sm:text-xl">
              Build something meant to be used outdoors!
            </p>
            <p className="mx-auto mt-4 max-w-xl text-md text-emerald-900 sm:text-xl">
              Jun 15 2026 - Jul 15 2026**
            </p>
          </div>
        </div>

        <img
          src="/hero/3.png"
          alt=""
          aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute inset-0 z-[15] h-full w-full object-cover"
        />
        <img
          src="/hero/4.png"
          alt=""
          aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute inset-0 z-[18] h-full w-full object-cover"
        />

        <img
          src="/dino_grass.png"
          alt="Dino in the grass"
          className="hero-pixelart pointer-events-none absolute bottom-0 left-1/2 z-20 h-auto w-[min(70vw,520px)] -translate-x-1/2 translate-y-[18%] object-contain"
        />

        <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-r from-slate-950/40 via-slate-900/20 to-transparent" />
      </section>

      <section className="bg-[#1F3025] px-6 py-14 text-emerald-950">
        <div className="mx-auto w-full max-w-6xl rounded-2xl bg-white/80 p-8">
          <h2 className="text-3xl font-extrabold">Project Showcase!</h2>
          <p className="mt-4 max-w-xl font-bold text-emerald-900">
            Check out some of the amazing projects built by students!
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden">
                <img src="/showcase/minecraftcompass.jpeg" className="hero-pixelart h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="px-4 py-3 text-sm font-semibold">Minecraft Compass <span className="font-normal text-emerald-700">- by Alex</span></h3>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden">
                <img src="/showcase/rocket.jpg" className="hero-pixelart h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="px-4 py-3 text-sm font-semibold">Model Rocket <span className="font-normal text-emerald-700">- by Lauren</span></h3>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden">
                <img src="/showcase/geocache.jpeg" className="hero-pixelart h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="px-4 py-3 text-sm font-semibold">Geocache But Better <span className="font-normal text-emerald-700">- by Jordan</span></h3>
            </article>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden">
                <img src="/showcase/fpv.jpg" className="hero-pixelart h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="px-4 py-3 text-sm font-semibold">DIY FPV Drone <span className="font-normal text-emerald-700">- by Michael</span></h3>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#92AC53] text-emerald-950">
        <img
          src="/roadmap/1.png"
          alt=""
          aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
        <img
          src="/roadmap/2.png"
          alt=""
          aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover"
        />
        <img
            src="/roadmap/3.png"
            alt=""
            aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-auto w-full object-contain object-bottom"
        />
        <img
            src="/roadmap/4.png"
            alt=""
            aria-hidden="true"
          className="hero-pixelart pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-auto w-full object-contain object-bottom"
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-extrabold">How It Works</h2>
          <ol className="relative ml-4 mt-8 space-y-6">
            <li className="relative rounded-2xl bg-white/90 p-5 shadow-sm">
              <span className="absolute -left-[41px] top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">1</span>
              <p className="text-base font-medium">Think of a project that would be fun to build outdoors.</p>
            </li>
            <li className="relative rounded-2xl bg-white/90 p-5 shadow-sm">
              <span className="absolute -left-[41px] top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">2</span>
              <p className="text-base font-medium">Sketch your idea and gather materials. Originality matters!</p>
            </li>
            <li className="relative rounded-2xl bg-white/90 p-5 shadow-sm">
              <span className="absolute -left-[41px] top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">3</span>
              <p className="text-base font-medium">Build a working prototype. Showcase your progress.</p>
            </li>
            <li className="relative rounded-2xl bg-white/90 p-5 shadow-sm">
              <span className="absolute -left-[41px] top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">4</span>
              <p className="text-base font-medium">Test it outside and share your project. Win Prizes!</p>
            </li>
          </ol>
          
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold">Win Prizes You Said?</h2>
            <p className="mt-4 max-w-xl font-bold text-emerald-900">YES! We have three prize categories.</p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <section className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex aspect-video items-center justify-center bg-emerald-50/80 p-4 transition-colors group-hover:bg-emerald-100/80">
                  <img
                    src="/prizes/noob.png"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-emerald-950">Explorer</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                    For the project that best captures the spirit of outdoor exploration and creativity!
                  </p>
                </div>
              </section>

              <section className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex aspect-video items-center justify-center bg-emerald-50/80 p-4 transition-colors group-hover:bg-emerald-100/80">
                  <img
                    src="/prizes/pro.png"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-emerald-950">Creator</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                    Your project is super creative and unique! We want to see it in action!
                  </p>
                </div>
              </section>

              <section className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex aspect-video items-center justify-center bg-emerald-50/80 p-4 transition-colors group-hover:bg-emerald-100/80">
                  <img
                    src="/prizes/hacker.png"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-emerald-950">Legend</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                    You cooked up something so wild and amazing! This is for you!
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1F3025] px-6 py-14 text-emerald-950">
        <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/90 p-8 shadow-sm">
          <h2 className="text-3xl font-extrabold">FAQ</h2>

          <div className="mt-6 space-y-4">
            <details className="group rounded-xl border border-emerald-900/10 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold outline-none">
                Who can join?
                <span className="transition duration-300 group-open:-rotate-180 text-emerald-700">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900">Any student under the age of 19 that is interested in building outdoors!</p>
            </details>

            <details className="group rounded-xl border border-emerald-900/10 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold outline-none">
                Is my project eligible?
                <span className="transition duration-300 group-open:-rotate-180 text-emerald-700">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900">Yes. As long as it's an outdoor-focused project, it's eligible!</p>
            </details>

            <details className="group rounded-xl border border-emerald-900/10 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold outline-none">
                What should I submit?
                <span className="transition duration-300 group-open:-rotate-180 text-emerald-700">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900">Share photos or a demo video plus a short writeup explaining what you built, devlog more often to enjoy better prize chances!</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
}
