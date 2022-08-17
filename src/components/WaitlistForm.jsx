const WaitlistForm = () => {
    return(
        <div className='WaitlistForm'>
            <form action='https://submit-form.com/KSHU6qfv'>
                <input
                    type="hidden"
                    name="_feedback.success.title"
                    value="Welcome to the Waitlist!"
                    id="waitlisth2"
                />
                <input
                    type="hidden"
                    name="_feedback.success.message"
                    value="You’ll be the first to know when it’s ready!"
                    id="waitlisth2"
                />
                <input type="hidden" name="_feedback.dark" value="true" />
                <input id="tel" name="Phone Number" type='tel' placeholder="000-0000-0000"/>
                <input id="submitbtn" type='submit' name='submit' value="Join the Waitlist"/>
            </form>
        </div>
    )
}

export default WaitlistForm;