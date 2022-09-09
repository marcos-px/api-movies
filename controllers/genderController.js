const Gender = require("../models/Gender");

const GenderController = {
    listAll: async (req,res) =>{
        const genders = await Gender.findAll();

        return res.json(genders);
    },

    createGender: async (req,res)=> {
        const { gender} = req.body;
        const newGender = await Gender.create({
            gender,
        })
        return res.status(201).json(newGender)
    },

    getOne: async (req,res) => {
        const {id} = req.params;
        const genderSaved = await Gender.findByPk(id);
        // const gender = await Gender.findOne({
        //     where:{
        //         gender_id: id,
        //     }
        // })
        return res.json(genderSaved)
    }
};


module.exports = GenderController;