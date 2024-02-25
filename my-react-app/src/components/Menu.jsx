import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = () =>{
    const posts = [
        {
            id: 1,
            title: "Kerala to implement design policy for public assets",
            desc: "READ LATER Minister for Tourism and Public Works P.A. Mohamed Riyas said here on Friday that the government was working on a holistic design policy that factors in Kerala’s traditional design concepts while imbibing new trends and foreseeing future needs to add a distinct touch to the State’s physical assets.",
            img: "https://bl-i.thgim.com/public/incoming/ia4pjn/article66270382.ece/alternates/FREE_385/KDW%20logo.jpg",
        },
        {
            id: 2,
            title: "Science and tech awards to get Padma-style makeover into Rashtriya Vigyan Puraskar",
            desc: "Nearly a year after the Union Government decided to cut the number of prizes annually awarded by its science-affiliated Ministries, it has instituted the Rashtriya Vigyan Puraskar (RVP) — 56 prizes to felicitate scientists, technologists and innovators. Akin to the prestigious Padma awards, these awards will not include any cash component; instead, they will likely bestow only a certificate and medallion on the awardee, sources confirmed to The Hindu.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsrK0bN3b-s7kCCTwb5fUspTRDQyJ-nzcFQ&usqp=CAU",
        }
    ];
    return (
        <div className="menu">
            <h1>Other Posts</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}> 
                <img src ={post.img} alt=""/>
                <h2>{post.title}</h2>
                <button>Read More</button>
                </div>
            ))}
            </div>
    )
}

export default Menu