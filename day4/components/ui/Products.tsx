"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
const sanity = createClient({
  projectId: "qtlc5g66", // Replace with your project ID
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(sanity);
const urlFor = (source: any) => (source ? builder.image(source).url() : "/placeholder.png");

// TypeScript interface for product data
interface Product {
  _id: string;
  title: string;
  productImage?: {
    asset?: {
      _ref?: string;
    };
  };
  price?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]); // Cart state
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc)[0...6]`; // Fetch only the first 6 products
        const data = await sanity.fetch(query);

        console.log("Fetched products:", data); // Debugging
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    // Load cart and wishlist from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  const addToCart = (product: Product) => {
    // Check if product is already in the cart
    const isInCart = cart.some((item) => item._id === product._id);
    if (isInCart) {
      alert(`${product.title} is already in the cart!`);
      return;
    }

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  const addToWishlist = (product: Product) => {
    // Check if product is already in the wishlist
    const isInWishlist = wishlist.some((item) => item._id === product._id);
    if (isInWishlist) {
      alert(`${product.title} is already in the wishlist!`);
      return;
    }

    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert(`${product.title} added to wishlist!`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-[50px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {/* Product Image */}
            <div className="relative w-full h-64">
              {product.productImage?.asset?._ref ? (
                <Image
                  src={urlFor(product.productImage.asset._ref)}
                  alt={product.title || "Product image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <p>No Image Available</p>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-green-600 font-semibold">${product.price || "Price not available"}</p>

              {/* Buttons for Cart and Wishlist */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => addToWishlist(product)}
                  className="flex-1 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/shop"
          className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
