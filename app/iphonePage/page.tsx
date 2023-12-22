import iphoneArray from "@/utils/iphoneArray";
import ProductsListItem from "../components/products/ProductsListItem";

export default function IphonePage() {
  return (
    <div className="container mx-auto">
      <h1 className="container mx-auto flex items-center">iPhone</h1>
      <div className="grid grid-cols-3 gap-4">
        {iphoneArray.map(({ id, img, title, description, category }) => (
          <div className="grid items-center border border-gray-400 rounded">
            <ProductsListItem
              id={id}
              img={img}
              title={title}
              description={description}
              category={category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
