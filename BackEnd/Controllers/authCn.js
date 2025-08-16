import catchAsync from "../Utils/catchAsync.js"
import HandleERROR from "../Utils/handleError.js";
import Admin from '../Model/adminModel.js'

export const login = catchAsync(async (req, res, next) => {
    const { username, Password } = req?.body;
    if (!username || !Password) {
        return next(new HandleERROR("UserName or password wrong", 400))
    }
    const admin = await Admin.findOne()


})
