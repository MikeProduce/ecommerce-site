import React, { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import { Pagination } from '../../components/Pagination.jsx';
import { ProductCard } from '../../components/ProductCard.jsx';
import { Search } from '../../components/Search.jsx';
import useProductsApi from '../../components/API.jsx';
import { reduxStore } from '../../app/ReduxStorePurchaseHandle.jsx';





export const Home = () => {
  const { purchaseHandler } = reduxStore()
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()
  const { products, error, isLoading } = useProductsApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsperPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);


  const filteredProductsMemo = useMemo(() => {
    return products;
  }, [products]);

  useEffect(() => {
    setFilteredProducts(filteredProductsMemo);
  }, [filteredProductsMemo]);

  const Clothes = products.filter((Clothing) => {
    console.log(Clothing.category)
    const names = Clothing.category
    return ['mens-shirts', 'mens-shoes', 'women-shoes'].indexOf(names) !== -1;
  })

  const electronics = products.filter((electronics) => {
    const category = electronics.category
    return ['smartphones', 'laptops'].indexOf(category) !== -1;


  })

  const Others = products.filter((Other) => {
    const names = Other.category
    return ['furniture', 'lighting', 'motorcycle', 'automotive'].indexOf(names) !== -1


  })
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getCategoryProducts = () => {
    if (activeCategory === 'clothing') {
      return Clothes;
    }
    if (activeCategory === 'electronics') {
      return electronics;
    }
    if (activeCategory === 'others') {
      return Others;
    }
    return filteredProducts;
  };

  const categoryProducts = getCategoryProducts();




  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          {isAuthenticated() ? (
            <div className="text-white">Hello {auth()?.email}</div>
          ) : (
            ''
          )}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Explore our wonderful market place!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Amawarget we make your purchases into reality
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {!isAuthenticated() && (
              <>
                <Link
                  to="/Login"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Login
                </Link>
                <Link
                  to="/SignUp"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>
        </div>
      </section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex mb-4">
          {categoryProducts && (
            <Search
              id="search"
              categoryProducts={categoryProducts}
              setFilteredProducts={setFilteredProducts}
            />
          )}
        </div>
        <div className="flex space-x-4 mt-8 pb-8">
          <button
            onClick={() => handleCategoryClick('electronics')}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-600 ${activeCategory === 'electronics' ? 'bg-blue-500' : 'bg-blue-400'
              }`}
          >
            Electronics
          </button>
          <button
            onClick={() => handleCategoryClick('others')}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-green-600 ${activeCategory === 'others' ? 'bg-green-500' : 'bg-green-400'
              }`}
          >
            Other
          </button>
          <button
            onClick={() => handleCategoryClick('clothing')}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-red-600 ${activeCategory === 'clothing' ? 'bg-red-500' : 'bg-red-400'
              }`}
          >
            Clothing
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categoryProducts &&
            categoryProducts.slice(firstPostIndex, lastPostIndex).map((product, index) => (
              <ProductCard key={index} product={product} purchaseHandler={purchaseHandler} />
            ))}
        </div>
        <Pagination
          totalPosts={filteredProducts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          pageSelected={currentPage}
        />
      </div>
    </div >
  )
}

export default Home