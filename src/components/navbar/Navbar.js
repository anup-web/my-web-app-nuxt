import Link from "next/link"


const Navbar = () => {
  return (
    <>
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <div
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              Welcome 
            </div>
          </Link>
          
        </div>
        <div className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" id="example-navbar-warning">
         
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">            
            <li className="flex items-center">
              <div className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">                
                   <Link href="/product"><span className="inline-block ml-2">Product</span></Link>
              </div>
            </li>

            <li className="flex items-center">
              <div className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">                
                    <Link href="/contact"><span className="inline-block ml-2">Contact Us</span></Link>
              </div>
            </li>

            <li className="flex items-center">
              <div className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">                
                    <Link href="/about"><span className="inline-block ml-2">About Us</span></Link>
              </div>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar