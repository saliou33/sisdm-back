const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const BaseUserSchema  = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'Votre nom est obligatoire!']
    },
    prenom: {
        type: String,
        required: [true, 'Votre prenom est obligatoire']
    },
    email: {
        type: String,
        required: [true, 'Votre Email est obligatoire'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Votre email doit etre valide']
    },
    password: {
        type: String,
        required: [true, 'Veuiller donner votre mot de passe'],
        minglength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Veuiller confimer le mot de passe'],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
            message: 'Les mots de passe ne sont pas identique!'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false,
    }
});


const baseOption = {
    discriminatorKey: "user",
    collection: "user",
    timestamps: true,
}

BaseUserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    //Hash the password
    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();
});


BaseUserSchema.pre('save', function(next) {
    if (!this.isModified('password')  || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});

BaseUserSchema.pre(/^find/, function(next) {
    this.find({active: {$ne: false}});
    next()
})


BaseUserSchema.methods.correctPassword = async function(cp, userPassword) {
    return await bcrypt.compare(cp, userPassword);
}

BaseUserSchema.methods.changedPasswordAfter = function (JWTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp  = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        )

        return JWTimestamp < changedTimestamp;
    }

    return false;
}

BaseUserSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    this.passwordResetToken = crypto
        .createHash('256')
        .update(resetToken)
        .digest('hex')

    this.passwordResetToken = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model("BaseUserSchema", BaseUserSchema);