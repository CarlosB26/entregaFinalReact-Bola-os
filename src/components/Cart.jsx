import { Container, Table } from "react-bootstrap"
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore"

export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const { items, removeItem, clear } = useContext(CartContext)

    const total = () =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.precio,
            0
        )
    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {

        const order = {
            buyer: formValues,
            items,
            total: total(),
        };

        if (items == 0) {
            alert("El carrito esta vacio")
        } else {
            const db = getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection, order).then(({ id }) => {
                if (id) {
                    setFormValues({
                        name: "",
                        phone: "",
                        email: "",
                    })
                    clear()
                    alert("Su orden: " + id + "ha sido completada!")
                }
            })
        }
    }

    return (
        <Container>
            <h2>Cart</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Button onClick={() =>
                                    removeItem(item.id)
                                }
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{total()}</td>
                        <td>
                            <Button onClick={() =>
                                clear()
                            }
                            >
                                Limpiar
                            </Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
            <h2>Ingresar datos de usuario</h2>
            <Form>
                <Form.Group className="mb-3" ControlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.name}
                        type="text"
                        name="name"
                        required/>
                </Form.Group>
                <Form.Group className="mb-3" ControlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.email}
                        type="email"
                        name="email"
                        required/>
                </Form.Group>
                <Form.Group className="mb-3" ControlId="formBasicEmail">
                    <Form.Label>Tel</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={formValues.phone}
                        type="text"
                        name="phone"
                        required/>
                </Form.Group>
            </Form>
            <Button onClick={sendOrder}>Comprar</Button>
        </Container>
    )
}