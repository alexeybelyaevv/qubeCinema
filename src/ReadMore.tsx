import React, { useContext, useEffect, useState } from 'react'

export const ReadMore = ({ text }: { text: string }) => {

    const [isWholeTextShowed, setIsWholeTextShowed] = useState<boolean>(false)

    useEffect(() => {
        setIsWholeTextShowed(text?.length <= 100)
    }, [text])

    return (
        <div style={{ margin: "10px 0px" }}>
            {text !== null ? <p className='movie__summary'>
                {isWholeTextShowed ? text : `${text?.slice(0, 100)}...`}
            </p> : null}

            <button
                style={text === null || text?.length <= 100 ? { display: "none" } : {}}
                onClick={() => setIsWholeTextShowed(!isWholeTextShowed)}
            >
                {isWholeTextShowed ? "Hide" : "Read More"}
            </button>
        </div>
    )
}