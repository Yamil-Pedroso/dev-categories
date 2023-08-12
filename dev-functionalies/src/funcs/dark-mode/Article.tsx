import moment from 'moment'
import "./styles.css"

type ArticleProps = {
    title: string
    length: number
    date: string
    snippet: string
}

const Article = (props: ArticleProps) => {
  return (
    <article className='post'>
        <h2>{props.title}</h2>
        <div className='post-info'>
            <span>{moment(props.date).format('MMMM Do, YYYY')}</span>
            <span className='parag'>{props.length} min read</span>
        </div>
        <p>{props.snippet}</p>
    </article>
  )
}

export default Article