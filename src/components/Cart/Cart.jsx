"use client"

import {useState} from "react";
import {Button} from "@/components/Button/Button";

export const Cart = () => {
    const [tel, setTel] = useState('+7 (__) ___ __-__')
    const [count, setCount] = useState(5);


    const handleChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');
        let formattedInputValue = '+';

        if (input.length > 0) {
            formattedInputValue += input.substring(0, 1); // Код страны
        }
        if (input.length > 1) {
            formattedInputValue += ' (' + input.substring(1, 4); // Код города/оператора
        }
        if (input.length > 4) {
            formattedInputValue += ') ' + input.substring(4, 7); // Первые три цифры
        }
        if (input.length > 7) {
            formattedInputValue += '-' + input.substring(7, 9); // Следующие две цифры
        }
        if (input.length > 9) {
            formattedInputValue += '-' + input.substring(9, 11); // Последние две цифры
        }

        setTel(formattedInputValue);
    };


    const handleSubmit = () => {

    }

    const price = '1215'

    return (
        <div
            className='flex flex-col justify-start items-center sm:items-start bg-[#D9D9D9] rounded-2xl w-full sm:max-w-[600px] px-3 py-2 gap-3 mb-11 sm:mx-auto'>
            <h2 className='text-center sm:text-left text-black text-3xl'>Добавленные товары</h2>
            <div className='w-full text-black flex flex-col gap-1 sm:max-w-[250px]'>
                <div className='w-full flex flex-nowrap justify-between text-black text-xl'>
                    <p>item</p>
                    <span>{`x${count}`}</span>
                    <span className=''>{`${price}₽`}</span>
                </div>

                <div className='w-full flex flex-nowrap justify-between text-black text-xl'>
                    <p>item</p>
                    <span>{`x${count}`}</span>
                    <span className=''>{`${price}₽`}</span>
                </div>
            </div>

            <div className='flex w-full justify-between flex-col gap-2 sm:flex-row'>
                <input
                    className="w-full h-14 text-3xl text-white bg-[#222] sm: max-w-[300px] border-none rounded-2xl focus:ring-2 focus:ring-gray-300 text-center sm:text-left px-3 mt-3"
                    type="tel"
                    value={tel}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} size={'full'} title={'заказать'}/>
            </div>


        </div>
    )
}
