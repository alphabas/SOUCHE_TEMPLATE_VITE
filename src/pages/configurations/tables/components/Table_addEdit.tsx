import { useState } from "react";
import Breadcrumb from "../../../../components/Breadcrumb";

const Table_addEdit = () => {
    const [currentDataGenerator, setcurrentDataGenerator] = useState([]);
    const [numberFields, setNumberFields] = useState(3);
    const [count, setCount] = useState(0);


    //function pour recuperer la valeur saisie dans le champ nombre folio 
    const handleMaxfields = (e) => {
        console.log("========<>", e);
        const newCount = parseInt(e);
        setCount(newCount);
        generatorElementRows(newCount);
        // setFocusedIndex(index)
    };



    //fonction pour generer autant des  champs s
    const generatorElementRows = (accArr) => {
        const currElementArr = [];
        for (let i = 0; i < accArr; i++) {
            currElementArr.push({ id: i, folio: "", nombre_pages: "" });
        }
        setcurrentDataGenerator(currElementArr);
    };

    return (
        <>
            <Breadcrumb pageName="Creation dUne table" currentPage="Tables" linkCurrent="/table/currentTableList" />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Information de base
                            </h3>
                        </div>
                        <form action="#">
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Nombre des champs
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Nbre de champs"
                                            value={numberFields} onChange={(e) => {
                                                setNumberFields(e.target.value)
                                                handleMaxfields(e.target.value)
                                            }}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Email <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>



                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col gap-9">
                    {/* <!-- Sign In Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Information table
                            </h3>
                        </div>
                        <form action="#">
                            <div className="p-6.5">

                                <div className="table-responsive">
                                    {/* <table className="table table-bordered table-striped table-hover"> */}
                                    <table className="w-full table-auto table-bordered table-striped table-hover">

                                        <thead>
                                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                                <th scope="col">##</th>
                                                <th scope="col">
                                                    Designation
                                                </th>
                                                <th scope="col">
                                                    Type
                                                </th>
                                                <th scope="col">
                                                    Valeur
                                                </th>
                                                <th className="py-4 px-4 font-medium text-black dark:text-white">
                                                    Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {currentDataGenerator.map((acc, index) => {
                                                const isLastRow = index === currentDataGenerator.length - 1; // pour trouver une derniere ligne

                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your first name"
                                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your first name"
                                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                            />
                                                            {/* <input
                                                                type="text"
                                                                className="form-control rounded-0"
                                                                id="staticEmail"

                                                                value={acc?.folio}
                                                                onChange={(e) => {
                                                                    const newInputs = [...currentDataGenerator];
                                                                    newInputs[index].folio = e.target.value;
                                                                    setcurrentDataGenerator(newInputs);
                                                                }}
                                                            /> */}
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your first name"
                                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                                            />
                                                            {/* <input
                                                                type="text"
                                                                className="form-control rounded-0"
                                                                id="staticEmail"
                                                              
                                                                value={acc.nombre_pages}
                                                                onChange={(e) => {
                                                                    const newInputs = [...currentDataGenerator];
                                                                    newInputs[index].nombre_pages = e.target.value;
                                                                    setcurrentDataGenerator(newInputs);
                                                                }}
                                                            /> */}
                                                        </td>
                                                        <td>
                                                            {/* {
                                    isLastRow ?
                                  <Button
                                    icon="pi pi-plus"
                                    size="small"
                                    className="rounded-0"
                                    severity="primary"
                                    style={{ backgroundColor: "#0c2448" }}
                                    aria-label="supprimer"
                                    onClick={(e) => handleAdd(e)}
                                  /> : null
                                }
                                  <Button
                                    icon="pi pi-trash"
                                    size="small"
                                    className="rounded-0 ml-2"
                                    severity="danger"
                                    type="button"
                                    onClick={(e) => handleRemove(e,acc.id)}
                                    aria-label="supprimer"
                                  /> */}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Table_addEdit;
