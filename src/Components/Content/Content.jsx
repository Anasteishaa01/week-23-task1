import st from '../Content/Content.module.scss'

function Content ({price, classData, speed}) {
    return <main className={st[classData]}>
        <div className='card'>
            <div className='card_header'>
                <h1>Безлимитный {price}</h1>
            </div>
            <span className='card_price'>
                <p className='card_currency'>руб</p>
                <p className='card_name'>{price}</p>
                <p className='card_period'>/мес</p>
            </span>
            <div className='card_speed'>
                <p>до {speed} Мбит/сек</p>
            </div>
            <div className='card_footer'>
                <p>Объем включенного трафика не ограничен</p>
            </div>
        </div>
    </main>
    
}

export default Content;