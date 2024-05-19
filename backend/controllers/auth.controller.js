export const login= async (req,res)=>{

try {
    const {fullName,username,password,confirmOassword,gender} =req.body
} catch (error) {
    
}
}

export const logout=(req,res)=>{
    res.send("LogOutUser");
    console.log("logoutUser") ;
 }


 export const signup=(req,res)=>{
    res.send("SignUpUser");
    console.log("signupUser") ;
 }

 