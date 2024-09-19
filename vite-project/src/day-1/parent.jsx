import { useEffect, useState } from "react";
import ProductList3 from "./child";
import { toast } from "react-toastify";

const ProductsTrial3 = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Err:", err);
        setProducts([]);
        setIsLoading(false);
      });
  }, []);

  const onDeleteProduct = (item ) => {
     console.log("wowo: ",item);
      setProducts((prev) => prev.filter((data) => data.id !== item.id));
      console.log("wowo2");
      toast.success("Product deleted successfully");
      setOpen(false);
      //toast.warning("You have cancelled the deletion");
    
  };

 const handleConfirmDelete = ()=>{
    setOpen(true);
    console.log("pppp", products);
 }

  console.log("Re-Render: ", products, isLoading);
  return (
    <div>
      <ProductList3
        loading={isLoading}
        data={products}
        onRemove={handleConfirmDelete}
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={onDeleteProduct}
        title="Confirm Delete"
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};

export default ProductsTrial3;