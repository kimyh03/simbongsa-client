export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
  Mutation: {
    localSignIn: (_: any, { token }: any) => {
      localStorage.setItem("token", token);
      return null;
    },
    localSignOut: (_: any, __: any) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    },
  },
};
