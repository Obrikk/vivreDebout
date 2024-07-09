import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


function Calendrier() {
    return ( 
        <div className="calendrier">
            <Fullcalendar></Fullcalendar>
        </div>
     );
}

export default Calendrier;