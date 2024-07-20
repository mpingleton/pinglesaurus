function Badge(props: { badgeColor: string, textColor: string, text: string }) {
    return (
        <div className="badge" style={{
            backgroundColor: props.badgeColor, color: props.textColor
        }}>
            <span>{props.text}</span>
        </div>
    );
}

export default Badge