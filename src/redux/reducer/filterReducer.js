const initialState = {
  filters: [
    {
      id: 101,
      name: "Face expression recognition",
      description:
        "This filter will say how you feeling now depending on your face expression ",
      media:
        "https://user-images.githubusercontent.com/31125521/50575270-f501d080-0dfb-11e9-9676-8f419efdade4.png",
    },
    {
      id: 102,
      name: "Age Estimation & Gender Recognition",
      description:
        "This filter will say your age and gender feeling now depending on your face",
      media:
        "https://user-images.githubusercontent.com/31125521/57297736-b5603380-70d0-11e9-873d-8b6c7243eb64.jpg",
    },
    {
      id: 103,
      name: "Face Landmark Detection",
      description: "This filter will detect face landmarks",
      media:
        "https://user-images.githubusercontent.com/31125521/57297731-b1ccac80-70d0-11e9-9bd7-59d77f180322.jpg",
    },
    {
      id: 104,
      name: "Face Recognition",
      description: "This filter will say who you are",
      media:
        "https://user-images.githubusercontent.com/31125521/57297377-bfcdfd80-70cf-11e9-8afa-2044cb167bff.gif",
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
