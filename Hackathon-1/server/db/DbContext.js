import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { DateSchema } from '../models/Date.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Date = mongoose.model('Date', DateSchema);
}

export const dbContext = new DbContext()
