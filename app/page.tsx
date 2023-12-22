import Image from "next/image";
import Link from "next/link";
import ProductsList from "./components/products/ProductsList";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className="container mx-auto flex items-center">Home</h1>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className=" bg-green-300 h-[fit-content]">
          <h3>Categories:</h3>
          <ul className="flex gap-6 list-none  ">
            <li className="hover:text-sky-400">
              <Link href="/iphone">iPhone</Link>
            </li>
            <li className="hover:text-sky-400">
              <Link href="/watch">Watch</Link>
            </li>
            <li className="hover:text-sky-400">
              <Link href="/macbook">Macbook</Link>
            </li>
          </ul>
        </div>
        <div className=" bg-orange-300 col-span-3 min-h-[fit-content]">
          <ProductsList />
        </div>
      </div>
    </main>
  );
}
