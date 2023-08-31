"use client"
export default function Home({data}){
    return(
        <div>
            {data.frases.map(frase=>(<p key={frase.texto}>{frase.texto}</p>))}
        </div>
    )
}   

export async function getStaticProps(){
    const response = await fetch(`https://pensador-api.vercel.app/?term=São Paulo&max=4`)
    const data = await response.json()
    return{
        props:{
            data
        }
    }
}