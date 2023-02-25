const Admin = require('./../models/adminModel');
const factory = require('./handlerFactory');

exports.createAdmin = factory.createOne(Admin);
exports.getAllAdmin = factory.getAll(Admin);
exports.getAdmin = factory.getOne(Admin);
exports.deleteAdmin = factory.deleteOne(Admin);
exports.getAdmin = factory.updateOne(Admin);
