import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


function Calendrier() {

    const events= [
        {
            title:"Titre",
            start:'2024-01-05T08:00:00',
            end:'2024-01-05T09:00:00'
        }
    ]


    return ( 
        <div className="calendrier">
            <Fullcalendar
                plugins={[dayGridPlugin,timeGridPlugin, listPlugin]}
                initialView={"dayGridMonth"}
                
                events={events}
            />
        </div>
     );
}

export default Calendrier;