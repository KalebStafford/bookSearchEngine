const { User } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Mutation: {
    removeBook: async ({ bookId }, data) => {
      if (data) {
        return await User.findByIdAndUpdate(
          { id: data },
          { pull: { savedBooks: bookId }, new: true }
        );
      }
    },

    saveBook: async ({ addBook }, data) => {
      if (data) {
        return await User.findByIdAndUpdate(
          { id: data },
          { push: { savedBooks: addBook }, new: true }
        );
      }
    },

    login: async ({ Email, Password }) => {
      let Login = signToken(await User.findOne({ Email, Password }));
      return { Login };
    },

    addUser: async (addUser) => {
      let Add = signToken(await User.create(addUser));
      return { Add };
    },
  },

  Query: {
    me: async (data) => {
      if (data) {
        return await User.findOne({ id: data }).select("Password");
      }
    },
  },
};

module.exports = resolvers;
