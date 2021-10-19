class User {
  constructor(email, birthdate, firstName, lastName, gender, password,isPremium) {
    this.email = email;
    this.artist = birthdate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.password = password;
    this.isPremium = isPremium;
  }
}

module.exports.User = User;

