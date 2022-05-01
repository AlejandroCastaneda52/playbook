const User = require('./../../app/models/User')

describe("unit Test fot User class", () => {
    test('Add getters', () =>{
        const user = new User(1,"AlejandroCastaneda52","Alejandro","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("AlejandroCastaneda52")
        expect(user.name).toBe("Alejandro")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    });
    test('Add setters',() => {
        const user = new User(1,"AlejandroCastaneda52","Alejandro","Bio")
        user.setUsername = "Castaneda"
        expect(user.username).toBe("Castaneda")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})