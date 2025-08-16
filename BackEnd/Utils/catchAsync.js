export const catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}
export default catchAsync

// 3.
// داخلش، fn(req, res, next) رو صدا می‌زنه.
// چون fn یک تابع async هست، نتیجه‌اش یک Promise برمی‌گرده.
// روی این Promise متد .catch(next) صدا زده شده.

// یعنی:

// اگه fn بدون خطا اجرا بشه → مشکلی نیست.

// اگه throw کنه یا reject بشه → خودکار میره داخل next(error) و Express اون خطا رو می‌فرسته به error handling middleware.

