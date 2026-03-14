export default function BrainBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none">

      <svg
        className="absolute -right-37.5 top-[30%] w-162.5 animate-driftSlowReverse"
        viewBox="0 0 500 500"
      >
        <path
          d="M250 120
           C180 120 140 170 140 210
           C100 230 100 290 150 310
           C160 350 200 370 240 360
           C260 380 310 380 330 350
           C380 350 410 310 390 260
           C420 210 390 170 350 170
           C340 130 300 110 250 120Z"
          fill="currentColor"
        />
      </svg>

    </div>
  );
}