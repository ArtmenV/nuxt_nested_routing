import axios from "axios";

export const actions = {
  async fetchUsers() {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return users;
    } catch (e) {
      throw e;
    }
  }
};
