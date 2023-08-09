import { Schema, model, Mongoose } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
    profession: string;
    avatar?: {
        public_id: string,
        url: string
    } | null | undefined,
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
}, {
    timestamps: true,
});

const User = model<IUser>('User', userSchema);

export default User;
