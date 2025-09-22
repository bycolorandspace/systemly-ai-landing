import { useState } from "react";
import CTAButton from "./common/cta-button";

export default function MoneyBurstButton({ action }: { action: () => void }) {
  const [clickCount, setClickCount] = useState(0);
  const onClick = () => {
    setClickCount(clickCount + 1);
    action();
  };
  return (
    <div className="relative">
      <CTAButton
        label="Money burst 🤑"
        action={onClick}
        color="default"
        customClass="text-white"
      />
      <div className="absolute -top-2 -right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold flex w-5 h-5  items-center justify-center">
          {clickCount}
        </span>
      </div>

      <div className="mt-2 text-xs text-center text-secondary">
        Success simulator - ${clickCount * 100} earned
      </div>
    </div>
  );
}
