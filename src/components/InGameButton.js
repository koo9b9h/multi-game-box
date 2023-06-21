
const InGameButton = ({text, onClick}) => {
    
    return (
        <div className="InGameButton">
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export default InGameButton;