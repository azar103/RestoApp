exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            return res.status(401).send({msg:'unauthorized admin'})
        }
    } catch (error) {
        
    }
}

