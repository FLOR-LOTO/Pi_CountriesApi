const express = require('express');
const { Country } = require('../db');


const getAllCountries = async (req, res) => {
    try {
        const { id } = req.query;

        if(id) {
            const upperCaseId = id.toUpperCase();
            console.log("Searching for:", upperCaseId);
            const country = await Country.findOne({
                where: { id: upperCaseId}
            }); // consulto todos los paises en la DB

            if(!country) {
                return res.status(404).json({message: 'No countries found'})
            }
            res.status(200).json(country);
        } else {
            const countries = await Country.findAll();
            res.status(200).json(countries);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = getAllCountries;