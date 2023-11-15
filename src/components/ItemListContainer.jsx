
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import Container from 'react-bootstrap/Container';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = props => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        const db= getFirestore();

        const refCollection = id
        ? query (collection(db, "productos"), where("category", "==", id))
        : collection(db , "productos")


        getDocs(refCollection)
            .then(snapshot => {
                if (snapshot.size === 0) console.log("no results")
                else{
                if(id){
                    setProducts(
                        snapshot.docs.map(doc => {
                            return { id: doc.id, ...doc.data() }
                        })
                    )
                } else {
                    setProducts(
                        snapshot.docs.map(doc => {
                            return { id: doc.id, ...doc.data() }
                        })
                    )
                }
                }
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [id])

    if(loading) return <div>Loading...</div>

    return (<Container className='topMargin'>
        <h1>{props.greeting}</h1>
        <div className="d-flex flex-column align-items-center">
            <ItemList products={products} />
        </div>
    </Container>
    );

}