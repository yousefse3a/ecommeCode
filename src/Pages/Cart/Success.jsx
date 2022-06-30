import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Redux/api";
import { emptyCart, updateUserCartApi } from "../../Redux/cartSlice";
import { emptyUserCart } from "../../Redux/userSlice";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const total = location.state.total;
  const [orderId, setOrderId] = useState(null);
  const userToken = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  async function createOrder() {
    const res = await axios.post(
      `${baseUrl}/Order`,
      {
        products: cart.map((item) => ({
          productId: item._id._id,
          quantity: item.Amount,
        })),
        amount: total,
        address: data.billing_details.address,
      },
      {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      }
    );
    setOrderId(res.data.Order._id);
    dispatch(emptyCart());
    dispatch(emptyUserCart());
    dispatch(updateUserCartApi(userToken));
  }
  useEffect(() => {
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};

export default Success;
