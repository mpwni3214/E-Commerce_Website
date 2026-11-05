import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://localhost:8000";
  const imageSrc = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${BASEURL}${product.image}`
    : "https://placehold.co/300x200?text=No+Image";

  return (
    <a href={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4 cursor-pointer">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 font-medium">${product.price}</p>
      </div>
    </a>
  );
}

export default ProductCard;
