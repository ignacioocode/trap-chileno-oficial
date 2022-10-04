import './Main.css'

const Main = ({children}) => {
    return (
        <>
            <div className="ContainerTitle">
                <h3>Últimos videos de Youtube</h3>
            </div>
            <section>
                <div className="container">
                    {children}
                </div>
            </section>
        </>
    )
}

export default Main