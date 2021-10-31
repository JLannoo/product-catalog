import Async from 'react-async';
import ProdudctContainer from "../ProductContainer/ProductContainer.js";
import Loading from '../Loading/Loading.js';

const URL = "http://localhost:3001"

async function fetchData() {
    const response = await fetch(`${URL}/products/`)

    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export default function Delete(props){
       
    return (
        <div className="delete-container">
            <h3>Which product would you like to delete?</h3>
                <Async promiseFn={fetchData}>
                    <Async.Pending> 
                        <Loading/> 
                    </Async.Pending>

                    <Async.Fulfilled>
                        {products => 
                            <>
                                <ProdudctContainer products={products} type="delete" deleteFn={deleteProduct}/>
                            </>
                        }  
                    </Async.Fulfilled>

                    <Async.Rejected>
                        {"There seems to have been an issue, please try again later!"}
                    </Async.Rejected>
                </Async>
        </div>
    )
}

async function deleteProduct(id){
    console.log(id)
    const response = await fetch(`${URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if(response.ok){
        alert("Product Deleted!")
    } else {
        alert("Product could not be deleted")
    }
}