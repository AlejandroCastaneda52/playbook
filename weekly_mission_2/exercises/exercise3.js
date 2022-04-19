
class Github{
    constructor(name,author,language, numberOfCommits, stars, forks, issues_open,issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_close = issues_close
        this.issues_open = issues_open
    }

    get getstars(){
        return this.stars
    }
    

    get getforks(){
        return this.forks
    }
    set setforks(forks){
        this.forks = forks
    }
}
const Alejandro = new Github ("LaunchX","AlejandroCastaneda52","JavaScript",10,199,299,10,10)

console.log(Alejandro)
console.log(Alejandro.getstars)

Alejandro.setforks = 4000
console.log(Alejandro.getforks)



class Github2{
    constructor(user, username, stars){
        this.user= user
        this.username = username
        this.stars = stars
    }

    get getusername(){
        return this.username
    }
}

class Twitter extends Github2{
}

const AlejandroTwitter = new Twitter("Alejandro","AlejandroCastaneda52",99,"@AlejandroCR")
console.log(AlejandroTwitter)
console.log("Username: " + AlejandroTwitter.getusername)

