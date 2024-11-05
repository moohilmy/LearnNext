import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  thumbnail: string;
}

const getPost = async (id: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/${id}`
  )
  const post : Product = await res.json();
  return post;
}

const Post = async ({ params }: { params: { id: string } }) => {
  const post  =  await getPost(params.id)

  return (
    <div>
      <header>
        <div>
          <h1 className=" text-[40px]">{post.title}</h1>
          <p className="text-[18px]">
            {post.description}
          </p>
        </div>
        <div className="relative h-[300px] my-[25px]">
          <Image
            className=" object-cover border-r-[15px]"
            src={post.thumbnail}
            fill={true}
            alt="post-image"
          />
          <span className=" absolute bg-blue-800 text-black py-[5px] px-[10px] right-0 bottom-0">
            moo hilmy
          </span>
        </div>
      </header>
      <div>
        <p className="text-[18px] columns-2  leading-6 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          veritatis illum minus cum eius dolor quos voluptatibus ratione sed
          expedita maiores aspernatur blanditiis dicta, laudantium incidunt
          facere soluta placeat esse. Laudantium consequatur fuga odit quia,
          adipisci non nemo? Aperiam minima fugiat rerum delectus harum ipsa
          praesentium enim iusto nostrum at?
        </p>
      </div>
    </div>
  );
};

export default Post;
