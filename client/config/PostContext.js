import { useContext, createContext, useState } from "react";

const PostContext = createContext()

function PostProvider({children}){
    const [posts, setPosts] = useState([])

    const addPost = (userImageUri, username, imageUri, category, item, pricePerDay, city, area, condition, status, rating) => {
        const newPost = {
            id: Date.now(),
            userImageUri,
            username,
            imageUri,
            category,
            item,
            pricePerDay,
            city,
            area,
            condition,
            status,
            rating,
            createdAt: new Date().toISOString()
        }
        setPosts(prevPosts => [newPost, ...prevPosts])
    }

    const deletePost = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
    }

    const editPost = (postId, updatedData) => {
        setPosts(prevPosts => prevPosts.map(post => post.id === postId ? {...post, ...updatedData, updatedAt: new Date().toISOString()} : post))
    }

    const getPostById = (postId) => {
        return posts.find(post => post.id === postId)
    }

    const value = { // the values i want to share with other components
        posts,
        addPost,
        deletePost,
        editPost,
        getPostById,
    }

    // the chanel i share the values through
    return(
       <PostContext.Provider value={value}>
            {children}
       </PostContext.Provider>
    )
}

function usePosts () {
    const context = useContext(PostContext)
    if(!context) {
        throw new Error('usePosts must be used within PostProvider')
    }
    return context
}

export { PostProvider, usePosts}