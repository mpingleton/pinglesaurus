function Badge(props) {
    return (
        <div className="badge" style={{
            backgroundColor: props.badgeColor, color: props.textColor
        }}>
            <span>{props.text}</span>
        </div>
    );
}

export default Badge;