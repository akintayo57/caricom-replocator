export default function LoadingIsland({ message = 'Finding your representatives...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="animate-pulse-island">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="60" rx="30" ry="6" fill="#bcdaff" opacity="0.5" />
          <path
            d="M15 50 C18 35, 25 28, 32 30 C35 20, 42 18, 48 22 C52 16, 62 18, 65 28 C70 30, 72 38, 68 45 C72 48, 70 52, 65 50 L15 50Z"
            fill="#22c55e"
          />
          <path
            d="M35 50 L37 38 L40 42 L43 36 L45 50Z"
            fill="#15803d"
          />
          <circle cx="55" cy="15" r="8" fill="#facc15" opacity="0.8" />
        </svg>
      </div>
      <p className="text-ocean-600 font-medium text-sm">{message}</p>
    </div>
  );
}
