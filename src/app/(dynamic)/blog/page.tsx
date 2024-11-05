import Image from "next/image";
import Link from "next/link";


interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  thumbnail: string
}

interface ProductsResponse {
  products: Product[];
}
const getData = async() : Promise<ProductsResponse> =>{
  const res = await fetch('https://dummyjson.com/products?limit=10')
  if(!res.ok) throw new Error('Faild to fetch data')
  return res.json()
}
const Blog = async () => {
  const products = await getData()
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        products?.products?.map((product) => (
          <Link key={product.id} href={`/blog/${product.id}`} className=" col-span-1 flex-grow">
          <div className=" relative h-[200px]">
            <Image
              src={product?.thumbnail}
              fill={true}
              alt="post image"
              className=" object-cover"
            />
          </div>

          <div className="mt-3">
            <h1 className=" font-bold ">{product?.title}</h1>
            <p className=" text-[18px]">{product?.description}</p>
          </div>
        </Link>
        ))
      }

    </div>
  );
};

export default Blog;
