import * as models from '../db/models'
import data from './pokedex.json'

const trainers = [
    {
        nombre: "Ash",
        edad: 10,
        ciudad: "Pueblo Paleta"
    },
    {
        nombre: "Profesor Oak",
        edad: 60,
        ciudad: "Pueblo Paleta"
    },
    {
        nombre: "Rojo",
        edad: 14,
        ciudad: "Pueblo Azul"
    },
    {
        nombre: "Azul",
        edad: 13,
        ciudad: "Pueblo Rojo"
    },
    {
        nombre: "Guayo",
        edad: 16,
        ciudad: "Pueblo Lavanda"
    },
    {
        nombre: "Lance",
        edad: 15,
        ciudad: "Ciudad Malva"
    },
]

export const populateRun = async () => {
    console.log("writing data...")
    await deleteAll()
    let types = await insertTypes()
    let pokemones = await insertPokemons(types)
    await insertTrainers(pokemones)
    console.log("writing finished")
}

const deleteAll = async () => {
    await models.TypeModel.deleteMany()
    await models.PokemonModel.deleteMany()
    await models.EntrenadorModel.deleteMany()
}

const insertTypes = async () => {
    let types = {}    
    data.map( current => current.type.map(t => types[t] = t) )
    await Promise.all(Object.keys(types).map( async t => {
        const res = await models.TypeModel.create({name: t})
        types[t] = res._id
    }))
    return types
}

const insertPokemons = async (types) => await Promise.all(data.map( async d => {
    const res = await models.PokemonModel.create(
        {
            name: d.name,
            type: d.type.map( t => types[t]),
            speed: d.base.Speed,
            spdefense: d.base['Sp. Defense'],
            spattack: d.base['Sp. Attack'],
            defense: d.base.Defense,
            attack: d.base.Attack,
            hp: d.base.HP,
        }
    )
    return res._id
}))

const insertTrainers = async (pokemonList = []) => await Promise.all(trainers.map( async t => {
    const pokemones = [1, 2, 3, 4, 5, 6].map(()=> pokemonList[Math.floor(Math.random()*pokemonList.length)])
    await models.EntrenadorModel.create({
        ...t,
        pokemones
    })
}))