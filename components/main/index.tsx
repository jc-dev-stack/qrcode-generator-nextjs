import { useQRCode } from "next-qrcode";
import React, { useEffect, useState } from "react";
import Input from "../input";
import Select, { PropsOption } from "../select";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import Link from "next/link";
export default function Main() {
    const { SVG } = useQRCode();
    const [text, setText] = useState("");
    const [size, setSize] = useState<number>(300);
    const [margin, setMargin] = useState<number>(0);
    const [url, setUrl] = useState("");
    const [colorOne, setColorOne] = useState<string>('#000000');
    const [colorTwo, setColorTwo] = useState<string>('#ffffff');
    const options: PropsOption[] = [
        {
            value: 200,
            text: "200x200",
        },
        {
            value: 300,
            text: "300x300",
        }
    ]

    useEffect(() => {
        if (window) {
            setUrl(window.location.href);
        }
    }, [])

    const getUrlShare = () => {
        return `${url}share?data=${text}&size=${size}&dark=${colorOne.replace("#", '')}&light=${colorTwo.replace("#", '')}&margin=${margin}`;
    }
    return (
        <main className='flex justify-center items-center py-20'>
            <div className='p-10 rounded-md border border-slate-300 md:w-1/2 text-black'>
                <h1 className='text-3xl mb-20 text-center font-light'>Qrcode Generator</h1>

                <div className="grid md:grid-cols-3 md:gap-10">
                    <div>
                        <h1 className="font-light text-3xl border-b border-slate-300 mb-5">Insira o texto</h1>
                        <Input id="text" textLabel="Texto" value={text} onChange={(e) => { setText(e.target.value) }} />
                    </div>
                    <div>
                        <h1 className="font-light text-3xl border-b border-slate-300 mb-5">Ajusta a margem</h1>
                        <Input id="margem" textLabel="Margem" type={"number"} value={margin} onChange={(e) => { setMargin(parseInt(e.target.value)) }} />
                    </div>
                    <div>
                        <h1 className="font-light text-3xl border-b border-slate-300 mb-5">Ajuste o tamanho</h1>
                        <Select options={options} id={"tamanho"} textLabel={"Tamanho"} value={size} onChange={(e) => { setSize(parseInt(e.target.value)) }} />
                    </div>
                </div>
                <div className="md:mt-0 mt-10">
                    <h1 className="font-light text-3xl border-b border-slate-300 mb-5">Mude as cores</h1>
                    <Input id={"color1"} textLabel={"#1"} type={"color"} className={"bg-white"} value={colorOne} onChange={(e) => { setColorOne(e.target.value) }} />
                    <Input id={"color2"} textLabel={"#2"} type={"color"} className={"bg-white"} value={colorTwo} onChange={(e) => { setColorTwo(e.target.value) }} />
                </div>
                <div>
                    <h1 className="font-light text-3xl border-b border-slate-300 mb-5">Qrcode</h1>
                    {text ?
                        <SVG
                            text={text}
                            options={{
                                level: 'M',
                                margin: margin ?? 3,
                                scale: 2,
                                width: size,
                                color: {
                                    dark: colorOne,
                                    light: colorTwo,
                                },
                            }}
                        />
                        :
                        <div className="mt-10 h-80">
                            <div className="border border-slate-300 flex justify-center items-center" style={{ height: size, width: size }}>
                                <h1 className="underline">{size}x{size}</h1>
                            </div>
                        </div>
                    }
                    <h1 className="font-light text-2xl border-b mt-5 border-slate-300 mb-5">Compartilhar em</h1>
                    <div className="flex flex-col md:flex-row mt-5">
                        <WhatsappShareButton url={getUrlShare()}>
                            <div className="flex bg-green-500 p-2 px-5 md:mr-5 rounded-md items-center justify-between text-white">
                                <span className="mr-2">Whatsapp</span>
                                <WhatsappIcon size={32} round />
                            </div>
                        </WhatsappShareButton>
                        <FacebookShareButton url={getUrlShare()}>
                            <div className="flex bg-blue-500 p-2 px-5 md:mr-5 md:mt-0 mt-2 justify-between  rounded-md items-center text-white">
                                <span className="mr-2">Facebook</span>
                                <FacebookIcon size={32} round />
                            </div>
                        </FacebookShareButton>
                    </div>
                </div>
            </div>
        </main>
    )
}

/**
 * 
 * <Link href={getUrlShare()} className={"flex items-center mt-5 p-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-700 hover:transition-all w-fit"}>
                        <span className="mr-2">Visualizar</span>
                    </Link>
 */

/**
 * <EmailShareButton url={getUrlShare()}>
        <div className="flex bg-gray-500 p-2 px-5 md:mr-5 md:mt-0 mt-2 justify-between rounded-md items-center text-white">
            <span className="mr-2">Email</span>
            <EmailIcon size={32} round />
        </div>
    </EmailShareButton>
 */