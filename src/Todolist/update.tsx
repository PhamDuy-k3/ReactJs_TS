import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Product } from "./types";

interface IUpdateProps {
  idProduct: number;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  sum5: (aa: number, bb: number) => string;
}

const Update: React.FC<IUpdateProps> = ({
  idProduct,
  products,
  setProducts,
  sum5,
}) => {
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState<string>("");
  const [newPrice, setNewPrice] = useState<string>("");

  const handleClose = (): void => {
    setShow(false);
  };

  const handleShow = (): void => {
    const productToUpdate = products.find(
      (product) => product.id === idProduct
    );
    if (productToUpdate) {
      setNewName(productToUpdate.name);
      setNewPrice(productToUpdate.price);
    }
    setShow(true);
  };

  const updateProduct = (): void => {
    setProducts(
      products.map((product) =>
        product.id === idProduct
          ? {
              ...product,
              name: newName || product.name,
              price: newPrice || product.price,
            }
          : product
      )
    );
    handleClose();
  };

  console.log("chuyển hàm từ cha xuống con:", sum5(1, 2));

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="todo-container">
            <input
              className="textUpdate"
              placeholder="Product Name"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <br />
            <input
              className="textUpdate"
              placeholder="Price"
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={updateProduct}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Update;
