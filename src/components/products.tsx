import { Fragment, useState } from "react";

// Products
import EditProduct from "./editProduct";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(0);
  };

  return (
    <Fragment>
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          showModal ? "fixed" : "hidden"
        } top-0 right-0 left-100 z-50 flex flex-col justify-center items-center w-full`}
      >
        <EditProduct close={closeModal} productId={selectedProduct} />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Product Description
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            onClick={() => {
              setShowModal(!showModal);
              setSelectedProduct(1);
            }}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
