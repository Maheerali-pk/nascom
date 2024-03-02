import { useParams } from "react-router-dom";
import Navbar from "../../base-compoents/Navbar";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { resourceLibraryItems } from "../../utils/constants";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
   const params = useParams();
   const id = params.id;
   const [blog, setBlog] = useState<IResourceLibraryItem | undefined>();
   useEffect(() => {
      setBlog(resourceLibraryItems[Number(id)]);
   }, []);
   if (!blog) {
      return <Loader></Loader>;
   }

   return (
      <>
         <Navbar></Navbar>
         <div className="flex flex-col p-12 gap-12">
            <div className="text-4xl">{blog.title}</div>
            <div className="text-gray-600 text-base">{blog.description}</div>
            <div className="grid-cols-3 grid gap-8">
               {blog.images.map((image) => (
                  <img
                     src={image}
                     className="object-cover w-full h-auto aspect-square rounded-xl"
                  ></img>
               ))}
            </div>
         </div>
      </>
   );
};

export default Blog;
