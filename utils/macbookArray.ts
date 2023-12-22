export type Product = {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
};

const macbookArray: Product[] = [
  {
    id: 1,
    img: "/images/img-macbook-1.webp",
    title: "Macbook Pro",
    description: "512 Gb",
    category: "macbook",
  },

  {
    id: 2,
    img: "/images/img-macbook-2.webp",
    title: "Macbook Air",
    description: "128 Gb",
    category: "macbook",
  },

  {
    id: 3,
    img: "/images/img-macbook-3.webp",
    title: "Macbook Pro",
    description: "512 Gb",
    category: "macbook",
  },
];

export default macbookArray;
