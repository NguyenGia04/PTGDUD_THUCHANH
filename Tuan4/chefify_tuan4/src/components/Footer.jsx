import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <h5>About Us</h5>
                            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                            <form className="d-flex">
                                <input type="email" className="form-control me-2" placeholder="Enter your email" />
                                <button
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#F44B87', 
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px', 
                                        cursor: 'pointer',
                                    }}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-between mt-4">
                                <div className="d-flex align-items-center">
                                    <img src="../img/white_chefify.png" alt="Chefify Logo" className="me-2" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-white text-decoration-none me-2">Terms of Service</a> |
                                    <a href="#" className="text-white text-decoration-none ms-2">Privacy Policy</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-2">
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <div className="col-md-12">
                                <h5>Learn More</h5>
                                <ul className="list-unstyled">
                                    {['Our Cooks', 'See Our Features', 'FAQ'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-white text-decoration-none">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='row'>

                            <div className="col-md-12">
                                <h5>Shop</h5>
                                <ul className="list-unstyled">
                                    {['Gift Subscription', 'Send Us Feedback'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-white text-decoration-none">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h5>Recipes</h5>
                        <ul className="list-unstyled">
                            {['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white text-decoration-none">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
