export default function LightBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none">

      <svg
        className="absolute left-[40%] top-[25%] w-100 animate-pulseLight"
        viewBox="0 0 200 200"
      >
        <path
          d="M100 30
           A50 50 0 0 1 150 80
           C150 110 120 120 120 140
           H80
           C80 120 50 110 50 80
           A50 50 0 0 1 100 30Z"
          fill="currentColor"
        />
      </svg>

    </div>
  );
}