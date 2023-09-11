import { Schema } from "mongoose"


export const OutingSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    title: { type: String, required: true, maxlength: 500 },
    day: { type: String, maxlength: 35, required: true },
    location: { type: String, maxlength: 100, required: true },
    description: { type: String, maxlength: 500, required: true },
    voteCount: { type: Number },
},
    { timestamps: true, toJSON: { virtuals: true } }
)

OutingSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})
