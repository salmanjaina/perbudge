import mongoose, { Schema, Document, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  monthlyBudget?: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    monthlyBudget: { type: Number },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
