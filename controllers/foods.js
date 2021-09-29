const Food = require('../models/Food');
const multer = require('multer');

exports.getFoods = async (req, res, next) => {
    try {
        const foods = await Food.find();
        res.status(200).send(foods);
    } catch (error) {
        res.status(500).send({error})
    }
}

exports.saveFood = async (req, res, next) => {
    try {
        const { name, description, price, urlImg } = req.body;
        let food = await Food.findOne({ name });
        if (food) {
            return res.status(400).send({ msg: 'Food already exist' });
        }
        food = new Food({ name, description, price, urlImg });
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
        await Food.updateOne({ _id }, { $set: { ...req.body } });
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