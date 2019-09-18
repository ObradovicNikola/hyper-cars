import React, { Component } from 'react'
import './style/Navbar.css'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            mobileMenuShow: false,
            burger: "burger menu-btn"
        }
    }

    toggleMenu = () => {
        if (this.state.mobileMenuShow === false) {
            this.setState({ burger: "burger menu-btn open" })
        } else this.setState({ burger: "burger menu-btn" })
        this.setState({ mobileMenuShow: !this.state.mobileMenuShow })
    }

    closeMobileMenu = () => {
        this.setState({ mobileMenuShow: false, burger: "burger menu-btn" })
    }

    render() {
        let menu;
        if (this.state.mobileMenuShow)
            menu = "menu menu-mobile animated fadeInDown"
        else menu = "menu"
        return (
            <nav>
                <div className="logo-container" style={{}}>
                    <div className="logo" id="logo">
                        <NavLink to="/" exact={true} className="nav-link" onClick={this.closeMobileMenu}>
                            <svg width="100" height="58" viewBox="0 0 169 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.1875 44H25.6641V28.2266H8.46094V44H3.96094V9.875H8.46094V24.5469H25.6641V9.875H30.1875V44ZM81.6562 31.6016C81.6562 35.4609 80.7734 38.5703 79.0078 40.9297C77.2422 43.2891 74.8516 44.4688 71.8359 44.4688C68.7578 44.4688 66.3359 43.4922 64.5703 41.5391V53.75H60.2344V18.6406H64.1953L64.4062 21.4531C66.1719 19.2656 68.625 18.1719 71.7656 18.1719C74.8125 18.1719 77.2188 19.3203 78.9844 21.6172C80.7656 23.9141 81.6562 27.1094 81.6562 31.2031V31.6016ZM77.3203 31.1094C77.3203 28.25 76.7109 25.9922 75.4922 24.3359C74.2734 22.6797 72.6016 21.8516 70.4766 21.8516C67.8516 21.8516 65.8828 23.0156 64.5703 25.3438V37.4609C65.8672 39.7734 67.8516 40.9297 70.5234 40.9297C72.6016 40.9297 74.25 40.1094 75.4688 38.4688C76.7031 36.8125 77.3203 34.3594 77.3203 31.1094ZM97.7109 44.4688C94.2734 44.4688 91.4766 43.3438 89.3203 41.0938C87.1641 38.8281 86.0859 35.8047 86.0859 32.0234V31.2266C86.0859 28.7109 86.5625 26.4688 87.5156 24.5C88.4844 22.5156 89.8281 20.9688 91.5469 19.8594C93.2812 18.7344 95.1562 18.1719 97.1719 18.1719C100.469 18.1719 103.031 19.2578 104.859 21.4297C106.688 23.6016 107.602 26.7109 107.602 30.7578V32.5625H90.4219C90.4844 35.0625 91.2109 37.0859 92.6016 38.6328C94.0078 40.1641 95.7891 40.9297 97.9453 40.9297C99.4766 40.9297 100.773 40.6172 101.836 39.9922C102.898 39.3672 103.828 38.5391 104.625 37.5078L107.273 39.5703C105.148 42.8359 101.961 44.4688 97.7109 44.4688ZM97.1719 21.7344C95.4219 21.7344 93.9531 22.375 92.7656 23.6562C91.5781 24.9219 90.8438 26.7031 90.5625 29H103.266V28.6719C103.141 26.4688 102.547 24.7656 101.484 23.5625C100.422 22.3438 98.9844 21.7344 97.1719 21.7344ZM124.898 22.5312C124.242 22.4219 123.531 22.3672 122.766 22.3672C119.922 22.3672 117.992 23.5781 116.977 26V44H112.641V18.6406H116.859L116.93 21.5703C118.352 19.3047 120.367 18.1719 122.977 18.1719C123.82 18.1719 124.461 18.2812 124.898 18.5V22.5312Z" fill="white" />
                                <path d="M45.7969 37.6484L51.7031 18.6406H56.3438L46.1484 47.9141C44.5703 52.1328 42.0625 54.2422 38.625 54.2422L37.8047 54.1719L36.1875 53.8672V50.3516L37.3594 50.4453C38.8281 50.4453 39.9688 50.1484 40.7812 49.5547C41.6094 48.9609 42.2891 47.875 42.8203 46.2969L43.7812 43.7188L34.7344 18.6406H39.4688L45.7969 37.6484Z" fill="#FFC000" />
                                <path d="M92.0625 89.1719C91.6406 92.7812 90.3047 95.5703 88.0547 97.5391C85.8203 99.4922 82.8438 100.469 79.125 100.469C75.0938 100.469 71.8594 99.0234 69.4219 96.1328C67 93.2422 65.7891 89.375 65.7891 84.5312V81.25C65.7891 78.0781 66.3516 75.2891 67.4766 72.8828C68.6172 70.4766 70.2266 68.6328 72.3047 67.3516C74.3828 66.0547 76.7891 65.4062 79.5234 65.4062C83.1484 65.4062 86.0547 66.4219 88.2422 68.4531C90.4297 70.4688 91.7031 73.2656 92.0625 76.8438H87.5391C87.1484 74.125 86.2969 72.1562 84.9844 70.9375C83.6875 69.7188 81.8672 69.1094 79.5234 69.1094C76.6484 69.1094 74.3906 70.1719 72.75 72.2969C71.125 74.4219 70.3125 77.4453 70.3125 81.3672V84.6719C70.3125 88.375 71.0859 91.3203 72.6328 93.5078C74.1797 95.6953 76.3438 96.7891 79.125 96.7891C81.625 96.7891 83.5391 96.2266 84.8672 95.1016C86.2109 93.9609 87.1016 91.9844 87.5391 89.1719H92.0625ZM113.203 100C112.953 99.5 112.75 98.6094 112.594 97.3281C110.578 99.4219 108.172 100.469 105.375 100.469C102.875 100.469 100.82 99.7656 99.2109 98.3594C97.6172 96.9375 96.8203 95.1406 96.8203 92.9688C96.8203 90.3281 97.8203 88.2812 99.8203 86.8281C101.836 85.3594 104.664 84.625 108.305 84.625H112.523V82.6328C112.523 81.1172 112.07 79.9141 111.164 79.0234C110.258 78.1172 108.922 77.6641 107.156 77.6641C105.609 77.6641 104.312 78.0547 103.266 78.8359C102.219 79.6172 101.695 80.5625 101.695 81.6719H97.3359C97.3359 80.4062 97.7812 79.1875 98.6719 78.0156C99.5781 76.8281 100.797 75.8906 102.328 75.2031C103.875 74.5156 105.57 74.1719 107.414 74.1719C110.336 74.1719 112.625 74.9062 114.281 76.375C115.938 77.8281 116.797 79.8359 116.859 82.3984V94.0703C116.859 96.3984 117.156 98.25 117.75 99.625V100H113.203ZM106.008 96.6953C107.367 96.6953 108.656 96.3438 109.875 95.6406C111.094 94.9375 111.977 94.0234 112.523 92.8984V87.6953H109.125C103.812 87.6953 101.156 89.25 101.156 92.3594C101.156 93.7188 101.609 94.7812 102.516 95.5469C103.422 96.3125 104.586 96.6953 106.008 96.6953ZM154.688 93.2734C154.688 92.1016 154.242 91.1953 153.352 90.5547C152.477 89.8984 150.938 89.3359 148.734 88.8672C146.547 88.3984 144.805 87.8359 143.508 87.1797C142.227 86.5234 141.273 85.7422 140.648 84.8359C140.039 83.9297 139.734 82.8516 139.734 81.6016C139.734 79.5234 140.609 77.7656 142.359 76.3281C144.125 74.8906 146.375 74.1719 149.109 74.1719C151.984 74.1719 154.312 74.9141 156.094 76.3984C157.891 77.8828 158.789 79.7812 158.789 82.0938H154.43C154.43 80.9062 153.922 79.8828 152.906 79.0234C151.906 78.1641 150.641 77.7344 149.109 77.7344C147.531 77.7344 146.297 78.0781 145.406 78.7656C144.516 79.4531 144.07 80.3516 144.07 81.4609C144.07 82.5078 144.484 83.2969 145.312 83.8281C146.141 84.3594 147.633 84.8672 149.789 85.3516C151.961 85.8359 153.719 86.4141 155.062 87.0859C156.406 87.7578 157.398 88.5703 158.039 89.5234C158.695 90.4609 159.023 91.6094 159.023 92.9688C159.023 95.2344 158.117 97.0547 156.305 98.4297C154.492 99.7891 152.141 100.469 149.25 100.469C147.219 100.469 145.422 100.109 143.859 99.3906C142.297 98.6719 141.07 97.6719 140.18 96.3906C139.305 95.0938 138.867 93.6953 138.867 92.1953H143.203C143.281 93.6484 143.859 94.8047 144.938 95.6641C146.031 96.5078 147.469 96.9297 149.25 96.9297C150.891 96.9297 152.203 96.6016 153.188 95.9453C154.188 95.2734 154.688 94.3828 154.688 93.2734Z" fill="white" />
                                <path d="M135.914 78.5312C135.258 78.4219 134.547 78.3672 133.781 78.3672C130.938 78.3672 129.008 79.5781 127.992 82V100H123.656V74.6406H127.875L127.945 77.5703C129.367 75.3047 131.383 74.1719 133.992 74.1719C134.836 74.1719 135.477 74.2812 135.914 74.5V78.5312Z" fill="#FFC000" />
                                <path d="M30.1498 110.629L44.7619 62.164" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M43.7299 65.5863C43.7299 65.5863 38.0554 58.28 28.1981 58.28C22.1981 58.28 19.4563 62.9232 14.5046 62.9232C9.55584 62.9232 4.80192 58.28 4.80192 58.28V88.4569C4.80192 88.4569 8.376 90.7791 12.6221 90.7791C16.8662 90.7791 18.5981 88.4569 24.3504 88.4569C29.8061 88.4569 34.9344 94.7452 34.9344 94.7452L43.7299 65.5863Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M43.7299 65.5863C43.7299 65.5863 40.7856 61.8835 36.8112 60.3605L33.7738 69.6219C33.7738 69.6219 37.6963 71.2977 40.8989 74.8716L43.6291 65.9283" fill="white" />
                                <path d="M33.7738 69.6218L30.4982 79.6071C30.4982 79.6071 27.9226 78.5195 26.1494 78.5195C24.3763 78.5195 22.6186 78.8285 22.6186 78.8285L24.9965 68.2094C24.9965 68.2094 25.6685 68.0965 26.497 68.0965C30.4666 68.0965 33.7738 69.6218 33.7738 69.6218Z" fill="white" />
                                <path d="M37.7088 85.3846L34.9344 94.744C34.9344 94.744 31.0973 90.3756 27.4426 89.1466L30.4973 79.6071C34.0166 81.2168 37.7088 85.3846 37.7088 85.3846Z" fill="white" />
                                <path d="M27.191 58.4065L24.9955 68.2082C23.2195 68.2082 18.2813 71.0822 18.2813 71.0822L20.2282 60.9601C21.3446 60.4642 24.2678 58.5707 27.191 58.4065Z" fill="white" />
                                <path d="M22.6186 78.8274L20.3578 88.9175C19.2192 88.9175 15.9552 90.5694 14.5354 90.5694L16.4438 80.6491C18.2813 80.0814 21.2554 79.0542 22.6186 78.8274Z" fill="white" />
                                <path d="M18.2813 71.0833L16.4429 80.6502C16.4429 80.6502 14.6035 81.0538 13.3411 81.0538C12.0797 81.0538 10.5062 80.7141 10.5062 80.7141L11.1034 71.9543C11.1034 71.9543 12.3216 72.4035 13.7981 72.4035C16.104 72.4035 18.2813 71.0833 18.2813 71.0833Z" fill="white" />
                                <path d="M11.7485 62.4649L11.1024 71.9532C11.1024 71.9532 8.09856 71.0571 4.8 68.0954L4.80192 58.28C8.58912 61.7251 11.7485 62.4649 11.7485 62.4649Z" fill="white" />
                                <path d="M10.5053 80.7141C10.5053 80.7141 7.61184 80.0768 4.80192 78.1388V88.4569C7.79424 90.1624 9.85248 90.4713 9.85248 90.4713L10.5053 80.7141Z" fill="white" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
                {/* <div className="burger" onClick={this.toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div> */}
                <div className={this.state.burger} onClick={this.toggleMenu}>
                    <div className="menu-btn__burger"></div>
                </div>
                <div className="menu-container">
                    <ul className={menu}>
                        <li>
                            <NavLink to="/" exact={true} className="nav-link" activeClassName='is-active' onClick={this.closeMobileMenu}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link" activeClassName='is-active' onClick={this.closeMobileMenu}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}