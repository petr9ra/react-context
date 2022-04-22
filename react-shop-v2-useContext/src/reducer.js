export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS": 
      return {
        ...state,
        goods: payload || [],
        loading: false,
      }

    case "ADD_TO_CART": {
      let itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = { ...payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };

    case "HANDLE_CART_SHOW":
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };

    case "HANDLE_CART_BTN_CLICK":
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload.id) {
            return {
              ...orderItem,
              quantity:
                payload.str === "-" && orderItem.quantity > 1
                  ? orderItem.quantity - 1
                  : payload.str === "+"
                  ? orderItem.quantity + 1
                  : orderItem.quantity,
            };
          } else {
            return orderItem;
          }
        }),
      };

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    default:
      return state;
  }
}
