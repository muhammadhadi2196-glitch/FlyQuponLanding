import logoImage from "@assets/new fly_1756854760731.png";

interface BeeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BeeLogo({ className = "", size = "md" }: BeeLogoProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20", 
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
