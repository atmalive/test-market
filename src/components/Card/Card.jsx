"use client"
import Image from "next/image";
import {FormCounter} from "@/components/FormCounter/FormCounter";
import {useState} from "react";
import {Button} from "@/components/Button/Button";

export const Card = () => {
    const [count, setCount] = useState(5);


    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const price = '1215'

    return (
        <div className='flex flex-col justify-start items-center bg-[#D9D9D9] rounded-2xl w-full max-w-sm sm:max-w-[301px] px-2.5 py-2 gap-1'>
            <Image
                src={'/chimp.png'}
                alt="Описание изображения"
                width={309}
                height={366}
                className="rounded-2xl object-center object-contain w-full"
            />
            <h2 className='text-black text-4xl'>название</h2>
            <div className='w-full text-black'>
                <p>Описание описание описание описание описание. ауццау, описание  fe описание. fefe.fe описание. fefe</p>
            </div>
            <div>
                <span className='text-black text-2xl'>{`ценa: ${price}₽`}</span>
            </div>
            {count >= 1 ?
                <FormCounter setCount={setCount} count={count} increment={increment} decrement={decrement} /> :
                <Button onClick={increment} size={'full'} title={'купить'}/>}
        </div>
    )
}
