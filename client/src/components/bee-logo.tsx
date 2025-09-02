import logoImage from "@assets/flyqupon logo_1756854300336.jpg";

interface BeeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BeeLogo({ className = "", size = "md" }: BeeLogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16", 
    lg: "w-20 h-20"
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
