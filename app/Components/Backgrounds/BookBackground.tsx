export default function BookBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none">

      <svg
        className="absolute -left-25 top-[20%] w-175 animate-driftSlow"
        viewBox="0 0 500 500"
      >
        <path
          d="M50 250 Q150 200 250 250 Q350 200 450 250 L450 320 Q350 270 250 320 Q150 270 50 320 Z"
          fill="currentColor"
        />
      </svg>

    </div>
  );
}