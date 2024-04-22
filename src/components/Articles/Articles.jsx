import BlogCard from '../BlogCard/BlogCard';
import './Articles.scss'

export default function Articles() {
  const blogPosts = [
    {
      id: 1,
      img: '/blog1.png',
      date: 'FEB 9, 2023',
      category: 'Blogs',
      title: 'Ford Lightning is an incredible EV Truck that’ll debut',
      description: 'Ford has been upping their game when it comes to electric vehicles. This all has to do with the evolution of the climate,This all has to do with the evolution of the climate',
    },
    {
      id: 2,
      img: '/blog2.png',
      date: 'DEC 28, 2022',
      category: 'Blogs',
      title: 'Winter Car Transport Tips',
      description: 'When the weather gets colder, most people want nothing more than to hunker down and wait it out.When the weather gets colder, most people want nothing more than to hunker down and wait it out. ',
    },
    {
      id: 3,
      img: '/blog3.png',
      date: 'MAR 9, 2023',
      category: 'News',
      title: 'School Improvement Bills Filed For Safety, Funding and Teachers',
      description: 'Texas is making new laws—six in specific—to improve the schools around the Lone Star state. Texas is making new laws—six in specific—to improve the schools around the Lone Star state. ',
    },
    {
      id: 4,
      img: '/blog4.png',
      date: 'JAN 25, 2023',
      category: 'News',
      title: 'Plane Makes Emergency Landing on Grand Parkway',
      description: 'Every pilot’s worst nightmare is needing to make an emergency landing. Every pilot’s worst nightmare is needing to make an emergency landing. Any mechanical failure can put their lives in',
    }
  ];



  return (
    <div className="Articles padding-m">
      <h2>Our Latest Articles</h2>
      <div className="Articles__left">
        <h3>Latest Blogs</h3>
        <BlogCard data={blogPosts[0]} />
        <BlogCard data={blogPosts[1]} />

      </div>
      <div className="Articles__right">
        <h3>Latest News</h3>
        <BlogCard data={blogPosts[2]} />
        <BlogCard data={blogPosts[3]} />
      </div>


    </div>


  )
}

