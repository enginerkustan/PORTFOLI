
import sql from '../assets/SQL.png'
import Github from '../assets/github.png'
import TestNG from '../assets/test.jpeg'
import Selenium from '../assets/selenium.jpeg'
import Jira   from '../assets/JIRA.jpeg'
import Python from '../assets/Python.jpeg'
import AutomationTest from '../assets/AutomationTest.jpeg'
import JAVA from '../assets/JAVA.jpeg'
import API from '../assets/API.jpeg'

const Skills = () => {
    return (
        <div name='skills' className='w-full screen bg-[#0a192f] text-gray-300 pt-20 mx-auto   mr-20 '>
            {/* Container */}
            <div className='max-w-[1000px]  px-20 p-4 flex flex-col justif-content w-full h-full '
            >
                <div >
                    {/* inline helping to keep under line as much as text length */}
                    <p className=' text-3xl font-bold inline border-b-4 border-pink-600 text-white' >Skills</p>
                    <p className='text-lg py-3 px-4'>These are the technologies I have worked with.</p>
                </div>

             

                <div className='w-full  grid grid-cols sm:grid-cols-3 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={JAVA } alt='react icon' />
                        <p className='pt-4'>JAVA </p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Selenium } alt='ejs icon' />
                        <p>Selenium</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={API} alt='ts icon' />
                        <p className='pt-4'>API</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TestNG} alt='CSS icon' />
                        <p>Test NG</p>
                    </div>
                    
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto color-gray' src={Github } alt='github icon' />
                        <p>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Jira } alt='js icon' />
                        <p>Jira </p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt='mongo icon' />
                        <p>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={AutomationTest } alt='node icon' />
                        <p className='pt-4'>Automation Test </p>
                    </div>
                    
                    
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={sql} alt='sql icon' />
                        <p className='pt-4'>SQL</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Skills