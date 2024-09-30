import React from 'react';
import Datepicker from 'react-datepicker';

function AppointmentPage() {

    const myLabels = React.useMemo(() => {
        return [{
            start: '2024-10-01',
            textColor: '#e1528f',
            title: '1 SPOTS'
        }];
    }, []);
    
    const myInvalid = React.useMemo(() => {
        return [{
            start: '2024-09-30T08:00',
            end: '2024-09-30T13:00'
        }, {
            start: '2024-09-30T15:00',
            end: '2024-09-30T17:00'
        }, {
            start: '2024-09-30T19:00',
            end: '2024-09-30T20:00'
        }];
    }, []);
                            

  return (
    <div>
      <h1>Maak een afspraak!</h1>
      <Datepicker 
        controls={['calendar', 'timegrid']}
        min="2024-09-30T00:00"
        max="2025-03-30T00:00"
        minTime="08:00"
        maxTime="19:59"
        stepMinute={60}
        labels={myLabels}
        invalid={myInvalid}
    />
    </div>
  );
}

export default AppointmentPage;