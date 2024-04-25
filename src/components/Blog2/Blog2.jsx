import { useEffect, useState } from 'react'
import './Blog2.scss'
import axios from 'axios';

export default function Blog2() {

  const pageCount = 7; //ejeri qanak
  const [currentPage, setCurrentPage] = useState(1); //tvyal ejy
  const [data, setData] = useState([]); //datai zangvats

  
  function formatDate(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Get month, day, and year from the date object
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  }


  // datayi stanal
  useEffect(() => {
    axios(`https://austinmerchantservices.biz/example/washington/public/api/v1/category?slug=blogs&page=${currentPage}`)
      .then(res => setData(res.data.data.posts))
  }, [currentPage])

  // eji poxel
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = (page) => {
    setCurrentPage(page - 1)
  }

  const handleNext = (page) => {
    setCurrentPage(page + 1)
  }

  return (
    
    <div className='Blog2 padding-m'>
      <div className="Blog2__cards">
        {
          data.map(post => {
            return <div key={post.id} className='BlogCard'>
              <div className="BlogCard__img">
                <img src={post.image} />
              </div>
              <div className="BlogCard__content">
                <h3><img src="/calendar.svg" /> {formatDate(post.updated_at)} <span>{post.category.name}</span> </h3>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
              <div className="BlogCard__btns">
                <a className='readMore' href="#">Continue Reading <span>&#xF285;</span> </a>
              </div>
            </div>
          })
        }
      </div>

      {/* Pagination knopkeq */}
      <div className="Blog2__pagination">
        <button className='next-prev' onClick={() => handlePrev(currentPage)} disabled={currentPage === 1}>Previous</button>

        {/* arajin ej */}
        <button onClick={() => handlePageChange(1)} className={currentPage === 1 ? 'active' : ''}>{1}</button>

        {/*3 ket*/}
        {currentPage > 2 && <span>...</span>}

        {/* buttonery  */}
        {Array.from({ length: pageCount }, (_, index) => index + 1)
          .filter(page => page > currentPage - 2 && page < currentPage + 2 && page !== 1 && page !== pageCount)
          .map(page => (
            <button  key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>{page}</button>
          ))}

        {/* 3 kety erp 1 ejic heruya nshvac ejy*/}
        {currentPage < pageCount - 1 && <span>...</span>}

        {/* Last page */}
        {pageCount !== 1 && <button onClick={() => handlePageChange(pageCount)} className={currentPage === pageCount ? 'active' : ''}>{pageCount}</button>}

        <button className='next-prev' onClick={() => handleNext(currentPage)} disabled={currentPage === pageCount}>Next</button>
      </div>



    </div >
  )
}
