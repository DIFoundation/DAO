import Image from "next/image";

export default function CustomImage({width1 = 200, height1 = 200, width2 = 100, height2 = 100}: {width1?: number, height1?: number, width2?: number, height2?: number }) {
  return (
    <div className="relative">
      <Image
        src={"/tan.jpg"}
        alt={"Hero Image"}
        width={width1}
        height={height1}
        className="rounded-lg shadow-lg "
      />
      <Image
        src={"/tan.jpg"}
        alt={"Logo"}
        width={width2}
        height={height2}
        className="absolute top-0 rotate-12 rounded-lg shadow-lg"
      />
    </div>
  );
}
