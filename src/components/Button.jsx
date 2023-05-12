
export default function Button( { className, character, onClick } ) {

    return <button onClick={onClick} className={className}>{character}</button>
}