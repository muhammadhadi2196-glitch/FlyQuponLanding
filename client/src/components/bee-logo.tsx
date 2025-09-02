import logoImage from "@assets/ChatGPT Image Sep 2, 2025, 01_41_43 PM_1756845219674.png";

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
      <img 
        src={logoImage}
        alt="FlyQupon Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
