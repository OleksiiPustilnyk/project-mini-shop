import Image from "next/image";
import Link from "next/link";
import ProductsList from "./components/products/ProductsList";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className="container mx-auto flex items-center">Home</h1>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <Sidebar />
        <div className="col-span-3 min-h-[fit-content]">
          <ProductsList />
        </div>
      </div>
    </main>
  );
}
