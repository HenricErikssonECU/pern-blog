

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
        console.log(response);
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
        console.log(response);
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
