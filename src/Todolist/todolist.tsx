import React, { useState, useRef } from "react";
import "./todo.scss";
import Update from "./update";
import { Product } from "./types";
import { formatCurrency } from "./utils";
import ToastContainerNew from "./toast";
import { toast } from "react-toastify";

const Todo: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [text, setText] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const textRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const addProduct = ():void => {
    if (text !== "" && price !== "") {
      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice)) {
        toast.error("Giá tiền phải là số hợp lệ!");
        return;
      }
      const newProduct: Product = {
        id: new Date().getTime(),
        name: text.toLocaleLowerCase(),
        price: parsedPrice.toString(),
      };
      setProducts([...products, newProduct]);
      setText("");
      setPrice("");
      toast.success("Thêm thành công!");
    } else {
      if (text === "") {
        toast.error("Nhập tên sản phẩm!");
        textRef.current?.focus();
      } else {
        toast.error("Nhập giá tiền sản phẩm!");
        priceRef.current?.focus();
      }
    }
  };

  const deleteProduct = (id: number): void => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };

  const total = products.reduce((accumulator, item): number => {
    return accumulator + parseFloat(item.price);
  }, 0);

  return (
    <div className="todo-container">
      <h1>Danh sách sản phẩm</h1>
      <ToastContainerNew />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              {product.name} - {formatCurrency(parseFloat(product.price))}
            </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
              <Update
                idProduct={product.id}
                products={products}
                setProducts={setProducts}
              />
            </div>
          </li>
        ))}
      </ul>
      <input
        ref={textRef}
        className="name"
        placeholder="Tên sản phẩm"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        ref={priceRef}
        className="price"
        placeholder="Giá tiền"
        value={price}
        type="text"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button className="addProduct btn btn-primary" onClick={addProduct}>
        Thêm sản phẩm
      </button>
      <h4 style={{ marginLeft: "30rem" }}>
        Giá :{" "}
        <span style={{ color: "red" }} id="giaSP">
          {formatCurrency(total)}
        </span>
      </h4>
    </div>
  );
};

export default Todo;
