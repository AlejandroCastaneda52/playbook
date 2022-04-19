const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return 
    }
}

const Issue={
    title: "Issue 0",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 4,
    labels: "bug",
    author: "AlejandroCastaneda52",
    dateCreated: "24/04/2022",
    lastUpdated: "25/04/2022",
    getTitleAndAuthor(){
        return `title: ${this.title}  author: ${this.author}`
    },
    getGeneralInfo(){
        return `Issue ${this.name} fue creado por ${this.author} bajo el label de ${this.labels}`
    }
}
   
const PullRequest ={
    title: "Ejercicio",
    branchName: "master",
    dateCreated: "26/04/2022",
    status: "En revisión",
    repositoryNameAssociated: "LauncXCopia",
    getStatus(){
        return `El pull_request ${this.title} se encuentra ${this.status}`
    },
    getTitleAndAuthor(){
        return `title: ${this.title}  author: ${this.author}`
    }
}


//Twitter

const TwitterUser={
    user: "@Alejandro",
    username: "@Alejandro52",
    bio: "Mi meta es seguir con el Dios Plan",
    dateCreated: "2/2/2022",
    followers: 450,
    following: 30,
}
const TwitterTrending={
    HashTag: "#FelizMartes",
    numTrending: 5,
    TotalTweets: 14800,
    theme: "Entretenimiento"
}
const TwitterHashTag={
    Theme:["Para ti","Tendencias","COVID-19","Noticias","Deportes","Entretenimiento"]
}


//Facebook
const FacebookUser={
    user: "Alejandro CR",
    friends: 149,
    theme:["Publicaciones","Información","Amigos","Fotos","Videos","Registros","Más"],
}
const FacebookPost={
    user: "Alejandro CR",
    dateCreated: "Ayer",
    message: "Miren mi pase de abordar",
    picture: "foto del pase",
    reactions:{
        like: 5,
        corazon: 40,
        divertido: 1,
        triste: 0,
        enojado: 0
    }
}
const FacebookBiography={
    friends:["Todos los amigos","Cumpleaños","Ciudad actual","Ciudad de origen","Seguidores","Seguidos"],
    fotos:["Fotos en las que apareces","Tus fotos","Álbumes"],
    apps:["Trove","War Robots","Paladins","Anthem"]
}

//Uber
const UberProfile={
    name: "Alejandro Castañeda",
    puntuacion: 5.0,
    cajas:{
        Ayuda:["Ayuda con un viaje","Cuenta y opciones de pago","Más","Tu guía Uber","Uber Rewards","Regístrate","Accesibilidad","Emergencia","Uber Moto","información sobre el pase"],
        Pago: ["Efectivo","Agregar método de pago","Cupones","Agregar código del cupón","Agregar un código de promo"],
    },
    viajes:{
        dateCreated: "10/04/2022 12:47 am",
        cobro: 277.21,
    },
    Mensajes:[],
    Configuracion:[],
    Legal:[]
} 
console.log(UberProfile);