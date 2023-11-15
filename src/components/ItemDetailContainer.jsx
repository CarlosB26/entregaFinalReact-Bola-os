
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";



export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
   

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "productos", id)

        getDoc(refDoc).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() })
        }).finally(() => setLoading(false))
    }, [id])



    if(loading) return <div>Loading...</div>;

    return (<Container className='mt-4' style={{ backgroundColor: 'black'}}>
                <h1>Detalles del producto</h1>
                <ItemDetail product={product}/>
            </Container>
    );

}