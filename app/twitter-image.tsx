import Image from "./opengraph-image";

// X/Twitter card image — same render as the Open Graph image.
// Config fields must be declared literally (Next can't read re-exports).
export const runtime = "edge";
export const alt = "Amin Zare - Digital Creator & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default Image;
