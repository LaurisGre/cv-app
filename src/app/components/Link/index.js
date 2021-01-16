function Link({ href = '', icon = null, text = '' }) {
    return <a href={href}>
        {icon != null ? <i className={icon} /> : ''}
        <span>{text}</span>
    </a>
}

export default Link;