const pick = require('lodash.pick');

module.exports = fields => {
  return {
    transform(doc, ret) {
      return {
        ...pick(ret, fields),
        id: ret._id.toString()
      };
    }
  };
};