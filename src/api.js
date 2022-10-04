const urlGetAll = 'http://localhost:5000/blogposts';
const urlCreateNew = 'http://localhost:5000/newblogpost';

export async function getAllBlogPosts(){
    try {
        let response = await fetch(urlGetAll);
        return response.json();  
    } catch (err) {
        console.error(err.message);
    } 
}

export const apiCreateNewBlogPost = async(title, description) => {
    try {
        let response = await fetch(urlCreateNew, {
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

