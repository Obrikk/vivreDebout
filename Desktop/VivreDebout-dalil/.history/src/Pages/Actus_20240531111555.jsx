import Header from '../Header'
import Footer from '../Footer'

import '../styles/actus.css'
import Calendrier from '../components/Calendrier'


function Actus() {

    

    return ( 
        <>
            <Header></Header>
            <div className="actus">
                <Calendrier></Calendrier>

            </div>
        </>
     );
}

export default Actus;