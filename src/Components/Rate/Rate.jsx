import './Rate.scss'

function Rate (props) {
    let { color, tariff, speed } = props;

    let header = `card__header card__header-${color}`;
    let body = `card__body card__body-${color}`;
    
    return (
        <article className={tariff === 550 ? 'card card_special' : 'card'}>
            <div className={header}>
                <p>Безлимитный {tariff}</p>
            </div>
            <div className={body}>
                <p className='card__currency'>руб</p>
                <p className='card__price'>{tariff}</p>
                <p className='card__period'>/мес</p>
            </div>
            <div className="card__description">
                <p>до {speed} Мбит/сек</p>
            </div>
            <div className="card__footer">
                <p>Объем включенного трафика не ограничен</p>
            </div>
        </article>
    )
}

export default Rate;

