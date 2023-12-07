import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin } from 'react-icons/fa';

const AnimatedCard = ({ name, image, facebookId, twitterId, googleId, linkedinId }) => {
    return (
        <div className="w-120 rounded-full mx-4 my-8">
                <img
                    src={image}
                    alt={name}
                    className="object-cover rounded-3xl"
                />
                <div className="p-4">
                    <h3 className="text-3xl text-center font-semibold mb-2">{name}</h3>
                    <div className="flex items-center justify-center">
                        <a
                            href={`https://www.facebook.com/${facebookId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            <FaFacebook className="text-2xl text-blue-600" />
                        </a>
                        <a
                            href={`https://twitter.com/${twitterId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            <FaTwitter className="text-2xl text-blue-500" />
                        </a>
                        <a
                            href={`https://www.google.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            <FaGoogle className="text-2xl text-red-600" />
                        </a>
                        <a
                            href={`https://www.linkedin.com/in/${linkedinId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-2xl text-blue-600" />
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default AnimatedCard;