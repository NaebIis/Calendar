import React, { useState } from 'react'

const SevenDayEvents = () => {
  const [day, setDay] = useState(0);
    return (
      <div className='SevenDayEvents'>
        {/* {console.log(day)} */}
        HELLO! {day}
      </div>
    )
 }


export default SevenDayEvents;