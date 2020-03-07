var user = require("./user/");

var vanya = new user.User("Васян");
var petya = new user.User("Petya");

vanya.hello(petya);