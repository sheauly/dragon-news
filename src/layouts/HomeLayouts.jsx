// import React from 'react';
// import { Outlet } from 'react-router';
// import Header from '../components/Header';
// import LatestNews from '../components/LatestNews/LatestNews';
// import Navbar from '../components/Navbar';
// import LeftAside from './LeftAside';
// import RigntAside from './RigntAside';

// const HomeLayouts = () => {
//     return (
//         <div>
//             <header>
//                 <Header></Header>
//                 <section className='w-11/12 mx-auto my-3'>
//                     <LatestNews></LatestNews>
//                 </section>
//                 <nav  className='w-11/12 mx-auto my-3'>
//                     <Navbar></Navbar>
//                 </nav>
//             </header>
//             <main className='w-11/12 mx-auto my-4 grid grid-cols-12 gap-4'>
//                 <aside className='col-span-3'>
//                     <LeftAside></LeftAside>
//                 </aside>
//                 <section className='main col-span-6 '>
//                     <Outlet></Outlet>
//                 </section>
//                 <aside className='col-span-3'>
//                     <RigntAside></RigntAside>
//                 </aside>
//             </main>
//         </div>
//     );
// };

// export default HomeLayouts;