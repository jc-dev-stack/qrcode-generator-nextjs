import { useQRCode } from "next-qrcode";
import React, { useState } from "react";
import Input from "../input";
import Select, { PropsOption } from "../select";

export default function Main() {
    const { SVG } = useQRCode();
    const [text, setText] = useState("");
    const [size, setSize] = useState<number>(300);
    const [margin, setMargin] = useState<number>(0);
    const [colorOne, setColorOne] = useState("#000000");
    const [colorTwo, setColorTwo] = useState("#ffffff");
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
                    <Input id={"color1"} textLabel={"#1"} type={"color"} className={"bg-white"} value={`${colorOne}`} onChange={(e) => { setColorOne(e.target.value) }} />
                    <Input id={"color2"} textLabel={"#2"} type={"color"} className={"bg-white"} value={`${colorTwo}`} onChange={(e) => { setColorTwo(e.target.value) }} />
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
                </div>

            </div>
        </main>
    )
}