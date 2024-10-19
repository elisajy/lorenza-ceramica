// import { Sidebar } from "primereact/sidebar";
// import { DataView } from "primereact/dataview";
// import { Button } from "primereact/button";
// import { Divider } from "primereact/divider";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  ProductItem,
  REMOVE_ITEM,
  useCartContext,
} from "../../hooks/cart-context/CartContext";
import product_A from "../../assets/images/products/product_A.jpg";
import "./ShoppingCart.css";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const ShoppingCart = ({ visible, setVisible }: Props) => {
  const { cartState, cartDispatch } = useCartContext();
  const [products, setProducts] = useState<ProductItem[]>();

  useEffect(() => {
    setProducts(cartState.products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartState.products]);

  const onClickRemoveItem = (item: ProductItem) => {
    setProducts(products!.filter(x => x.id !== item.id));
    cartDispatch({
      type: REMOVE_ITEM,
      payload: item,
    });
  };

  const onClickInquiry = () => {
    const phoneNumber = "+60169926846";
    let message = "Hi, I would like to inquire about the following products: ";
    for (let i = 0; i < products!.length; i++) {
      message = message.concat(`\n${i + 1}. ${products![i].name} (*${products![i].code}*)`);
    }
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&app_absent=0`;
    window.open(url, "_blank");
  };

  const itemTemplate = (data: ProductItem, index: number) => {
    return (
      <div key={index} style={{ marginTop: "10px" }}>
        <div className="cart-item">
          <img className="product-image" src={`${product_A}`} alt={data.name} />
          <div>
            <div>
              <div className="text-xl-font-bold">{data.name}</div>
              <div className="text-600-small">{data.description}</div>
            </div>
            <div>
              <table className="item-details">
                <tbody>
                  <tr>
                    <td>Code</td>
                    <td>:</td>
                    <td>{data.code}</td>
                  </tr>
                  <tr>
                    <td>Variation</td>
                    <td>:</td>
                    <td>{data.variation}</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>:</td>
                    <td>{data.size}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>:</td>
                    <td>{data.color}</td>
                  </tr>
                  <tr>
                    <td>Finish</td>
                    <td>:</td>
                    <td>{data.finish}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <Button
            link
            className="remove-btn"
            label="Remove"
            onClick={() => onClickRemoveItem(data)}
          ></Button> */}
        </div>
      </div>
    );
  };

  const listTemplate = (items: ProductItem[]) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid">{list}</div>;
  };

  return (
    // <Sidebar
    //   visible={visible}
    //   position="right"
    //   header={
    //     <div>
    //       <h2>Cart</h2>
    //     </div>
    //   }
    //   onHide={() => setVisible(false)}
    // >
    //   <div className="card">
    //     <DataView value={products} listTemplate={listTemplate} />
    //   </div>
    //   <Divider />
    //   <Button
    //     label="Inquire Our Sales Team"
    //     icon="pi pi-angle-right"
    //     iconPos="right"
    //     onClick={onClickInquiry}
    //     rounded
    //   />
    // </Sidebar>
    <p></p>
  );
};

export default ShoppingCart;
