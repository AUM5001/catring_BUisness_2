

const testing = async (req, res, next) => {
    try {
        res.status(200).json({page:"Menu", response:"This is working properly"})
    } catch (err) {
        next(err)
    }
}

module.exports = {
    testing,
}