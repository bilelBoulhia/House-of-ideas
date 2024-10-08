'use client'
import React, {useEffect} from 'react';
import {m} from "framer-motion";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {ArrowBigDownDash, ArrowBigRight, ArrowBigRightDash, Search, TypeIcon} from "lucide-react";




const SearchBar= ({SendsearchQuery}:{SendsearchQuery:(searchquery:string)=> void}) => {
    const [visible, setVisible] = React.useState(false)
    const [search,setSearch] = React.useState<string>("")
    useEffect(() => {
        const searchRes = async () => {
            SendsearchQuery(search)
        }
        if (!visible) {
            setSearch('')

        }
        const debounceTimer = setTimeout(searchRes, 300);

        return () => clearTimeout(debounceTimer);
    }, [search, visible]);


    return (
        <>
            <div className="relative m-5 z-10 w-full max-w-md mx-auto">
                <m.div
                    initial={false}
                    animate={visible ? 'visible' : 'hidden'}
                    variants={{
                        visible: {width: '100%', opacity: 1},
                        hidden: {width: '100%', opacity: 1}
                    }}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    className="flex items-center  bg-purple-600 rounded-full overflow-hidden"
                >

                    <m.input
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full dark:bg-white text-black  placeholder-gray-600 px-4 py-2 focus:outline-none"
                        initial={{opacity: 0}}
                        animate={{opacity: visible ? 1 : 0}}
                        transition={{duration: 0.2, delay: visible ? 0.1 : 0}}
                    />


                    <m.div
                        className="absolute inset-0 rounded-full"
                        initial={{opacity: 0}}
                        animate={{opacity: visible ? 1 : 0}}
                        transition={{duration: 0.3}}
                        style={{
                            boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3), 0 0 45px rgba(168, 85, 247, 0.1)',
                            pointerEvents: 'none'
                        }}
                    />
                </m.div>
                <m.button
                    onClick={() => setVisible(!visible)}
                    className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10 h-10 text-white bg-purple-600 rounded-full focus:outline-none"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <MagnifyingGlassIcon className="w-5 h-5"/>
                </m.button>
            </div>


        </>
    );
};

export default SearchBar;

