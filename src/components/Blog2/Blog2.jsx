import { useEffect, useState } from 'react'
import './Blog2.scss'
import axios from 'axios';

export default function Blog2() {

  const pageCount = 3; //ejeri qanak
  const [currentPage, setCurrentPage] = useState(1); //tvyal ejy
  const [data, setData] = useState([]); //datai zangvats

  //Date poxelu hamar, GPT-a arats normal cheme naye incha, bayc mi hat nayes kjoges
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

  // Example usage
  const originalDate = '2022-06-01T17:15:13.000000Z';
  const formattedDate = formatDate(originalDate);
  console.log(formattedDate); // Output: Jun 1, 2022


  // datayi stanal
  useEffect(() => {
    axios(`https://austinmerchantservices.biz/example/washington/public/api/v1/category?slug=blogs&page=${currentPage}`)
      .then(res => setData(res.data.data.posts))
  }, [currentPage])

  // eji poxel
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    // Componenti mejic berel enq stex senc, vortev props-i dashtery tarber ein mer stacats data-i dashteric
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
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(page => (
          <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
        ))}
      </div>

    </div >
  )
}
