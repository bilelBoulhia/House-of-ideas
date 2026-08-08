'use client'
import React, {useEffect} from 'react';
import {m} from "framer-motion";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";




const SearchBar= ({SendsearchQuery}:{SendsearchQuery:(searchquery:string)=> void}) => {

    const [search,setSearch] = React.useState<string>("")
    useEffect(() => {
        const searchRes = async () => {
            SendsearchQuery(search)
        }
        const debounceTimer = setTimeout(searchRes, 300);

        return () => clearTimeout(debounceTimer);
    }, [search]);


    return (
        <>
            <div className="relative m-5 z-10  ">
                <m.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}
                    variants={{
                        hidden: {width: '0', opacity: 1},
                        visible: {width: '100%', opacity: 1}
                    }}
                    transition={{duration: 0.6, ease: 'easeInOut'}}
                    className="flex items-center justify-between bg-white rounded-full overflow-hidden"
                >
                    <input
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full dark:bg-white text-black placeholder-neutral-400  px-4 py-2 focus:outline-none"

                    />

                    <div
                        className="rounded-full  h-10 w-11 flex justify-center items-center"
                    >
                        <MagnifyingGlassIcon className="w-5  text-purple-500  h-5 "/>
                    </div>
                </m.div>

                <m.div
                    className="absolute inset-0  rounded-full"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.2,delay: 0.6}}
                    style={{
                        boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3), 0 0 45px rgba(168, 85, 247, 0.1)',
                        pointerEvents: 'none'
                    }}
                />
            </div>


        </>
    );
};

export default SearchBar;

