import KUTE from "kute.js";
import { useEffect, useId } from "react";

export interface BlobProps {
  className?: string;
  height: number;
  colors: string | string[];
}

export default function Blob({ className, height, colors }: BlobProps) {
  const id = useId().replaceAll(":", "");
  const blob1 = id + "-1";
  const blob2 = id + "-2";
  const blob3 = id + "-3";

  const getSafeColor = (index: number) =>
    typeof colors === "string" ? colors : colors[index];

  // useEffect(() => {
  //   console.log("kute", KUTE);
  //   const tween1 = KUTE.fromTo(
  //     `#${blob1}`,
  //     { path: `#${blob1}`, attr: { fill: getSafeColor(0) } },
  //     { path: `#${blob2}`, attr: { fill: getSafeColor(1) } },
  //     { duration: 3000, morphPercsion: 200 }
  //   );

  //   const tween2 = KUTE.fromTo(
  //     `#${blob1}`,
  //     { path: `#${blob2}`, attr: { fill: getSafeColor(1) } },
  //     { path: `#${blob3}`, attr: { fill: getSafeColor(2) } },
  //     { duration: 3000, morphPercsion: 200 }
  //   );

  //   const tween3 = KUTE.fromTo(
  //     `#${blob1}`,
  //     { path: `#${blob3}`, attr: { fill: getSafeColor(2) } },
  //     { path: `#${blob1}`, attr: { fill: getSafeColor(0) } },
  //     { duration: 3000, morphPercsion: 200 }
  //   );

  //   tween1.chain(tween2);
  //   tween2.chain(tween3);
  //   tween3.chain(tween1);
  //   tween1.start();
  // }, [id, blob1, blob2, blob3]);

  return (
    <svg
      className={`${className} absolute z-0`}
      viewBox="225 150 450 300"
      width="100%"
      height={height}
    >
      <g transform="translate(446.0022471086396 320.7377781406117)">
        <path
          id={blob1}
          d="M148.4 -158.6C182.7 -114.1 194.4 -57 201.2 6.8C208 70.7 210.1 141.4 175.8 174.1C141.4 206.8 70.7 201.4 17.7 183.7C-35.4 166 -70.7 136 -105.5 103.4C-140.4 70.7 -174.7 35.4 -189.4 -14.7C-204.2 -64.8 -199.3 -129.6 -164.5 -174.1C-129.6 -218.6 -64.8 -242.8 -3.9 -238.9C57 -235 114.1 -203.1 148.4 -158.6"
          fill="#EC4899"
        ></path>
      </g>
      <g
        className="invisible"
        transform="translate(476.9282217741784 300.1066066377812)"
      >
        <path
          id={blob2}
          d="M116.5 -141.5C141.5 -91.5 145.7 -45.7 153.2 7.4C160.6 60.6 171.2 121.2 146.2 170.5C121.2 219.8 60.6 257.9 10 247.9C-40.5 237.9 -81.1 179.7 -123.1 130.4C-165.1 81.1 -208.5 40.5 -214.9 -6.4C-221.3 -53.3 -190.5 -106.5 -148.5 -156.5C-106.5 -206.5 -53.3 -253.3 -3.8 -249.5C45.7 -245.7 91.5 -191.5 116.5 -141.5"
          fill="#EC4899"
        ></path>
      </g>
      <g
        className="invisible"
        transform="translate(443.2736747469958 315.20251499089943)"
      >
        <path
          id={blob3}
          d="M135.8 -129.1C185.8 -85.8 242.9 -42.9 239.1 -3.8C235.4 35.4 170.7 70.7 120.7 102C70.7 133.4 35.4 160.7 -15.7 176.4C-66.7 192 -133.4 196.1 -174.9 164.7C-216.4 133.4 -232.7 66.7 -223.2 9.5C-213.6 -47.6 -178.2 -95.2 -136.7 -138.6C-95.2 -181.9 -47.6 -220.9 -2.4 -218.6C42.9 -216.2 85.8 -172.5 135.8 -129.1"
          fill="#EC4899"
        ></path>
      </g>
    </svg>
  );
}
