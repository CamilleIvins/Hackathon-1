import { Schema } from "mongoose";

export const CommentSchema = new Schema({


},
    { timestamps: true, toJSON: { virtuals: true } }
)