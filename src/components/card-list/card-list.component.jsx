import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = (props) => {
    const {monsters} = props
    return(
        <div className='card-list'>
            {
                monsters.map(
                    monster => <Card 
                                    id = {monster.id}
                                    name = {monster.name} 
                                    email = {monster.email}
                                />
                )
            }
        </div>
        
    )
}

export default CardList