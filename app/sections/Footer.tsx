import {Instagram, Tiktok} from "@/components/ui/Icons";


export default function Footer() {
    return (


        <footer id='ContactUs' className="border-gray-800 mt-4 border-t-[1px]">
            <div className="mx-auto w-full px-2 p-1 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 text-xs dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://nextjs.org/" className="hover:underline">Next js</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-white">Contact
                                Us</h2>
                            <ul className="text-gray-500 text-xs dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/bilelBoulhia"
                                       className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a  className="hover:underline">hoi.univalger3@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hover:underline">House of ideas</a>. No Rights Reserved.
          </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">


                        <a href="https://www.instagram.com/hi.club.alger3/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <Instagram/>
                        <span className="sr-only">Instagram page</span>
                        </a>



                        <a href="https://www.tiktok.com/@clubhouseofideas" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <Tiktok/>
                            <span className="sr-only">Tiktok</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    )
}

