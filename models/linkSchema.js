import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title wajb di isi"],
            unique: true,
            trim: true
        },
        icon: {
            type: String,
            required: [true, "Icon wajb di isi"],
        },
        url: {
            type: String,
            required: [true, "Url wajb di isi"],
            unique: true,
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

const LinkModel = mongoose.model("Link", LinkSchema)

export default LinkModel;