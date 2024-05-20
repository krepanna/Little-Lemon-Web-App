import React, { useState } from "react";

const Reservations = ({availableTimes, hours, selectedTimeValue, selectedDateValue, resetForm}) => {
    const [guestNumber, setGuestNumber] = useState('');
    const [occasionType, setOccasionType] = useState('');
    const occasionOptions = ["Birthday", "Anniversary", "Promotion", "Engagement"];
    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
        setGuestNumber('');
        setOccasionType('');
    }

    return (
        <section className="reservations">
            <div className="container">
                <form className="reservationForm" onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={availableTimes.date} onChange={selectedDateValue} />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={availableTimes.hours} onChange={selectedTimeValue}>
                        {hours.map((hour) => {
                            return <option key={hour} value={hour}>{hour}</option>;
                        })}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="Select" min="1" max="10" id="guests" value={guestNumber} onChange={e => setGuestNumber(e.target.value)} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasionType} onChange={e => setOccasionType(e.target.value)}>
                        {occasionOptions.map((occasionOption) => {
                            return <option key={occasionOption} value={occasionOption}>{occasionOption}</option>
                        })}
                    </select>
                    <input type="submit" value="Make Your reservation" disabled={!availableTimes.date || !availableTimes.hours || !guestNumber} />
                </form>
            </div>
        </section>
    )
}

export default Reservations;