// Write.jsx

import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Write = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handlePublish = () => {
        fetch('http://localhost:3000/api-backend/posts', { // Update the URL to match your backend endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                category,
                image
            }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Post published successfully');
                setTitle('');
                setDescription('');
                setCategory('');
                setImage('');
            } else {
                console.error('Failed to publish post');
            }
        })
        .catch(error => {
            console.error('Error publishing post:', error);
        });
    };

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="editorcontainer">
                    <ReactQuill 
                        theme="snow" 
                        value={description} 
                        onChange={setDescription} 
                        modules={{ toolbar: true }} 
                        formats={['bold', 'italic', 'underline', 'strike']} 
                    />
                </div>
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <div className="buttons">
                        <button onClick={handlePublish}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="category" value="ART" id="art" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="art">ART</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="category" value="SCIENCE" id="science" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="science">SCIENCE</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="category" value="TECHNOLOGY" id="technology" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="technology">TECHNOLOGY</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="category" value="CINEMA" id="cinema" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="cinema">CINEMA</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="category" value="DESIGN" id="design" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="design">DESIGN</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="category" value="FOOD" id="food" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="food">FOOD</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
