const express = require("express");
const router = require("./routes/router");
const config = require("./config");

// const errorMiddleware =(req,res, next)=>{
//   logic
// }

const app = express();
app.use(express.json());
app.use(router);

// app.use(errorMiddleware)

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
