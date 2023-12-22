export type Product = {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
};

const iphoneArray: Product[] = [
  {
    id: 1,
    img: "/images/img-iphone-1.webp",
    title: "iPhone 15",
    description: "128 Gb",
    category: "iphone",
  },

  {
    id: 2,
    img: "/images/img-iphone-2.webp",
    title: "iPhone 14 Pro",
    description: "512 Gb",
    category: "iphone",
  },

  {
    id: 3,
    img: "/images/img-iphone-3.webp",
    title: "iPhone 15 Pro Max",
    description: "256 Gb",
    category: "iphone",
  },
];

export default iphoneArray;
