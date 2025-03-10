import Rate from '../Rate/Rate';
import './Content.scss'

function Content () {
    return(
        <main>
            <div className='cardList'>
                <Rate
                    color='blue'
                    tariff={300}
                    speed={10}
                />
                <Rate
                    color='green'
                    tariff={450}
                    speed={50}
                />
                <Rate
                    color='red'
                    tariff={550}
                    speed={100}
                />
                <Rate
                    color='black'
                    tariff={1000}
                    speed={200}
                />
            </div>
        </main>
    )
}

export default Content;