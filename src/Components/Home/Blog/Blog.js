import React from 'react';
import './Blog.css';
import blogImg_1 from '../../../img/blog-1.jpg';
import blogImg_2 from '../../../img/blog-2.png';
import blogImg_3 from '../../../img/blog-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Card } from 'react-bootstrap';

const Blog = () => {
    // blog data
    const blogsData = [
        {
            id: 1,
            imgUrl: blogImg_1,
            dateIcon: <FontAwesomeIcon icon={faClock} />,
            date: 'August 8, 2021',
            title: 'Your Medical Records are Safe',
            desc: 'Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change.'
        },
        {
            id: 2,
            imgUrl: blogImg_2,
            dateIcon: <FontAwesomeIcon icon={faClock} />,
            date: 'September 8, 2021',
            title: '2021 Best USA Hospitals and Clinics',
            desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.'
        },
        {
            id: 3,
            imgUrl: blogImg_3,
            dateIcon: <FontAwesomeIcon icon={faClock} />,
            date: 'October 8, 2021',
            title: 'Are drugs the best solution?',
            desc: 'Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.'
        },
    ]
    return (
        <>
            <section className="blog_section">
                <div className="container">
                    <div className="blog sec_title" data-aos="fade-up">
                        <h2>Latest Medico news</h2>
                        <p>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
                    </div>
                    <div className="row mt-5 ">
                        {
                            blogsData.map(blog => {
                                return (
                                    <div key={blog.id} className="col-lg-4 mb-3" data-aos="fade-up">
                                        <Card className="blog_item">
                                            <div className="blog_img">
                                                <Card.Img variant="top" src={blog.imgUrl} />
                                            </div>
                                            <Card.Body className="blog_text">
                                                <div className="mb-2 date">
                                                    <i>{blog.dateIcon}</i>
                                                    <span> {blog.date}</span>
                                                </div>
                                                <h3>{blog.title}</h3>
                                                <p>{blog.desc}</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;