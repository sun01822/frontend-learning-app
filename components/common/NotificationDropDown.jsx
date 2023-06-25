import React from 'react';
import {
    AiOutlineBell,
} from "react-icons/ai";

const NotificationDropDown = () => {
    const notifications = [
        {
            id: 1,
            image: 'https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg',
            title: 'Notification 1',
            description: 'This is the description of Notification 1.',
            date: 'June 23, 2023',
            time: '10:00 AM',
        },
        {
            id: 2,
            image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
            title: 'Notification 2',
            description: 'This is the description of Notification 2.',
            date: 'June 24, 2023',
            time: '2:30 PM',
        },
        {
            id: 3,
            image: 'https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg',
            title: 'Notification 1',
            description: 'This is the description of Notification 1.',
            date: 'June 23, 2023',
            time: '10:00 AM',
        },
        {
            id: 4,
            image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
            title: 'Notification 2',
            description: 'This is the description of Notification 2.',
            date: 'June 24, 2023',
            time: '2:30 PM',
        },
    ];

    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0}><p className="indicator tab tab-lifted tab-active border-none text-xl">
                    <span className="indicator-item badge rounded-full badge-error text-white font-bold">
                        9
                    </span>
                    <span className="bg-base-200 p-2 rounded-full">
                        <AiOutlineBell />
                    </span>
                </p></label>
                <div tabIndex={0} className="dropdown-content z-[1] w-96 h-96 bg-white rounded-box shadow overflow-y-auto">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="p-4 border-b hover:bg-gray-100">
                            <div className="flex items-center">
                                <img
                                    src={notification.image}
                                    alt="Notification Image"
                                    className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h3 className="font-bold">{notification.title}</h3>
                                    <p className="text-gray-600">{notification.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-between pl-16 text-sm text-gray-500">
                                <span>{notification.date}</span>
                                <span>{notification.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default NotificationDropDown;
