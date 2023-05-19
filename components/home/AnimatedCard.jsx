import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AnimatedCard = ({ name, image, facebookId, twitterId, googleId, linkedinId }) => {
    return (
        <div className="w-full rounded-lg mx-4 my-8">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-64 rounded-lg overflow-hidden"
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="p-4">
                    <h3 className="text-xl text-center font-semibold mb-2">{name}</h3>
                    <div className="flex items-center justify-center">
                        <a
                            href={`https://www.facebook.com/${facebookId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-2"
                        >
                            <FaFacebook className="text-blue-600" />
                        </a>
                        <a
                            href={`https://twitter.com/${twitterId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-2"
                        >
                            <FaTwitter className="text-blue-500" />
                        </a>
                        <a
                            href={`https://www.google.com`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-2"
                        >
                            <FaGoogle className="text-red-600" />
                        </a>
                        <a
                            href={`https://www.linkedin.com/in/${linkedinId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-blue-600" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AnimatedCard;