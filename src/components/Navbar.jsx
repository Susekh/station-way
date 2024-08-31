import { TramFront } from "lucide-react"
import { Link } from "react-router-dom"


const navLinks = [
    {
        id : 1,
        content : "HOME",
        slug : "/"
    },
    {
        id : 2,
        content : "MAPS",
        slug : "/maps"
    }
]

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-orange-600 text-xl">
        <div>
            <TramFront className="w-8 h-8"/>
        </div>
        <div className="flex gap-8">
            {
                navLinks.map((item) => (<Link key={item.id} to={item.slug}>{item.content}</Link>))
            }
            <a href="#aboutUs">ABOUT US</a>
        </div>
    </nav>
  )
}

export default Navbar