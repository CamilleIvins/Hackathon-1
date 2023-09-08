import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { OutingSchema } from '../models/Outing.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Outing = mongoose.model('Outing', OutingSchema);
}

export const dbContext = new DbContext()
