import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useAuthUser } from 'react-auth-kit'
import { useIsAuthenticated } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'



// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Navbar = () => {
  const { cart, products } = useSelector((state) => state.cart)
  const [openNavigation, setOpenNavigation] = useState(false);
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()
  const signOut = useSignOut()
  const [showModal, setShowModal] = useState(false);

  const showModals = () => {
    setShowModal(!showModal);
  };



  return (
    <>
      <nav className="border-gray-200 bg-gray-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => setOpenNavigation(!openNavigation)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={openNavigation ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className='relative flex md:hidden'>
            <button onClick={showModals}>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true"
                className="bg-white w-10 h-10"
              />
            </button>
            <div className={`${showModal ? "hidden" : "block"} absolute bg-blue-900 px-15 py-4  rounded-xl top-12 right-[80px]`}>
              <ul>
                <li className='px-10'>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Login"> Login </Link>
                </li>
                <li className='text-center'>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/SignUp"> Sign Up </Link>
                </li>
              </ul>
            </div>
            <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Cart">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true"
                className="bg-white w-10 h-10"
              />
            </Link>
          </div>
          <div className={`${openNavigation ? "block" : "hidden"} w-full md:block`} id="navbar-solid-bg">
            <ul className="flex-col md:flex font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 justify-between">
              <div className='md:flex gap-4 items-center justify-end'>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500' to="/"> Home </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to="/Electronics"> Electronics</Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ' to="/Clothing"> Clothing </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ' to="/Other"> Other </Link>
                </li>
              </div>
              <div className='md:flex gap-6 md:order-last items-center'>
                {
                  isAuthenticated() ?
                    (
                      <>
                        <li>
                          <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Cart"> Cart </Link>
                        </li>
                        <li>
                          <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Profile"> Profile </Link>
                        </li>
                        <li>
                          <button className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' onClick={() => signOut()}> Logout </button>
                        </li>
                      </>) :
                    <div className='relative hidden md:flex gap-2'>
                      <button onClick={showModals}>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd26f103d88bd437687c900735ee0981e?placeholderIfAbsent=true"
                          className="bg-white w-10 h-10"
                        />
                      </button>
                      <div className={`${showModal ? "hidden" : "block"} absolute bg-blue-900 px-15 py-4  rounded-xl top-10 right-[65px]`}>
                        <li className='px-10'>
                          <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Login"> Login </Link>
                        </li>
                        <li className='text-center'>
                          <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/SignUp"> Sign Up </Link>
                        </li>
                      </div>
                      <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Cart">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd42cbda32da84ec28dc14ab306566aec?placeholderIfAbsent=true"
                          className="bg-white w-10 h-10"
                        />
                      </Link>
                    </div>
                }
              </div>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar;