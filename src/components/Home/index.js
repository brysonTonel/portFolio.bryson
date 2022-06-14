import LogoTitle from '../../assets/images/logo-b.png'
import {Link} from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r','y','s','o','n']
    const jobArray = ['A','n','d','r','o','i','d', ' ','D','e','v','e','l','o','p','e','r']


    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>`m</span>
                <img src={LogoTitle} alt= "developer"/>
                <AnimatedLetters  letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters  letterClass={letterClass}
                strArray={jobArray}
                idx={19} />
                </h1>
                <h2> Mobile Developer / JavaScript Developer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home