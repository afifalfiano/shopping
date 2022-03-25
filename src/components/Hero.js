import styles from './Hero.module.css';
import { useEffect, useState } from 'react';
import BASE_URL from '../config/config';
import axios from 'axios';
const Hero = props => {

    const [topThreeProduct, setTopThreeProduct] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get(BASE_URL + '/products?limit=3')
            console.log(response, 'res');
            setTopThreeProduct(response.data);
        } catch (error) {
            throw new Error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    let topProduct = '<p>Loading...</p>'
    if (topThreeProduct.length > 0) {
        topProduct = topThreeProduct.map(item => {
            return (
                <div key={item.id} className="flex flex-col items-center w-full justify-center gap-y-4 h-full">
                <div className={`font-bold text-2xl text-center ${styles.card_title}`}>{item.title}</div>
                <div className='w-40'><img src={item.image} alt={item.title} className='w-full'></img></div>
                <div className={`text-blue-500 font-medium text-2xl ${styles.card_price}`}>${item.price}</div>
                </div>
            )
        })
    }

    

    return (
    <div>
    <div className={`${styles.hero} ${styles['w-100']}`}>
    </div>
    <div className='container mx-auto -translate-y-20 bg-white rounded-lg shadow-lg'>
        <div className='flex items-center justify-center gap-10 p-5'>
            {topProduct}
        </div>
    </div>
    </div>
    );
}

export default Hero;