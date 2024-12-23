
//this component is strictly for handling the visual UI deletion 
const StoryDelete = ({ postId, onDelete, onCancel , fetchStories}) => {
    const uRl = `http://localhost:8080/stories/${postId}`;

    const handleDelete = async () => {
        try {
            //variable that holds the response of the fetch request
            const response = await fetch(uRl, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' }
            });
            
            //if the response is ok, then the post is deleted
            if (response.ok) {
                onDelete(postId);
            } else {
                throw new Error('Failed to delete the post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        fetchStories()
    };

    const handleCancel = async ()=>{
        //doesnt need a fetch because this is just calling the property
        //no backend interaction is needed
        onCancel();
    }

    return (
        <div className="popup">
            <form action="">
                <h2 className="text-rose-500">**Confirm Deletion**</h2>
                <p>Are you sure you want to delete this post?</p>
                <button type="button" onClick={handleDelete} className=" p-2 text-rose-500 hover:animate-pulse">Delete</button>
                <button type="button" onClick={handleCancel} className=" p-2 text-amber-500 hover:animate-pulse">Cancel</button>
            </form>
        </div>
    );
};

export default StoryDelete;
