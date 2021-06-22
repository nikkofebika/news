import connection from "../../../config/database";
// const connection = require("../../../config/database");
export default function handler(req, res) {
  connection.query(
    "SELECT * FROM articles WHERE is_headline = 1",
    (error, result) => {
      if (error) return console.log("error get_headlines", error);
      return res.status(200).json(result);
    }
  );
}
