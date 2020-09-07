import userModel from "../models";

interface userType {
  _id: number;
  age: number;
  name: string;
  favouriteColour: string;
}


export const getAllUsers = async (req: any, res: any) => {
  await userModel.find({}, (err: any, users: userType[]) => {
    // console.log(users);
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err: any) => console.log(err));
};


export default { getAllUsers };
