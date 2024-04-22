import './Help.scss'

export default function Help() {
    const helpInfo = [
        {
            id: 1,
            description: 'With our simple steps, you can get a free car shipping quote at Houston Auto Shipping!.'
        },
        {
            id: 2,
            description: 'With us, your vehicle moving will be the easiest thing to do.'
        },
        {
            id: 3,
            description: 'You can get the quote on our website or you can also get a direct quote by calling us and speaking to one of our live agents.'
        },
        {
            id: 4,
            description: 'After checking your information, our agents will get back to you with the quoted price.'
        }
    ]
    return (
        <div className="Help padding-m">
            <img src="/work.png" />
            <div className="Help__content">
                <h2>If you need an any <span>Help</span>,using Our auto transport <span>Quote Form</span>just let us know!</h2>
                {
                    helpInfo.map(elem => {
                        return (
                            <p key={elem.id}>{elem.description}</p>
                        )
                    })
                }
            </div>
            <div className="Help__buttons">
                <button><i className="bi bi-headset"></i> Call Us</button>
                <button><i className="bi bi-question-square-fill"></i> FAQs</button>
            </div>
        </div>
    )
}
