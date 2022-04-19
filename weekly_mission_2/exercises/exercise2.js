const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]
//1 Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
//explorers.forEach(elemento => console.log(elemento.name))

//2 Imprime el stack de cada explorer, usa FOR EACH
//explorers.forEach(elemento => console.log(elemento.name) + console.log(elemento.stack))

//3 Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
//const lista = explorers.map(elemento => console.log(elemento.name) + console.log(elemento.stack))

//4 Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
//const js = explorers.filter((stack) => stack.stack.includes("js"))
//console.log(js)

//5 Busca el primer explorer que sea de la CDMX, usa FIND
//const CDMX = explorers.find((ciudad) => (ciudad.name) + (ciudad.city = "CDMX"))
//console.log(CDMX)

//6 Obtén la suma de todos los exercises_completed, usa REDUCE
//const ejercicios = explorers.reduce((acc,elemento) => acc + elemento.exercises_completed,0)
//console.log(ejercicios)

//7 Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
//const ejerciciosFinalizados = explorers.some((e) => e.missions.frontend.exercisesFinished === true)
//console.log(ejerciciosFinalizados)

//8 Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
//const finalizado = explorers.every((f) => f.missions.onboarding.isFinished === true)
//console.log(finalizado)