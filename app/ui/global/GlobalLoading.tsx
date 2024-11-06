function GlobalLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 14 14"
        className="animate-spin"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="7" cy="7" r="6.5" />
          <path d="m10 4.5l-3 5m-6 0h12" />
        </g>
      </svg>
    </div>
  );
}

export default GlobalLoading;
