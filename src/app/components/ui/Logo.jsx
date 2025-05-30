import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" height={42} width={100} alt="Logo" />
    </Link>
  );
};

export default Logo;
