import User from "../model/userModel.js";
export const create = async (req, res) => {
  console.log();
  try {
    const userData = req.body;
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ ...userData });
   const savedUser =  await user.save()
    res.status(200).json(savedUser);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const fetch = async (req, res) => {
  try {
    const users=await User.find();
    if(users.length==0){
        return res.status(404).json({message:"User Not Found"})
    }
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
 

export const update=async(req,res)=>{
    try{
    const id= req.params.id;
    const userExist=await User.findById({_id:id})
    if(!userExist){
        return res.status(404).json({message:"User Not Found"})
    }
    const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).json(updateUser)
    }
    catch{
        res.status(500).json({error:"Internal server error"})
    }
}
export const deleteUser= async (req,user)=>{
    try{
const id=req.params.id
const userExist= await User.findById({_id:id});
if(!userExist){
    return res.status(404).json({message:"User Not Found"})
}
await User.findByIdAndDelete(id)
res.status(2001).json({message:"User deleted successfully"})
    }
    catch(error){
    }

}

