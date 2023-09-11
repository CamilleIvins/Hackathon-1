import { Schema } from "mongoose"

export const FavouriteSchema = new Schema({
    outingId: { type: Schema.Types.ObjectId, ref: 'Outing', required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
    { timestamps: true, toJSON: { virtuals: true } }
)

FavouriteSchema.virtual('outing', {
    localField: 'outingId',
    ref: 'Outing',
    foreignField: '_id',
    justOne: true
})

FavouriteSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})