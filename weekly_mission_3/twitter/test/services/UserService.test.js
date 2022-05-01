const User = require('../../app/models/User')
const UserService = require ('./../../app/services/UserService')

describe("Test for UserService",()=>{

    test("1. Create a new user using the UserService",() =>{
        const user = UserService.create(1,"AlejandroCastaneda52","Alejandro")

        expect(user.username).toBe("AlejandroCastaneda52")
        expect(user.name).toBe("Alejandro")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in all list",()=>{
        const user = UserService.create(1,"AlejandroCastaneda52","Alejandro")
        const userInfoInList = UserService.getInfo(user)
        
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("AlejandroCastaneda52")
        expect(userInfoInList[2]).toBe("Alejandro")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })

    test("3. Update username",()=>{
        
        const user = UserService.create(1,"AlejandroCastaneda52","Alejandro")
        UserService.updateUsername(user,"Alex")
        expect(user.username).toBe("Alex")
    })

    test("4. Given a list of users give me the list of usernames",() => {
        const user1=UserService.create(1,"AlejandroCastaneda52","Alejandro")
        const user2=UserService.create(1,"AlejandroCastaneda53","Alejandro")
        const user3=UserService.create(1,"AlejandroCastaneda54","Alejandro")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        

        expect(usernames).toContain('AlejandroCastaneda52')
        expect(usernames).toContain('AlejandroCastaneda53')
        expect(usernames).toContain('AlejandroCastaneda54')

    })
})