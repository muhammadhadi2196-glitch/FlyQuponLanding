interface BeeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BeeLogo({ className = "", size = "md" }: BeeLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        aria-label="FlyQupon Bee Logo"
      >
        {/* Bee body */}
        <ellipse cx="50" cy="60" rx="20" ry="25" fill="#F59E0B" />
        
        {/* Bee stripes */}
        <rect x="32" y="50" width="36" height="4" fill="#374151" />
        <rect x="32" y="58" width="36" height="4" fill="#374151" />
        <rect x="32" y="66" width="36" height="4" fill="#374151" />
        
        {/* Bee head */}
        <circle cx="50" cy="35" r="15" fill="#F59E0B" />
        
        {/* Eyes */}
        <circle cx="45" cy="32" r="2" fill="#374151" />
        <circle cx="55" cy="32" r="2" fill="#374151" />
        
        {/* Smile */}
        <path d="M 45 38 Q 50 42 55 38" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Wings */}
        <ellipse cx="35" cy="45" rx="12" ry="8" fill="#E5E7EB" opacity="0.8" transform="rotate(-20 35 45)" />
        <ellipse cx="65" cy="45" rx="12" ry="8" fill="#E5E7EB" opacity="0.8" transform="rotate(20 65 45)" />
        
        {/* Antennae */}
        <line x1="45" y1="25" x2="42" y2="18" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        <line x1="55" y1="25" x2="58" y2="18" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="18" r="1.5" fill="#374151" />
        <circle cx="58" cy="18" r="1.5" fill="#374151" />
        
        {/* SAVE banner */}
        <rect x="70" y="45" width="25" height="12" fill="#16A34A" rx="2" />
        <text x="82.5" y="53" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SAVE</text>
      </svg>
    </div>
  );
}
