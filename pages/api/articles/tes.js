import connection from "../../../config/database";
// const connection = require("../../../config/database");

export default function handler(req, res) {
  console.log("connection", connection);
  res.status(200).json({ anjay: "oke" });
}
