import { MARCAS, YEARS, PLANES } from "../constants"
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"


function Formulario() {

    const { hadleChangeDatos ,datos ,error,setError,cotizarSeguro} = useCotizador()

        const handleSubmit = e =>{
            e.preventDefault()
            if(Object.values(datos).includes('')){
                setError('All fields are required');
                return
            }
            setError('')
            cotizarSeguro()

        }

        

    return (
        <>
        {error && <Error/>}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Brand</label>

                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => hadleChangeDatos(e)}
                        value = {datos.marca}
                    >

                        <option value="">-- Choose a brand --</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}

                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Year</label>

                    <select name="year"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => hadleChangeDatos(e)}
                        value={datos.year}
                    >

                        <option value="">-- Choose a Year --</option>
                        {YEARS.map(year => (
                            <option
                                key={year.id}
                                value={year.id}
                            >
                                {year}
                            </option>
                        ))}

                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Choose a Plan</label>

                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}
                            >
                                <label >{plan.nombre}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => hadleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    type="submit"
                    value="Quote" />
            </form>
        </>
    )
}

export default Formulario
