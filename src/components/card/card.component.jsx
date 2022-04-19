import './card.styles.css'

const Card = () => {
    return (
        <>
            <div className="card-container">
                <img alt='monsterImage' src='https://robohash.org/1?set=set2&size=180x180' />
                <h1>Name</h1>
                <p>email@gmail.com</p>
            </div>
        </>
    )
}

export default Card