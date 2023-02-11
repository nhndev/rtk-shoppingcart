import { Container, Row, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"

export default function Cart() {
    const cart = useSelector(state => state.cart)
    return (
        <Container>
            <Row>
                {cart?.list && cart?.list?.length > 0 ? (
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{verticalAlign: 'middle'}}>
                            {
                                cart?.list.map(item => {
                                    return (
                                        <CartItem 
                                            key={item?.id}
                                            data={item}
                                        />
                                    )
                                })
                            }
                            <tr style={{fontSize: 20, textAlign: 'right'}}>
                                <td colSpan={3}>Total:</td>
                                <td colSpan={1}>{cart?.total}$</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                ) : <h1>Empty</h1>}
            </Row>
        </Container>
    )
}