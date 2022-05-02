const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      const { id, data } = payload.payload;
      return {
        ...store,
        list: [
          ...store.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return store;
  }
};
