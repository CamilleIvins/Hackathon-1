import { Schema } from "mongoose";

export const CommentSchema = new Schema({
    outingId: { type: Schema.Types.ObjectId, ref: 'Outing' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account' },
    comment: { type: String, maxlength: 500 }

},
    { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('outing', {
    localField: 'outingId',
    ref: 'Outing',
    foreignField: '_id',
    justOne: true
})

CommentSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})