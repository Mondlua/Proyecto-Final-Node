//* Services
// import ... from '../models/user.model.js'

import users from "../config/db";

const getAll = () => {
  return users;
};

export default { getAll };
