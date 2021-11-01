const API_URL = process.env.API_URL;

export async function fetchData(){
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
}

export async function addProduct(name, description, priceDollar, priceCents, image){
    if(name !== "" && description !== "" && priceDollar !== "" && priceCents !== "" && image !== ""){
        while(priceCents > 99){
            priceCents -= 100;
            priceDollar++;  
        }
    
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price_dollar: priceDollar,
                price_cents: priceCents,
                image: image
            })
        });

        console.log(response);
    
        if(response.ok){
            alert("Product added!");
        } else {
            alert("There seems to have been an issue. Please try again later!");
        }
    } else {
        alert("Error adding product!\n Please check all field are completed");
    }
    window.location.reload();
}

export async function deleteProduct(id, name){   
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);

    if(confirm){
        const response = await fetch(`${API_URL}/products/${id}`, {
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
        window.location.reload();
    }
}

export async function editProduct({id, name, description, price_cents, price_dollar, image}){
    console.log(id, name, description, price_cents, price_dollar, image);

    if(name !== ""  && description !== ""  && price_cents !== "" && price_dollar !== ""  && image !== ""){
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                description,
                price_cents,
                price_dollar,
                image
            })
        })

        if(response.ok){
            alert("Product successfully edited!")
            window.location.reload();
        } else {
            alert("There seems to have been an issue, please try again later!")
        }
    } else {
        alert("Please fill out all fields!")
    }
}
