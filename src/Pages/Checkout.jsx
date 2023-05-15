/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from 'react-redux'
import { addToCard, decreasCard, removeFromCard, clearAllCards, getTotal } from '../Redux/CardSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Checkout = () => {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [card, dispatch])

  const handleRemoveCard = (cardItem) => {
    dispatch(removeFromCard(cardItem))
  }
  const handleDecreseCard = (cardItem, all) => {
    dispatch(decreasCard(cardItem))


  }
  const handleIncreseCard = (cardItem, all) => {
    dispatch(addToCard(cardItem))

  }
  const HandleClearCards = () => {
    dispatch(clearAllCards());
  }
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth);

  return (

    <section className="h-full bg-gray-100  sm:py-16 lg:py-20">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
      </div>
      {card.cardItems?.map((cardItem) => {

        return <li className="mx-auto mt-4 max-w-6xl md:mt-12 bg-white shadow p-8  list-none">
          <div key={cardItem.id} className="shrink-1 w-full px-12">
            <img
              className="h-32 w-32 max-w-full rounded-lg"
              src={cardItem.img}
              alt={cardItem.name}
            />
          </div>
          <div className="relative flex flex-1 flex-col justify-between">
            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2 p-10">
              <div className="pr-8 sm:pr-5 px-10">
                <p className=" font-bold text-gray-900 text-2xl">
                  {cardItem.name}
                </p>
                <p className="mx-0 mt-1 mb-0 text-gray-500 font-bold text-xl">
                  {cardItem.brand}
                </p>
              </div>
              <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                <p className="shrink-0 w-32 text-3xl font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right  text-center">
                  <span className=' text-xl text-gray-500'>total </span>
                  ${cardItem.price * cardItem.cardQuantity}
                </p>

                <div className="sm:order-1">
                  <div className="mx-auto flex h-10 w-32 items-stretch text-gray-600 ">
                    <button onClick={() => handleDecreseCard(cardItem, cardItem.price)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-violet-800 hover:text-white font-bold text-2xl">
                      -
                    </button>
                    <div className="flex w-full items-center justify-center bg-gray-100 px-4  uppercase transition font-bold text-2xl">
                      {cardItem.cardQuantity}
                    </div>
                    <button onClick={() => handleIncreseCard(cardItem, cardItem.price)} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-violet-800 hover:text-white font-bold text-2xl">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
              <button
                type="button"
                className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-violet-900"
              >
                <svg onClick={() => handleRemoveCard(cardItem)}
                  className="block h-10 w-10 px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"

                  />
                </svg>
              </button>
            </div>

            <p className="px-12 w-18  text-2xl font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-left ">
              <span className='text-xl text-gray-500'>Price </span> ${cardItem.price}
            </p>

          </div>

        </li>
      })
      }

      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mt-8 max-w-6xl md:mt-12 ">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
              </div>
              <div className="mt-6 flex items-center justify-between">

                <p className="text-2xl font-medium text-gray-900">Total</p>

                <p className="text-3xl font-semibold text-gray-900">
                  <span className="text-xl font-normal text-gray-500">USD</span>
                  {card.cardTotalAmount}

                </p>
              </div>

              <div className="mt-6 text-center ">
                {auth._id ? <button
                  type="button"
                  className="group inline-flex items-center justify-end rounded-md bg-violet-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-800"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button> : <button onClick={() => navigate('/login')}
                  type="button"
                  className="group inline-flex items-center justify-end rounded-md bg-violet-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-800"
                >
                  please login to Cheak out
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>}


                <button onClick={() => HandleClearCards()} className="mx-8  tracking-wide underline-offset-4 rounded-md bg-violet-200 px-6 py-4 text-lg font-semibold text-gray-900 transition-all duration-200 ease-in-out focus:shadow hover:bg-violet-300"

                  type="button"
                >
                  Clear All Cards

                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Checkout
