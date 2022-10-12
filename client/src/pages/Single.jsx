import React from "react"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom"

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className='info'>
            <span>Adam</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='edit' />
            </Link>

            <img src={Delete} alt='delete' />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          voluptatibus voluptatem qui deleniti nesc
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          magnam. Sit, eius voluptas. Distinctio quam soluta, provident
          necessitatibus consequatur aperiam atque sequi. Ab alias, quod
          corrupti animi possimus nostrum ducimus? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus expedita, veniam repudiandae
          labore sed voluptatem! Doloribus repellendus nulla aliquid hic dolore
          nesciunt incidunt quia, at ad quod explicabo! Error, sunt. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Accusantium ex et nobis
          quibusdam dignissimos aspernatur corporis obcaecati praesentium
          doloribus voluptas impedit rem commodi voluptatem, itaque cum ea
          maiores cumque asperiores.
        </p>
      </div>
      <div className='menu'>m</div>
    </div>
  )
}

export default Single
