import LayoutDefault from '@/layouts/default'
import { GetServerSidePropsResult } from 'next';
import { useQRCode } from 'next-qrcode';
import { useEffect, useState } from 'react';

interface IPropsShare {
    data: string
    size: number
    dark: string
    light: string
    margin: number
}


export default function Share(props: IPropsShare) {
    const { SVG } = useQRCode();
    const { data, size, dark, light, margin } = props;
    return (
        <LayoutDefault titlePage='Share'>
            <div className='flex flex-col items-center justify-center mt-10'>
                <SVG
                    text={decodeURI(data)}
                    options={{
                        level: 'M',
                        margin: margin ?? 3,
                        scale: 2,
                        width: size,
                        color: {
                            dark,
                            light
                        }
                    }}
                />
            </div>
        </LayoutDefault>
    )
}

export async function getServerSideProps(context: any): Promise<GetServerSidePropsResult<IPropsShare>> {
    const { data, size, dark, light, margin } = context.query;

    if (data && dark && light && size && margin) {
        return {
            props: {
                data,
                size: parseInt(size),
                dark,
                light,
                margin: parseInt(margin)
            },
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
}