export default class Pokemon{
    constructor (name){
        this.name = name
    }
    sayHello(message){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
}