import Link from "next/link";
import {LucidePlus} from "lucide-react";

export default function Navbar(){
    return(
        <>
            <header  className=" mb-7">
                <nav>
                    <div className="max-w-3xl mx-auto px-3 py-5 flex items-center">
                        <Link href="/" className="md:text-3xl text-2xl text-black dark:text-white font-bold">
                            Todo
                        </Link>
                        <button className="bg-teal-800 dark:bg-white text-white dark:text-black px-7 py-2 rounded-lg font-medium ml-auto flex gap-2 items-center text-sm">
                            Add Todo
                            <LucidePlus/>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}