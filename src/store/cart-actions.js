import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending....",
          message: "Sending Card Data",
        })
      );
      let response = await fetch("http://127.0.0.1:8000/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specifies the format of the data being sent
        },
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
      // const responseData = await response.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send Cart Data Successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failure!!",
          message: "Sending Cart Data Failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/test");
      if (!response.ok) {
        throw new Error("Could not fetch cart Data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(cartActions.replaceCart(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failure!!",
          message: "Fetching Cart Data Failed",
        })
      );
    }
  };
};
