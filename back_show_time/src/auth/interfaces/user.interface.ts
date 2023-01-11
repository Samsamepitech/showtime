import { Document } from 'mongoose';

export interface User extends Document {
  uRole: any;
  readonly email: string;
  readonly password: string;
}
