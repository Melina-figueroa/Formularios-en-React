import './MyForm.css'
import './BotonSubmit.css'
import { useState } from "react"

const MyForm = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [dni, setDni] = useState('');



    const [personas, setPersonas] = useState([]);//variable y arreglo donde se guardaran los datos de cada persona//

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(apellido);
        console.log(edad);
        console.log(nacionalidad);
        console.log(dni);

        setPersonas([{ nombre, apellido, edad, nacionalidad, dni }, ...personas]);//limpia el input cuando se realiza una nueva carga//
        console.log(personas);
        setNombre('');
        setApellido('');
        setEdad('');
        setNacionalidad('');
        setDni('');

    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div className='divInput listaPersonas'>
                    <label>
                        Nombre:
                        <input type="text" value={nombre} onChange={(e) => (setNombre(e.target.value))} placeholder="Ingrese su nombre" className='ordenLabel capitalize'></input>
                    </label>
                    <label>
                        Apellido:
                        <input type="text" value={apellido} onChange={(e) => (setApellido(e.target.value))} placeholder="Ingrese su apellido" className='ordenLabel capitalize'></input>
                    </label>
                    <label>
                        Edad:
                        <input type="number" value={edad} onChange={(e) => (setEdad(e.target.value))} placeholder="Ingrese su edad" className='ordenLabel'></input>
                    </label>
                    <label>
                        Nacionalidad:
                        <input type="text" value={nacionalidad} onChange={(e) => (setNacionalidad(e.target.value))} placeholder="Ingrese su nacionalidad" className='ordenLabel capitalize'></input>
                    </label>
                    <label>
                        DNI:
                        <input type="number" value={dni} onChange={(e) => (setDni(e.target.value))} placeholder="Ingrese su DNI" className='ordenLabel'></input>
                    </label>
                    <button type="submit" className='botonSubmit'>Enviar formulario</button></div>
            </form>

            {personas.map(personas => (
                <div className='listaPersonas'>
                    <div>{`Nombre y Apellido: ${personas.nombre} ${personas.apellido}`}</div>
                    <div>{`Edad: ${personas.edad} `}</div>
                    <div>{`Nacionalidad: ${personas.nacionalidad} `}</div>
                    <div>{`DNI: ${personas.dni} `}</div>
                </div>

            ))}
        </div>

    )
}

export default MyForm;