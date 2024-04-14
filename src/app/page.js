"use client"
import Image from "next/image";
import {Card} from "@/components/Card/Card";
import {Cart} from "@/components/Cart/Cart";
import {Review} from "@/components/Review/Review";
import {useEffect, useState} from "react";

export default function Home() {
    const [htmlContent, setHtmlContent] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('url-to-your-api');
            const data = await response.json();
            setHtmlContent(data.htmlContent);
        };

        fetchData();
    }, []);



  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-32">

        <div className='flex flex-col md:flex-row gap-5'>
            <Review />
            <Review />
        </div>

        <div>
            <Cart/>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>


    </main>
  );
}
