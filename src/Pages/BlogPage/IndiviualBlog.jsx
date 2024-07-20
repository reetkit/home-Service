import React from 'react'
import './IndiviualBlog.css'
import blogContent from '../BlogPage/BlogDetails.json'
function IndiviualBlog() {
  return (
    <div>
        <section className="ibp-wrapper">
          <div className="paddings innerWidth ibp-container">
            <span className='ibp-topContainer'>
            {blogContent.map((card,i)=>(card.id=="1"?(<div></div>):(
              <span className='ibp-heading-date' key={card.id=1}><p>
                <img className="ibp-imageSlide" src={require(`../../images/${card.image}`)} alt="" />
                <span className="ibp-head-date">
                <span className="ibp-heading">{card.heading}</span>
                <span className="ibp-date">{card.date}</span>
                </span>
                  <p className='ibp-content'>
                    {card.content}
                  </p>
                </p>
              </span>
            )
            ))}
            </span>
          </div>
        </section>
    </div>
  )
}

export default IndiviualBlog
