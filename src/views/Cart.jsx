import { useCart } from "../context/cartContext"

function Cart() {

    const { cart } = useCart();

  return (
    <div>

        {
            cart.map(
                item => (
                    <h1>{item.name}</h1>
                )
            )
        }


    </div>
  )
}

export default Cart