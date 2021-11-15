import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String}
})

var UserSchema =  mongoose.model('UserSchema',userSchema);
export default UserSchema;