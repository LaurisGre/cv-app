
function Link({ icon = null, text, href = '' }) {
    return <a href={href}>
        {icon != null ? <i className={icon}></i> : ''}
        <span>{text}</span>
    </a>
}

export default Link;