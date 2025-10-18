import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {
        displayName: {
            type: String,
            required: [true, "Display name wajb di isi"],
            unique: true,
            trim: true
        },
        profilePicture: {
            type: String,
            required: [true, "Profile wajb di isi"],
        },
        bio: {
            type: String,
            minLength: [10, "Minimal 10 karakter"],
            maxLength: [150, "Maximal 150 karakter"],
            required: [true, "Profile picture wajb di isi"],
            trim: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const ProfileModel = mongoose.model("Profile", ProfileSchema)

export default ProfileModel;