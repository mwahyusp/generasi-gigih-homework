import Card from '../Card'
import style from './style.module.css'

const Player = props => {
    return (
        <Card extraClass={style.player}>Player</Card>
    )
}

export default Player