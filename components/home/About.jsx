import Link from "next/link";
import Card from "./Card";

const About = () => {
    const cardData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCrWmq0Q8Y5_PLr-y3EighNfdVK0gxa8r0A&usqp=CAU",
            bold: "Live",
            title: "Class",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JUQAzAbIzUT3IbwzvtDMErDlML7CFWDw4jrGilmTMObAfdmS0jgLPQUwnyCNuoXU0VM&usqp=CAU",
            bold: "Best",
            title: "Teachers",
        },
        {
            image: "https://economictimes.indiatimes.com/thumb/msid-90954525,width-1200,height-843,resizemode-4,imgsize-32884/online-earning-through-affiliate-marketing.jpg?from=mdr",
            bold: "Earn",
            title: "Money",
        },
    ]
    return (
        <>
            <div className="p-4 mt-32">
                <div className="flex items-center justify-center h-full">
                    <div className="h-16 w-2 bg-green-500 m-2"></div><h1 className="text-4xl font-bold mb-4 text-center"><span className="text-green-500">About</span> Us</h1>
                </div>
                <p className="text-xl text-center">A modern and unique system to share experience and earn money</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center mt-10">
                {
                    cardData.map((item) => (
                        <Card key={item.title} data={item} />
                    ))
                }
            </div>

        </>
    )
}


export default About;