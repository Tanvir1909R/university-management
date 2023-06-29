import mongoose from "mongoose";
import app from "./app";
import config from "./config";

mongoose
  .connect(config.database_url as string)
  .then(() => {
    console.log("database connect");
    app.listen(config.port,()=>{
      console.log('server is ready');
      
    })
  })
  .catch(() => {
    console.log("error");
  });
