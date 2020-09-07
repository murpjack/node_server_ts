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

export const createUser = (req, res) => {
  const body = req.body;
  console.log("res", res);

  if (!body) {
    return res.status(400).json({
      success: false,
      message: "You must provide a user",
    });
  }

  const user = new User(body);
  console.log("user", user);
  if (!user) {
    // TODO: handle Error response
    return res.status(400).json({ success: false, message: "err" });
  }

  user
    .then((d) => ({ ...d, ["approvalStatus"]: "NOT_APPROVED" }))
    .save()
    .then(() =>
      res.status(201).json({
        success: true,
        id: user._id,
        message: "User created!",
      })
    )
    .catch((error) =>
      res.status(400).json({
        error,
        message: "User not created!",
      })
    );
};

export const createMockUser = async (user) => {
    if (!user)
        throw new Error('Missing user');

    await userModel.create(user);
}
export default { getAllUsers, createUser, createMockUser };
