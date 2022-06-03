import './style.css'

export function Sugestao() {
    return (
        <>
        <div className="container-suggestion">
            
            <div className="header-sugestao">
                <img src={'https://i.pinimg.com/564x/06/9c/6c/069c6c999e69115cd9e333cb0c1bfd40.jpg'}/>
               
                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span> noninamari </span>
                        <p>noelia</p>
                    </div>
                    

                    <button className='trocar'>Mudar</button>
                </div>
            </div>

            <div className="header-main-suggestion">
                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion">
                <div className="infos-suggestion">
                    <img src={'https://i.pinimg.com/564x/61/64/7a/61647a8d1dcfd8347820441c966a0181.jpg'}/>

                    <div className="info-suggestion">
                        <span>patitoloko</span>
                        <p>Seguido pela pata</p>

                    </div>

                    <button className="follow">Seguir</button>

                </div>


                <div className="infos-suggestion">
                    <img src={'https://i.pinimg.com/564x/f3/68/b1/f368b1a0752364065c50d50fc9d272f7.jpg'}/>

                    <div className="info-suggestion">
                        <span>gatito</span>
                        <p>Seguido por tal pessoa</p>

                    </div>

                    <button className="follow">Seguir</button>

                </div>


                <div className="infos-suggestion">
                    <img src={'https://i.pinimg.com/564x/dd/20/e7/dd20e7683f7f6ca84e28590005e3c96f.jpg'}/>

                    <div className="info-suggestion">
                        <span>servivo</span>
                        <p>Seguido por tal pessoa</p>

                    </div>

                    <button className="follow">Seguir</button>

                </div>


                <div className="infos-suggestion">
                    <img src={'https://i.pinimg.com/564x/98/fd/09/98fd0971a0323e182b23101677503926.jpg'}/>

                    <div className="info-suggestion">
                        <span>gigi</span>
                        <p>Seguido por tal pessoa</p>

                    </div>

                    <button className="follow">Seguir</button>

                </div>


                <div className="infos-suggestion">
                    <img src={'https://i.pinimg.com/564x/e2/ca/a4/e2caa4484bdede4c9edf7b497e23130d.jpg'}/>

                    <div className="info-suggestion">
                        <span>vidaloka</span>
                        <p>Seguido por tal pessoa</p>

                    </div>

                    <button className="follow">Seguir</button>

                </div>



            </div>
            <footer className="footer-suggestion">
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Empregos &bull; Privacidade &bull; Termos &bull; Localizações &bull; Contas principais &bull; Hashtags &bull; Idioma</p>
                <p>&copy; 2022 INTAGRAM FROM META</p>

            </footer>



        </div>
 </>       
    );
}