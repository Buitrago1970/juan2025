import Image from "next/image";

export default function ProjectGallery() {
  return (
    <div className="space-y-20">
      {[1, 2].map((_, index) => (
        <div key={index} className="pt-20">
          <div>
            <Image
              src="/solana_header.png"
              alt="Main Image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <p>COSAS DE ECO ECO</p>
        </div>
      ))}
    </div>
  );
}