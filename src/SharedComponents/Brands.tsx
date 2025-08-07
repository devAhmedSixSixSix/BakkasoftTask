import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react'

const Brands = () => {
    const { brands } = useTheme();
    return (
        <div className="container flex flex-wrap justify-between items-center">
            {brands.map((i, index) => (
                <Image
                    className="w-fit"
                    key={index}
                    src={i}
                    alt="Brand Logo"
                    width={60}
                    height={60}
                    // loading="lazy"

                />
            ))}
        </div>
    )
}

export default Brands