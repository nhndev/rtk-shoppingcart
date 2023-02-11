import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../../redux/slice/cartSlice"

import styles from "./CartItem.module.css"

export default function CartItem({data}) {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(data?.quantity)
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity)

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: data?.id}))
    }

    useEffect(() => {
        setTotalPrice(data?.price * quantity)
        dispatch(updateQuantity({id: data?.id, quantity}))
    }, [quantity, data?.price, data?.id, dispatch])

    return(
        <tr>
           <td style={{maxWidth: 450, textAlign: 'left'}}>
                <div className="d-flex align-items-center">
                    <img src={data.imageUrl} alt="" style={{width: 100}} /> 
                    <p style={{marginLeft: 10}}>{data.name}</p>
                </div>
            </td> 
            <td className={styles.price}>
                {data.price}$
            </td>
            <td>
                <div className="d-flex align-items-center justify-content-center">
                    <button className={styles.changeBtn} onClick={() => {
                        if (quantity > 1) {
                            setQuantity(pre => pre - 1)
                        }
                    }}>-</button>
                    <input type="number" value={quantity} className={styles.input} onChange={handleChange} />
                    <button className={styles.changeBtn} onClick={() => setQuantity(pre => pre + 1)}>+</button>
                </div>
            </td>
            <td className={styles.price} style={{fontWeight: 'bold'}}>
                {totalPrice}$
            </td>
            <td>
                <Button variant="danger" onClick={handleRemove}><FaTrashAlt /></Button>
            </td>
        </tr>
    )
}