export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (token: string) => {
      localStorage.setItem("token", token);
      return null;
    },
    logUserOut: () => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    },
  },
};
