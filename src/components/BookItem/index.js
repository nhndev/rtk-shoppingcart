import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slice/cartSlice"
import styles from "./BookItem.module.css"
export default function BookItem({data}) {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({
            ...data,
            quantity: 1
        }))
        alert("Successfully!")
    }

    return (
        <div className={styles.bookItem}>
            <div className={styles.bookInfo}>
                <img src={data.imageUrl} alt="" />
                <p className={styles.name}>{data.name}</p>
                <p><i>{data.author}</i></p>
            </div>
            <div className={styles.footer}>
                <span className={styles.price}>{data.price}$</span>
                <Button onClick={handleAddToCart} variant="success">Add to cart</Button>
            </div>
        </div>
    )
}