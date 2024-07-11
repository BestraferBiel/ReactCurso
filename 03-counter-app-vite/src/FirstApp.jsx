import { Fragment } from "react";

const newMensaje = 'Estamos probando esto de React';
// Como usar o enviar objetos a un componente
const obj = {
    nombre: 'Gabriel',
    direcion: 'Calle 123',
    edad: 30
}
const SumarNumeros = (arreglo) => {
    let resul=0;
    for (let i = 0; i < arreglo.length; i++) {
        resul = resul+ arreglo[i];
    }
    return resul;

}
//SumarNumeros([1,2,3,4,5,6,7,8,9,10]);

// Lo mismo que usar fragment es usar <> </> para envolver los elementos
export const FirstApp = () => {

    return (
        <Fragment>
        <h1>{newMensaje} </h1>
        <p>{obj.nombre} </p>
        <p>{obj.edad} </p>
        <code>{JSON.stringify(obj)}</code>
        <p>Este es un párrafo</p>
        <p>La suma de los numero del arreglo es:{SumarNumeros([1,2,3,4,5,6,7,8,9,10,13,55])} </p>
        </Fragment>
        );
}


export const SeApp = ({title}) => {

    return(
        <>
        <h1>{title}</h1>        
        <p>Esto es el uso de props</p>
        </>
    );

}