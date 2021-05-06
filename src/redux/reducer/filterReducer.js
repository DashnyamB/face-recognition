const initialState = {
  filters: [
    {
      id: 101,
      name: "Нүүрний хувирал танилт",
      description:
        "This filter will say how you feeling now depending on your face expression ",
      media:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fbackground-1-min.jpg?alt=media&token=9b9e382b-0ada-4295-8021-1a712ce30359",
    },
    {
      id: 102,
      name: "Нас болон хүйс танилт",
      description:
        "This filter will say your age and gender feeling now depending on your face",
      media:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fbackground-2-min.jpg?alt=media&token=30e33b62-98bb-4bdc-a008-1c19db9a117a",
    },
    {
      id: 103,
      name: "Landmark",
      description: "This filter will detect face landmarks",
      media:
        "https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2Fbackground-3-min.jpg?alt=media&token=29449924-d4de-43b4-83d1-8081e8f29578",
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
