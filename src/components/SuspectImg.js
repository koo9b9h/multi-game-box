
const SuspectImg = ({src, id ,onClick}) => {
    return (
        <div className="SuspectImg">
            <button onClick={()=>onClick(id)}>
                <img src={src}/>
            </button>
        </div>
    );
};

export default SuspectImg;