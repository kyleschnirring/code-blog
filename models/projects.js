'use strict';

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    articleUrl: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.STRING
  });
  return Project;
}
