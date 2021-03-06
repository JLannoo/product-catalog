import Async from 'react-async';
import ProdudctContainer from "../ProductContainer/ProductContainer.js";
import Loading from '../Loading/Loading.js';
import { fetchData, deleteProduct } from '../../apiAccess';

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