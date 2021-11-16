import React, {useState} from "react"

const lista = [
    {tarea:'salir a comer', complete:false},
    {tarea:'salir a jugar furbol', complete: false},
]

const Formulario = () => {

    const [todo, setTodo] = useState(lista)
    const [datos, setDatos] = useState({
        descripcion: '',
        estado: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Feliciades, To-do enviado')
        console.log(datos)
    }

    const newList = lista.map((item, i) =>
<li key={i} className='mt-3'>{item.tarea}
    <button type='button' onClick={()=> lista.filter((item) => item.complete !== false)}
        >
        Eliminar
    </button>
</li>
)


    return (
        <div className='container'>
        <form className=' mt-5 row ' onSubmit={handleSubmit}  >
            <label className='form-label'>Ingresa descripción To-do</label>
            <input
                type='text'
                name='descripcion'
                className='form-control mb-2'
                onChange={handleInputChange}
            />
            <label className='form-label'>Ingresa estado del To-do</label>
            <select
                name='estado'
                className='mb-4 mt-2 form-select'
                onChange={handleInputChange}
            >
                <option value='completado'> Completado</option>
                <option value='pendiente'>Pendiente</option>
            </select>
            <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>
        <div className='d-flex justify-content-center'>
            <div>
            {
                newList
            }
            </div>
        </div>
    </div>
    )
}

export default Formulario;