"use client";
export const ShimmerButton = ({
  title,
  position,
  icon,
  otherClassName,
  onClick,
}: {
  title: string;
  position: string;
  icon: React.ReactNode;
  otherClassName?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 
      focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-3 ${otherClassName}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};