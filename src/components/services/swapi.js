export default class SwapiService{

    _apiBase='https://swapi.dev/api';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `,received ${res.status}`);
        }
        return await res.json()
    }

    async getAllPeople(){
        const res =await this.getResource(`/people/`)
        return res.results
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`)
    }
    async getPlanets(){
        const resPlanets=await this.getResource(`/planets/`)
        return resPlanets.results
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}`)
    }
    async getAllStarships(){
        const res=await this.getResource(`/starships/`)
        return res.results
    }
    getStarship(id){
        return this.getResource(`/starships/${id}`)
    }
}

const swap=new SwapiService();

swap.getAllPeople()
    .then((people)=>{
        console.log(people)
    })

swap.getPerson(3)
    .then((person)=>{
        console.log(person.name)
    })

swap.getPlanets()
    .then((planets)=>{
        console.log(planets)
    })

swap.getPlanet(3)
    .then((planet)=>{
        console.log(planet.name)
    })
swap.getAllStarships()
    .then((starships)=>{
        console.log(starships)
    })
swap.getStarship(3)
    .then((starship)=>{
        console.log(starship.name)
    })



