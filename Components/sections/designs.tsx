import Image from "next/image";
import Section from "../section";
import Link from "next/link";

function DesignsSection() {
  return (
    <Section classNameWrapper="-m-5" className="relative">
      <div className="w-full overflow-hidden group">
        <div className="absolute h-full w-full p-3 z-10 bg-gradient-to-b from-white/70 via-white/90 to-white">
          <Link
            href={"/design"}
            className="w-full h-full flex justify-center items-center font-black text-2xl md:text-4xl"
          >
            <div className="inline-flex items-center justify-center gap-1 p-4 group-hover:scale-102 duration-700">
              <span className="group-hover:rotate-90 duration-700 ">✶</span>{" "}
              check my designs
            </div>
          </Link>
        </div>
        <div className="aspect-3/1 md:aspect-4/1 w-full overflow-hidden py-2 group-hover:blur duration-700">
          <Image
            alt="Gallery Section Screenshot"
            loading="lazy"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable="false"
            src={"/assets/gallery.png"}
            className="w-full object-cover px-2 transition-all duration-700 group-hover:translate-y-[-20%] "
          />
        </div>
      </div>
    </Section>
  );
}

export default DesignsSection;
