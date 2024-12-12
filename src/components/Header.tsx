import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <Logo className="h-20v z-10 cursor-pointer text-sky-800" />
    </header>
  );
}
