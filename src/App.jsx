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
          className="hero-hc-flag"
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl items-center justify-center px-6 py-8">
          <div className="w-full max-w-2xl rounded-3xl bg-emerald-100/30 p-8 text-center text-emerald-950 shadow-2xl md:p-12">
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
        <div className="mx-auto w-full max-w-6xl bg-white/80 p-8 rounded-2xl">
          <h2 className="text-3xl font-extrabold">Project Showcase!</h2>
          <p className="mt-4 max-w-xl font-bold text-emerald-900">
            Check out some of the amazing projects built by students!
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="overflow-hidden rounded-2xl bg-white/80 shadow-sm">
              <img src="/showcase/minecraftcompass.jpeg" className="hero-pixelart h-40 w-full object-cover" />
              <h3 className="px-4 py-3 text-sm font-semibold">Minecraft Compass - by Alex</h3>
            </article>
            <article className="overflow-hidden rounded-2xl bg-white/80 shadow-sm">
              <img src="/showcase/rocket.jpg" className="hero-pixelart h-40 w-full object-cover" />
              <h3 className="px-4 py-3 text-sm font-semibold">Model Rocket - by Lauren</h3>
            </article>
            <article className="overflow-hidden rounded-2xl bg-white/80 shadow-sm">
              <img src="/showcase/geocache.jpeg"className="hero-pixelart h-40 w-full object-cover" />
              <h3 className="px-4 py-3 text-sm font-semibold">Geocache But Better - by Jordan</h3>
            </article>
            <article className="overflow-hidden rounded-2xl bg-white/80 shadow-sm">
              <img src="/showcase/fpv.jpg" className="hero-pixelart h-40 w-full object-cover" />
              <h3 className="px-4 py-3 text-sm font-semibold">DIY FPV Drone - by Michael</h3>
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
          <ol className="relative mt-8 space-y-6">
            <li className="relative rounded-2xl bg-white/80 p-5 pl-14">
              <span className="absolute left-6 top-6 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">1</span>
              <p className="mt-1 text-base">Think of a project that would be fun to build outdoors.</p>
            </li>
            <li className="relative rounded-2xl bg-white/80 p-5 pl-14">
              <span className="absolute left-6 top-6 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">2</span>
              <p className="mt-1 text-base">Sketch your idea and gather materials. Originality matters!</p>
            </li>
            <li className="relative rounded-2xl bg-white/80 p-5 pl-14">
              <span className="absolute left-6 top-6 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">3</span>
              <p className="mt-1 text-base">Build a working prototype. Showcase your progress.</p>
            </li>
            <li className="relative rounded-2xl bg-white/80 p-5 pl-14">
              <span className="absolute left-6 top-6 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-emerald-700 text-xs font-bold text-white">4</span>
              <p className="mt-1 text-base">Test it outside and share your project. Win Prizes!</p>
            </li>
          </ol>
          <br /><br />
          <h2 className="text-3xl font-extrabold">Win Prizes You Said?</h2>
          <p className="mt-4 max-w-xl font-bold text-emerald-900">YES! We have three prize categories.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <section className="flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm">
              <div className="flex aspect-video items-center justify-center bg-emerald-50 p-4">
                <img
                  src="/prizes/noob.png"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-emerald-950">Explorer</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                  For the project that best captures the spirit of outdoor exploration and creativity!
                </p>
              </div>
            </section>

            <section className="flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm">
              <div className="flex aspect-video items-center justify-center bg-emerald-50 p-4">
                <img
                  src="/prizes/pro.png"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-emerald-950">Creator</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                  Your project is super creative and unique! We want to see it in action!
                </p>
              </div>
            </section>

            <section className="flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm">
              <div className="flex aspect-video items-center justify-center bg-emerald-50">
                <img
                  src="/prizes/hacker.png"
                  className="max-h-full max-w-full object-contain"
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
      </section>

      <section className="bg-[#1F3025] px-6 py-14 text-emerald-950">
        <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/85 p-8">
          <h2 className="text-3xl font-extrabold">FAQ</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-xl border border-emerald-900/10 bg-white p-4">
              <h3 className="text-base font-bold">Who can join?</h3>
              <p className="mt-2 text-sm text-emerald-900">Any student under the age of 19 that is interested in building outdoors!</p>
            </article>

            <article className="rounded-xl border border-emerald-900/10 bg-white p-4">
              <h3 className="text-base font-bold">Is my project eligible?</h3>
              <p className="mt-2 text-sm text-emerald-900">Yes. As long as it's an outdoor-focused project, it's eligible!</p>
            </article>

            <article className="rounded-xl border border-emerald-900/10 bg-white p-4">
              <h3 className="text-base font-bold">What should I submit?</h3>
              <p className="mt-2 text-sm text-emerald-900">Share photos or a demo video plus a short writeup explaining what you built, devlog more often to enjoy better prize chances!</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
