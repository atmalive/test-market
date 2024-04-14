"use client"

import {useEffect, useState} from "react";
import {Button} from "@/components/Button/Button";
import {useCart} from "@/contexts/CartContext";
import {clearStorage} from "@/utils/storageUtil";

export const Cart = () => {
    const [count, setCount] = useState(0);
    const {cartItems, addToCart, removeFromCart,  customerPhone = '', updateCustomerPhone } = useCart();





    const handleChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');
        let formattedInputValue = '+';

        if (input.length > 0) {
            formattedInputValue += input.substring(0, 1); // Код страны
        }
        if (input.length > 1) {
            formattedInputValue += '(' + input.substring(1, 4); // Код города/оператора
        }
        if (input.length > 4) {
            formattedInputValue += ')' + input.substring(4, 7); // Первые три цифры
        }
        if (input.length > 7) {
            formattedInputValue += '-' + input.substring(7, 9); // Следующие две цифры
        }
        if (input.length > 9) {
            formattedInputValue += '-' + input.substring(9, 11); // Последние две цифры
        }

        updateCustomerPhone(formattedInputValue);
    };


    const handleSubmit = () => {
        clearStorage()

    }

    useEffect(() => {
        console.log('cartItems', cartItems)
    }, [cartItems]);

    const price = 123123

    return (
        <div
            className='flex flex-col justify-start items-center sm:items-start bg-[#D9D9D9] rounded-2xl w-full md:w-full sm:max-w-[600px] px-3 py-2 gap-3 mb-11 sm:mx-auto'>
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

            <div className='flex w-full justify-between items-center sm:items-end flex-col gap-2 sm:flex-row'>
                <input
                    className="w-full h-14 placeholder:text-white text-3xl text-white bg-[#222] sm: max-w-[300px] border-none rounded-2xl focus:ring-2 focus:ring-gray-300 text-center sm:text-left px-3 mt-3"
                    type="tel"
                    value={customerPhone}
                    onChange={handleChange}
                    placeholder="+7 (__) ___ __-__"
                />
                <Button onClick={handleSubmit} size={'full'} title={'заказать'}/>
            </div>


        </div>
    )
}
