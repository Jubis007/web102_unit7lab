import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
    const fetchPosts = async () => {
      // Fetch all rows from the 'Posts' table
      const { data } = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true });

      // Update the React state with the real data
      setPosts(data);
    };

    // Call the function we just defined
    fetchPosts();
  }, []);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        title={post.title}
                        author={post.author}
                        description={post.description}
                        betCount={post.betCount}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts