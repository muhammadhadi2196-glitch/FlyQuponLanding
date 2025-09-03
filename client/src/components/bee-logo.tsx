import logoImage from "@assets/new fly_1756873727296.png";

interface BeeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BeeLogo({ className = "", size = "md" }: BeeLogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <img 
        src={logoImage}
        alt="FlyQupon Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
