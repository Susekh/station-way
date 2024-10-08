import { TramFront } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-orange-600 shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://pexelnougat.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <TramFront/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PexelNougat</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center dark:text-gray-400">
            © 2023 <a href="" className="hover:underline">PexelNougat™</a>. All Rights Reserved.
            </span>
        </div>
    </footer>

  )
}

export default Footer