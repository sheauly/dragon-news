import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
        }
        else if (id == "1") {
            const filteredNews = data.filter((news) => news.others.is_today_pick == true)

            setCategoryNews(filteredNews)
        } else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews)
        }
        console.log(id, data)

    }, [id, data])
    return <div className='font-bold mb-5'>
        <h2>Total <span className='text-secondary'>{categoryNews.length}</span> news Found</h2>
        <div className='grid grid-cols-1 ga-5'>
            {
                categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
    </div>

};

export default CategoryNews;