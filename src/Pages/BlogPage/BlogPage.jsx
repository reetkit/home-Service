import React from 'react'
import './BlogPage.css'

function BlogPage() {
    const slides = [
        { id:1, image: 'blog1.jpeg', heading: 'How to remove a coffee stain', date:'July 29, 2021' },
        { id:2, image: 'blog2.jpg', heading: 'Scrub the bathtub clean', date:'July 2, 2023' },
        { id:3, image: 'blog3.jpeg', heading: 'Fall in love with Cleaning', date:'July 9, 2020' },
        { id:4, image: 'blog1.jpeg', heading: 'How to remove a coffee stain', date:'June 29, 2022' },
        { id:5, image: 'blog2.jpg', heading: 'Scrub the bathtub clean', date:'May 2, 2021' },
        { id:6, image: 'blog3.jpeg', heading: 'Fall in love with Cleaning',date:"Aug 2, 2023" }
      ];
  return (
    <div>
        <section className="bp-wrapper">
        <div className="paddings innerWidth bp-container">
            {slides.map(item => (
                <a href="/blogs/blog">
                <div className="Image" key={item.id}>
                    <img className="bp-imageSlide" src={require(`../../images/${item.image}`)} alt="" />
                    <span className='bp-text'>
                        <span className='bp-heading-date'>
                            <span className="bp-heading">{item.heading}</span>
                            <span className="bp-date">{item.date}</span>
                        </span>
                        <span>
                            <p className='bp-some-text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptate! Alias nulla reiciendis nobis, aliquid dolores laudantium voluptatem, recusandae dolore laboriosam maiores sint. Corrupti ut recusandae molestiae facilis veritatis dolor!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae fugiat optio velit unde quas quod, ab commodi ex at, ipsum maxime in officia, accusamus molestiae animi nostrum est laborum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias quas autem at deleniti maxime accusamus necessitatibus ipsum corrupti! Provident deserunt excepturi ea, molestiae ut sit odio quidem dolore quae!
                            </p>
                        </span>
                        <span className='ReadMore'><p>Read More</p></span>
                    </span>
                </div>
                </a>
            ))}
        </div>
    </section>
    </div>
  )
}

export default BlogPage
