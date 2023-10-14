import { electronics } from "./List.jsx";

function Diccionario() {

    const tipo = electronics.filter(electronics =>
        electronics.tipo === 'smartphone'
        );


        const lista = tipo.map(electronics =>
            <li>
                <p>
                    <b>{electronics.sku}:</b><br />
                    {' ' + electronics.nombre + ' '}<br/>
                    {' ' + electronics.descripcion + ' '}<br></br>
                    {' ' + electronics.ram + ' '}<br/>
                    {' ' + electronics.precio + ' '}<br/>

                </p>
            </li>
            );
    return (
        <>
        <p>Electronicos</p>
        <div>
            <ul>{ lista }</ul>
        </div>





        </>
    )
}

export default Diccionario;