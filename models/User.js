import { model, Schema, Types } from 'mongoose'

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    nombre:String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'El Correo es Requerido',
        validate: [validateEmail, 'Por favor escriba un correo Valido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor Escriba algo']
    },
    status:Boolean
})
export const User = model('User', UserSchema);
//export const User = mongoose.model('User', userSchema);