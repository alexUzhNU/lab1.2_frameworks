class MyModule{
    _name = ""
    _surname = ""
    constructor(_name, _surname) {
    this.name = _name;
    this.surname = _surname;
    }

    getGreetingMessage(){
    return `Hello, ${this.name} ${this.surname}`;
    }
}

module.exports.MyModule = MyModule;