import Card from "./Card";

const About = () => {
    const cardData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCrWmq0Q8Y5_PLr-y3EighNfdVK0gxa8r0A&usqp=CAU",
            bold: "Live",
            title: "Class",
            description: "Join our live class and enhance your skills with expert instructors. Learn new techniques, gain valuable insights, and interact with a community of learners. Don't miss this opportunity to level up your knowledge and achieve your goals."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JUQAzAbIzUT3IbwzvtDMErDlML7CFWDw4jrGilmTMObAfdmS0jgLPQUwnyCNuoXU0VM&usqp=CAU",
            bold: "Best",
            title: "Teachers",
            description: "Discover a team of highly skilled and experienced teachers who are dedicated to providing the best learning experience. Our instructors are passionate about their subjects and committed to helping you achieve academic excellence."
        },
        {
            image: "https://economictimes.indiatimes.com/thumb/msid-90954525,width-1200,height-843,resizemode-4,imgsize-32884/online-earning-through-affiliate-marketing.jpg?from=mdr",
            bold: "Earn",
            title: "Money",
            description: "Unlock your potential and start earning money today. Join our platform to explore various opportunities, from freelance projects to part-time gigs. Turn your skills into income and take control of your financial future."
        },
    ]
    return (
        <>
            <div className="p-4 mt-64" id="about">
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