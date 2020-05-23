
const axios = require ('axios')

const argv = require ('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;


const encodedUrl = encodeURI (argv.direccion)
console.log(encodedUrl)


const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {'X-RapidAPI-Key': '53f8d92fe9msh6ea63c0916fab12p1e52afjsn9971ea949402'}
  });

  instance.get()
        .then(resp=>{
            console.log(resp.data.Results[0])
        })
        .catch(err=>{
            console.log('Error!!',err)
        })