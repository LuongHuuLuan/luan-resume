"use client"
import { useEffect } from "react";

export default function BlankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {

    const originalOverflow = document.body.style.overflowY;
    document.body.style.overflowY = 'scroll'

    return () => {
      document.body.style.overflowY = originalOverflow;
    };
  }, []);
  return children;
}
