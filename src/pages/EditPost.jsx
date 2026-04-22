import {useState} from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import { supabase } from '../client';

const EditPost = ({data}) => {

    const updatePost = async (event) => {
    event.preventDefault(); // Prevents page reload [cite: 1246-1247]

    await supabase
      .from('Posts')
      .update({ title: post.title, author: post.author, description: post.description })
      .eq('id', id); // Matches the ID of the post we are currently editing [cite: 1248-1251]

    window.location = "/"; // Redirects back to home [cite: 1262-1263]
  };

  // NEW: The Delete Function
    const deletePost = async (event) => {
        event.preventDefault(); // Prevents page reload [cite: 1297-1298]

        await supabase
          .from('Posts')
          .delete() // Tells Supabase to delete the row [cite: 1302]
          .eq('id', id); // Matches the exact ID of the post [cite: 1303, 1310]

        window.location = "/"; // Redirects back to home [cite: 1315-1316]
    };

    const {id} = useParams()
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>
                    Delete
                </button>
            </form>
        </div>
    )
}

export default EditPost