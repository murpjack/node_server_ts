import userModel from "../models";

interface userType {
  _id: number;
  userId: string;
  age: number;
  name: string;
  favouriteColour: string;
}

export const getAllUsers = async (req: any, res: any) => {
  await userModel
    .find({}, (err: any, users: userType[]) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!users.length) {
        return res
          .status(404)
          .json({ success: false, error: `Sorry, no users found.` });
      }

      return res.status(200).json({ success: true, data: users });
    })
    .catch((err: any) => console.log(err));
};


export const createUser = async (req: any, res: any) => {
  const body = req.body;

  if (typeof body !== "object") {
    return res.status(400).json({
      success: false,
      message: "You must provide a user.",
    });}

  const user = userModel(body);
  if (!user) {
    // TODO: handle Error response
    return res.status(400).json({ success: false, message: "err" });}

  const query = {
    "_id": body._id,
    "userId": body.userId,
    "name": body.name,
    "favouriteColour": body.favouriteColour,
    "age": body.age,
  } 

  // Don't add any items with a duplicate id
  const duplicatedUsers = await userModel
    .find(query, (err: any, users: userType[]) => {
      if (err) { return res.status(400).json({ error: err }) }

      if (users.length !== 0) {
        return res
          .status(409)
          .json({ error: `User ${body._id} already exists.` });
      } 
    })
    .catch((err: any) => console.log(err));

  if (duplicatedUsers.length === 0) {
    user
      .save()
      .then(() => 
        res.status(201).json({
          success: true,
          id: user._id,
          message: "User created!",
        })
      )
      .catch((error: any) => 
        res.status(400).json({
          error,
          message: "User not created!",
        })
      );
  }

    
};


export const createMockUser = async (user: userType) => {
  if (!user) throw new Error("Missing user");
  await userModel.create(user);

};
export default { getAllUsers, createUser, createMockUser };
