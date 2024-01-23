import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-ful h-screen max-w-7xl mx-auto px-4 flex justify-center items-center">
      {children}
    </div>
  );
}
