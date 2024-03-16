"use client"
import { VscAccount } from "react-icons/vsc";
import { MdLuggage } from "react-icons/md";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Reserva() {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen max-h-screen">
            <nav className="flex flex-row justify-start items-center w-full h-20 mb-8">
                <div className="flex flex-col justify-center items-center w-3/12 h-full">
                    <VscAccount className="flex flex-col justify-center items-center w-6 h-6 mb-2 cursor-pointer" />
                    <label className="text-xs flex flex-row justify-start items-center cursor-pointer">
                        Pepito Florez
                    </label>
                </div>
                <h1 className="flex flex-row justify-center items-center w-6/12 h-full text-xl">
                    Reservas
                </h1>
                <div className="flex flex-col justify-center items-center w-3/12 h-full">
                    <IoAddCircleOutline className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer" />
                </div>
            </nav>
            <section className="flex flex-row justify-start items-center w-10/12 h-8 mb-8">
                <div className="flex flex-col justify-center items-center w-3/12 h-full pl-5">
                    <label className="text-xs flex flex-row justify-start items-center w-full">Consulta
                    </label >
                    <input type="text" className="border rounded-md flex flex-row justify-start items-center w-full h-20 pl-2 py-1 text-xs" />
                </div>

            </section >
            <table className="flex flex-col justify-start items-start w-full h-auto mb-8">
                <thead className="flex flex-row justify-center items-center w-full h-auto">
                    <tr className="flex flex-row justify-center items-center w-full h-8">
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">ID</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Destinos</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">...</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Fecha</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Estado</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Equipaje</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Asientos</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Pago</th>
                        <th className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Editar</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col justify-center items-center w-full h-auto">
                    <tr className="flex flex-row justify-center items-center w-full h-8 hover:bg-sky-300" >
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">1</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Colombia</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">...</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">02/01/2024</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Por pagar </td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdLuggage /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdOutlineAirlineSeatReclineExtra /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><BsCashCoin /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><TbEdit /></td>
                    </tr>
                    <tr className="flex flex-row justify-center items-center w-full h-8 hover:bg-sky-300" >
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">2 </td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Alemania</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">...</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">24/02/2024</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Registrado </td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdLuggage /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdOutlineAirlineSeatReclineExtra /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><BsCashCoin /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><TbEdit /></td>
                    </tr>
                    <tr className="flex flex-row justify-center items-center w-full h-8 hover:bg-sky-300" >
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">3</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Brazil</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">...</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">11/04/2024</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Por pagar </td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdLuggage /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdOutlineAirlineSeatReclineExtra /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><BsCashCoin /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><TbEdit /></td>
                    </tr>
                    <tr className="flex flex-row justify-center items-center w-full h-8 hover:bg-sky-300" >
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">4</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Canada</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">...</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">21/02/2024</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs">Por Asientos </td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdLuggage /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><MdOutlineAirlineSeatReclineExtra /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><BsCashCoin /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs"><TbEdit /></td>
                    </tr>
                    <tr className="flex flex-row justify-center items-center w-full h-8 hover:bg-sky-300" >
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs ">6</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs ">España</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs ">...</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs ">30/02/2024</td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs ">Por pagar </td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs "><MdLuggage /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs "><MdOutlineAirlineSeatReclineExtra /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs "><BsCashCoin /></td>
                        <td className="flex flex-row justify-center items-center w-1/12 h-full border-b border-zinc-500 mr-2 text-xs "><TbEdit /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 