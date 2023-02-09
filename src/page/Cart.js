import { useSelector } from "react-redux"

export default function Cart() {
    const cart = useSelector(state => state.cart)
    console.log(cart)
    return (
        <h1>Cart</h1>
    )
}