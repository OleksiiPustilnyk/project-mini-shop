export type Product = {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
};

const watchArray: Product[] = [
  {
    id: 1,
    img: "/images/img-watch-1.webp",
    title: "Apple Watch SE",
    description: "41 mm",
    category: "watch",
  },

  {
    id: 2,
    img: "/images/img-watch-2.webp",
    title: "Apple Watch Ultra",
    description: "48 mm",
    category: "watch",
  },

  {
    id: 3,
    img: "/images/img-watch-3.webp",
    title: "Apple Watch SE",
    description: "40 mm",
    category: "watch",
  },
];

export default watchArray;
