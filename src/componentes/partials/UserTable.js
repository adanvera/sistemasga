import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import swal from 'sweetalert';


const urlUsers = "http://localhost:4000/api/usuario/"


const UserTable = () => {

    const [usuario, setUsurio] = useState([])


    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(urlUsers),
                    data = await res.json()
                setUsurio(data.usuarios)
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    }, [])

    const columns = [
        {
            name: "nombre",
            label: "Nombre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "correo",
            label: "Correo",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "rol",
            label: "ROl",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "acciones",
            label: "Acciones",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const seleccionarArtista = async () => {
        swal({
            title: 'hola',
            icon: 'success'
        })
    }


    const options = {

        textLabels: {
            body: {
                noMatch: "Ups, no se encontro ningun usuario",
                toolTip: "Sort",
                columnHeaderTooltip: column => `Sort for ${column.label}`
            },
            pagination: {
                next: "Siguiente",
                previous: "Previous Page",
                rowsPerPage: "Filas por pagina:",
                displayRows: "de",
            },
            toolbar: {
                search: "Search",
                downloadCsv: "Download CSV",
                print: "Print",
                viewColumns: "View Columns",
                filterTable: "Filter Table",
            },
            filter: {
                all: "All",
                title: "FILTERS",
                reset: "RESET",
            },
            viewColumns: {
                title: "Mostrar columnas",
                titleAria: "Mostrar/ocultar Columnas",
            },
            selectedRows: {
                text: "row(s) selected",
                delete: "Delete",
                deleteAria: "Delete Selected Rows",
            },
        },
        responsive: "stacked",
        download: false,
        print: false,
        filterType: 'none',


    }

    return (
        <MUIDataTable
            title={"Lista de usuarios"}
            data={usuario}
            columns={columns}
            options={options}
        />
    );
}

export default UserTable;