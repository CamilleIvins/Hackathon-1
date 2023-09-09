import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { OutingSchema } from '../models/Outing.js';
import { FavouriteSchema } from '../models/Favourite.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Outing = mongoose.model('Outing', OutingSchema);
  Favourite = mongoose.model('Favourite', FavouriteSchema)
}

export const dbContext = new DbContext()
