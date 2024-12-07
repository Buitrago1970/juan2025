import Image from "next/image";
import BackButton from "./BackButton";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[90vh] border-b border-b-gray-400">
      <BackButton />
      <Image
        src="/solana_header.png"
        alt="Main Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}