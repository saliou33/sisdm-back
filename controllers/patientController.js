const Patient = require('./../models/patientModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });

    return newObj;
}

// not to be used
exports.createPatient = factory.createOne(Patient);
exports.getAllPatient = factory.getAll(Patient);
exports.getPatient = factory.getOne(Patient);
exports.deletePatient = factory.deleteOne(Patient);

