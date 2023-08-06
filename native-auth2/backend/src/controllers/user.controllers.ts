import { Request, Response, NextFunction } from 'express';
import User from '../models/user';


export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, profession } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            name: user.name,
            email: user.email,
            password: user.password,
            avatar: user.avatar,
        });
    } catch (error: any) {
        res.status(400);
        next(error);
    }
}
    
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            res.status(400);
            throw new Error('Please provide an email and password');
        }

        const user = await User.findOne({ email });

        if (!user) {
            res.status(401);
            throw new Error('Invalid credentials');
        }

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        });
    } catch (error: any) {
        res.status(400);
        next(error);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profession: req.body.profession,
            avatar: req.body.avatar,
        };

        const user = await User.findByIdAndUpdate(req.params.id, newUserData, { 
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json(user);
    } catch (error: any) {
        res.status(400);
        next(error);
    }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find({});
        if (!users) {
            res.status(404);
            throw new Error('Users not found');
        }

        res.status(200).json(users);
    } catch (error: any) {
        res.status(400);
        next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json(user);
    } catch (error: any) {
        res.status(400);
        next(error);
    }
}

export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
const activeSession = [] as string[];
    try {
       const userID = req.params.id;

         if (!userID) {
            res.status(401);
            throw new Error('Invalid credentials');
        }

        const index = activeSession.indexOf(userID);

        if (index === -1) {
            res.status(401).json({ message: 'User is already logged out' });
            return;
        }

        activeSession.splice(index, 1);

        res.status(200).json({
            message: 'User logged out',
        });
    } catch (error: any) {
        res.status(400);
        next(error);
    }
}
