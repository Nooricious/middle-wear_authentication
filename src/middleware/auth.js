import jwt from "jsonwebtoken";
import tokenModel from "../model/auth/index.js";

const AuthenticateMiddleware = async(req, res, next) => {
  let token = req.headers.authorization;
  console.log(token)
  // if (!token) {
  //   return res.status(401).json({ message: "UnAuthorized" });
  // }
  token = token.replace("Bearer ", "");
  const dbToken=await tokenModel.findOne({
    where:{token:token}
  })
  console.log(dbToken,"token....")
  if(!dbToken){
    return res.status(401).json({message:"unauthorized:token"})
  }
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
    console.log(decoded, "req.body");

    req.user = decoded;                                               
    next();
  } catch (error) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
};

export default AuthenticateMiddleware;
