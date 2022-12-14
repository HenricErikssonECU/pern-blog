// dessa funktioner sköter fetch-anropen till servern och alla har ett funktionsnamn som tydligt ska förklara vad funktionen gör.
// vid get-anrop behövs ingen ytterligare information skickas med, medan resterande http-anrop (put, post och delete i vårt fall) behöver inkludera viss information, såsom 'metod' och/eller 'Content-Type'.
// responsen sparas här i 'response' och returneras så att datan sedan kan användas där funktionerna har anropats.

// GET ALL
export async function apiGetAllBlogPosts(){
    try {
        let response = await fetch('http://localhost:5000/blogposts');
        return response.json();  
    } catch (err) {
        console.error(err.message);
    } 
}

// GET 1 BlogPost
export const apiGetSpecificBlogPost = async(id) => {
    try {
        //console.log(typeof(id));
        let response = await fetch(`http://localhost:5000/blogposts/${id}`);
        return response.json();
    } catch (err) {
        console.error(err.message);
    }
}

// CREATE
export const apiCreateNewBlogPost = async(title, description) => {
    try {
        let response = await fetch('http://localhost:5000/newblogpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
        return response.json();
    } catch (err) {
        console.error(err.message);
    }
}

// DELETE
export const apiDeleteBlogPost = async(id) => {
    try {
        let response = await fetch(`http://localhost:5000/blogposts/${id}`, {
            method: 'DELETE'
        });
        return response.json();
    } catch (err) {
        console.error(err.message);
    }
}

export const apiEditBlogPost = async(id, title, description) => {
    try {
        let response = await fetch(`http://localhost:5000/blogposts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
        return response.json();
    } catch (err) {
        console.error(err.message)
    }
}
