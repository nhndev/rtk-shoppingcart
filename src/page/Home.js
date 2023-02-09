import { Col, Container, Row } from "react-bootstrap";
import BookItem from "../components/BookItem";
import productList from "../data/products.json"
export default function Home() {
    return (
        <Container>
            <Row>
                {productList.map(item => {
                    return (
                        <Col xl="3" key={item.id}>
                            <BookItem data={item} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}