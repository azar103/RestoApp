const Food = require('../models/Food');


exports.getFoods = async (req, res, next) => {
    try {
        const foods = await Food.find().sort('-createdAt');
        res.status(200).send(foods);
    } catch (error) {
        res.status(500).send({error})
    }
}

exports.saveFood = async (req, res, next) => {
    try {
        const { name, description, price } = req.body;
        const { file } = req;
        if (!name || !description || !price || !file) {
            return res.status(400).send({msg:'please fill in all the fields'})
        }
        let food = await Food.findOne({ name });

        if (food) {
            return res.status(400).send({ msg: 'Food already exist' });
        }
        food = new Food({
            name, description, price, urlImg:file.path  || null
        });
        await food.save();
        res.status(200).send(food); 
    } catch (error) {
        res.status(500).send({error})
    }
}

exports.deleteFood = async (req, res, next) => {
    try {
        const { _id } = req.params;
        await Food.findByIdAndRemove({ _id });
        res.status(200).send({msg:'food deleted!'})
    } catch (error) {
        res.status(500).send({error})
    }
}

exports.editFood = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const { file } = req;
        await Food.updateOne({ _id }, {
            $set: {
                ...req.body,
                urlImg: file.path || null
            }
        });
        res.status(200).send({ msg: 'Food Updated!' });
    } catch (error) {
        res.status(500).send({error})
    }
}


exports.postImg = (req, res, next) => {
    try {
        res.status(200).send(req.files);
    } catch (error) {
       console.log({error});
    }
}

exports.getOneFood = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const food = await Food.findById(_id);
        res.status(200).send(food);
    } catch (error) {
        console.log(error);
    }
}
