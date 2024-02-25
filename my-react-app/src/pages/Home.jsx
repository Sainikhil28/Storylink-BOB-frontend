import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    const posts = [
        {
            id: 0,
            title: "Sakti Burman and Maite Delteil, and their special ‘Journey of Love, Faith and Inspiration’ exhibition",
            desc: "“Have I turned 91 or 99?” artist Sakti Burman jokes as he steps into Nayan Naveli Gallery in Greater Kailash with his wife Maite Delteil. It’s his birthday. She lovingly smacks his shoulder and says, “Sakti, you are 91! I don’t know what we will be doing when you are 99.The couple, who got married in Paris in 1963 and have made a life out of art, are in a humorous mood at Journey of Love, Faith and Inspiration. The ‘exhibition with a difference’ showcases their work from the early 1950s to 2023.",
            img: "https://th-i.thgim.com/public/life-and-style/wvvbh7/article67877698.ece/alternates/LANDSCAPE_1200/IMG_1306%20copy.jpg",
            
        },
        {
            id: 1,
            title: "BusinessOnBot",
            desc: "Acquiring new users ,now made easy , BusinessOnBot is now helping 500+ brands to acquire new users by engaging them where they are most accessible. ",
            img: "data:image/png;base64,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",
        },
        {
            id: 2,
            title: "Doraemon",
            desc: "Doraemon  is a Japanese manga series written and illustrated by Fujiko F. Fujio. The manga was first serialized in December 1969. Its chapters were collected in 45 tankōbon volumes published by Shogakukan from 1974 to 1996. The story revolves around an earless robotic cat named Doraemon, who travels back in time from the 22nd century to aid a boy named Nobita Nobi.",
            img: "https://cdn.wallpapersafari.com/52/38/s8PgAr.jpg",
        },
        {
            id: 3,
            title: "Kerala to implement design policy for public assets",
            desc: "READ LATER Minister for Tourism and Public Works P.A. Mohamed Riyas said here on Friday that the government was working on a holistic design policy that factors in Kerala’s traditional design concepts while imbibing new trends and foreseeing future needs to add a distinct touch to the State’s physical assets.",
            img: "https://bl-i.thgim.com/public/incoming/ia4pjn/article66270382.ece/alternates/FREE_385/KDW%20logo.jpg",
        },
        {
            id: 4,
            title: "Science and tech awards to get Padma-style makeover into Rashtriya Vigyan Puraskar",
            desc: "Nearly a year after the Union Government decided to cut the number of prizes annually awarded by its science-affiliated Ministries, it has instituted the Rashtriya Vigyan Puraskar (RVP) — 56 prizes to felicitate scientists, technologists and innovators. Akin to the prestigious Padma awards, these awards will not include any cash component; instead, they will likely bestow only a certificate and medallion on the awardee, sources confirmed to The Hindu.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsrK0bN3b-s7kCCTwb5fUspTRDQyJ-nzcFQ&usqp=CAU",
        },
        {
            id: 5,
            title: "India-UAE cooperation to sow regional food security",
            desc: "The United Arab Emirates (UAE), whose food security has been built on imports from global markets, is now focusing on the twin objectives of food access and readiness to confront supply chain crises. India, the world’s second-largest food producer, is an essential partner in the UAE’s ambition to strengthen food security. The India-UAE food security partnership stands to benefit from multiple points of convergence.",
            img: "https://th-i.thgim.com/public/opinion/op-ed/kllgfe/article66756589.ece/alternates/LANDSCAPE_1200/iStock-1250255209.jpg",
        },
    
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" /> {/* Changed src attribute to use the direct URL */}
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p> {/* Added paragraph to display description */}
                            <Link className="link" to={`/post/${post.id}`}>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
