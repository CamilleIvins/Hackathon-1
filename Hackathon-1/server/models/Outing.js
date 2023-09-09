import { Schema } from "mongoose"


export const OutingSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account' },
    title: { type: String, required: true, maxlength: 500 },
    day: { type: String, maxlength: 35 },
    location: { type: String, maxlength: 100 },
    description: { type: String, maxlength: 500 },
    voteCount: { type: Number },
    comment: { type: String, maxLength: 500 }
},
    { timestamps: true, toJSON: { virtuals: true } }
)
OutingSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})
