import { useEffect, useState } from "react";

export function IntroPreloader() {
  const [progress, setProgress] = useState(0);
  const [isSwipingUp, setIsSwipingUp] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 70 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    // Trigger sudden, dramatic swipe up once loading sequence finishes
    const swipeTimer = setTimeout(() => {
      setIsSwipingUp(true);
    }, 1850);

    // Completely unmount/disable after swipe-up transition finishes
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(swipeTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0d0c0b] text-stone-100 select-none overflow-hidden transition-transform duration-[850ms] ease-[cubic-bezier(0.82,0,0.18,1)] ${
        isSwipingUp ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Background warm radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 130, 70, 0.25) 0%, rgba(180, 95, 40, 0.1) 35%, rgba(13, 12, 11, 0.98) 75%)",
        }}
      />

      {/* Floating subtle ambient bokeh lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[30%] left-[35%] w-72 h-72 rounded-full bg-amber-600/15 blur-3xl animate-pulse" />
        <div className="absolute top-[40%] right-[35%] w-80 h-80 rounded-full bg-copper/20 blur-3xl" />
      </div>

      {/* Main Typography Centerpiece with Logo Emblem */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Emblem Logo */}
        <div className="mb-4 sm:mb-6 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white p-2 shadow-[0_0_30px_rgba(212,130,70,0.4)] ring-2 ring-copper/40 flex items-center justify-center overflow-hidden">
          <img
            src="/logo.png"
            alt="Rudhra Homoeopathy Clinic Emblem"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Massive, Grand Brand Title */}
        <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.24em] text-white uppercase leading-none drop-shadow-[0_0_40px_rgba(212,130,70,0.35)]">
          RUDHRA
        </h1>

        {/* Sub-Title */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-xl md:text-2xl font-extrabold tracking-[0.28em] text-copper uppercase">
          HOMOEOPATHY CLINIC
        </p>

        {/* Tagline */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-base md:text-lg text-stone-300 tracking-wider font-medium">
          Gentle Healing. Naturally · Shadnagar
        </p>

        {/* Laser Loading Progress Bar */}
        <div className="mt-8 sm:mt-12 w-60 sm:w-80 md:w-96">
          <div className="relative h-[2.5px] w-full rounded-full bg-stone-800/80 overflow-visible">
            {/* Progress Fill */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-copper via-amber-400 to-amber-200 transition-all duration-150 ease-out shadow-[0_0_14px_rgba(245,158,11,0.9)]"
              style={{ width: `${progress}%` }}
            />

            {/* Glowing comet head at the leading edge */}
            {progress > 0 && progress < 100 && (
              <div
                className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 -ml-1 rounded-full bg-white shadow-[0_0_10px_#fbbf24,0_0_18px_#ea580c] transition-all duration-150 ease-out"
                style={{ left: `${progress}%` }}
              />
            )}
          </div>

          {/* Status Indicators below line */}
          <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs font-mono tracking-widest text-stone-400 uppercase">
            <span className="text-copper/90 font-semibold">\ PREPARING CARE</span>
            <span className="text-stone-200 font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
