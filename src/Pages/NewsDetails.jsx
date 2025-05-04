import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RigntAside from '../layouts/RigntAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    console.log(news, data, id);

    useEffect(() => {
        const NewsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(NewsDetails);
    }, [data, id]);
    
    // console.log(news, id)
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto gap-5 py-4'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RigntAside></RigntAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;