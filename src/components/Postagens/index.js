import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'
import { BsChat } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { BsEmojiSmile } from 'react-icons/bs'

import { useState } from 'react'



export function Postagens() {

    const [like, setLike] = useState(<IoMdHeartEmpty/>)
    const [like1, setLike1] = useState(<IoMdHeartEmpty/>)
    const [like2, setLike2] = useState(<IoMdHeartEmpty/>)
    const [like3, setLike3] = useState(<IoMdHeartEmpty/>)
    const [like4, setLike4] = useState(<IoMdHeartEmpty/>)
    const [like5, setLike5] = useState(<IoMdHeartEmpty/>)
    const [like6, setLike6] = useState(<IoMdHeartEmpty/>)
    const [like7, setLike7] = useState(<IoMdHeartEmpty/>)
    const [like8, setLike8] = useState(<IoMdHeartEmpty/>)


    const [numero, setNumero] = useState(90)
    const [numero1, setNumero1] = useState(90)
    const [numero2, setNumero2] = useState(90)
    const [numero3, setNumero3] = useState(90)
    const [numero4, setNumero4] = useState(90)
    const [numero5, setNumero5] = useState(90)
    const [numero6, setNumero6] = useState(90)



    return (
        <>
        {/*IMAGEM UM */}
    <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://i.pinimg.com/564x/06/9c/6c/069c6c999e69115cd9e333cb0c1bfd40.jpg" />

                    <p>noninamari</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                <img src="https://files.tecnoblog.net/wp-content/uploads/2015/03/8551.gif" />
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike(!like)} >

                                    {like ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>noninamari</strong> Tô mais perdida do que cego em tiroteio

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 dia</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>

            
 
            {/* Video - olivia*/}



 
            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj" />

                    <p>oliviarodrigo</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                {/* <img src="https://files.tecnoblog.net/wp-content/uploads/2015/03/8551.gif" /> */}

                <iframe width="469" height="315" src="https://www.youtube.com/embed/ngG2XKJ_y1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
                 </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike1(!like1)} >

                                    {like1 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like1 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>oliviarodrigo</strong> SOUR

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 dia</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>

            {/* - PROA */}
            
            
            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=1661990400&v=beta&t=D6F7rUWBWAJyrUZ9p8WpBN1savWEYLRl8o3fquxZkQI"/>

                    <p>instituto.proa</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}

                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6935277949822627841?compact=1" height="700" width="469" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
                
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike2(!like2)} >

                                    {like2 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like2 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>instituto.proa</strong> Últimas semanas para você se inscrever no PROPROFISSÃO. Não vai perder essa oportunidade, né?

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 4 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>

 
        {/* IMAGEM TRES - PROFS*/}

 
            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://media-exp1.licdn.com/dms/image/C4D03AQFp2_Y7qRq2Ng/profile-displayphoto-shrink_400_400/0/1517465523742?e=1659571200&v=beta&t=3AeVGW2BrH0vvqDI4htF9-WQFZo8rraeH4_0lZhsr0U" />

                    <p>gab.augustoz</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                <img src="https://img.itdg.com.br/tdg/images/blog/uploads/2018/07/bolo-de-cenoura-invertido-receita.jpg" />
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike3(!like3)} >

                                    {like3 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like3 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>gab.augustoz</strong> Hummm... Bolo de cenoura invertido

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>


            {/* IMAGEM  QUATRO - DANI */}



            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://lh3.googleusercontent.com/09Hc3o6Ip5XYdxTB6QGE1TIp2tTEn9S2OT6bFzrVG1eHWvOKzdLt6Qvami22sMA06bfAJiHbHvJnj3XB1SGvyaEb71YksNtktxjKf64aF9HOHqrpPAGY_yUUWhXc62HDcihY0tzxOnW04GgDdQT7ZINfFC3j95ftcGu7OZNB2VST1I1MjDreMoN7Em_DYUdMNwSIJWYoE9333jGKl-Hn7HmXblz1pkdPhb0LrBCI59OvjlRGvmjcVyoAg7OwsnGIdBgKqqOVRBNgWV25edQB9f5ZbsAp_M9GTp9ryD4w9wF4bEWpVYou4fzY1WqzyF1rcX5tbZBszZAotQYWUPRnbXRNrkhiNpv9VWFMTOqIGauZ6j2JfqTLj_z8-vVr43zy5hWMuAM3tYnaJGnU_8oHl-BXgBjM2q07i0EZ86OXtxkpg5R_4mZnts5K8OCENAMpYOxICPPNgKaQaerHNJY2CrUyH1Ii9VJIepIQNdkBu6Nw5YD9Vqmp_b15O_FsBJy_u4B0kzpVGBfrMvYxItoAbydmKqWyiDn0ZioOWQpgKC7M4VG5mj7-Cts8a79x3yqnNG4ToPjm9S0Fv7PLZX0r9vM074d0stmb0PMHGHEAvTYhtnyc-5GA1wv1ozi_8YcdtkugDXBshhp5EqxbpV0N5ewcR6GYXNdtx0xAGePlx_aJJkMnzBr-eqCV5zZzcjlTDH1tA0XMB68oeIA7yLeLXOVoHtPgi_ndIC6OAa3Hjy-x3RbKaldyqtdJLW7Sk0b5RvMHfwGshJbiyFcJtkpp3loQwU1qtF-VMQJTwQGQt_NoaBGhMD-g__YVfcYPQw92dxgRkD0c=s640-no?authuser=1" />

                    <p>daniivis</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                <img src="https://lh3.googleusercontent.com/09Hc3o6Ip5XYdxTB6QGE1TIp2tTEn9S2OT6bFzrVG1eHWvOKzdLt6Qvami22sMA06bfAJiHbHvJnj3XB1SGvyaEb71YksNtktxjKf64aF9HOHqrpPAGY_yUUWhXc62HDcihY0tzxOnW04GgDdQT7ZINfFC3j95ftcGu7OZNB2VST1I1MjDreMoN7Em_DYUdMNwSIJWYoE9333jGKl-Hn7HmXblz1pkdPhb0LrBCI59OvjlRGvmjcVyoAg7OwsnGIdBgKqqOVRBNgWV25edQB9f5ZbsAp_M9GTp9ryD4w9wF4bEWpVYou4fzY1WqzyF1rcX5tbZBszZAotQYWUPRnbXRNrkhiNpv9VWFMTOqIGauZ6j2JfqTLj_z8-vVr43zy5hWMuAM3tYnaJGnU_8oHl-BXgBjM2q07i0EZ86OXtxkpg5R_4mZnts5K8OCENAMpYOxICPPNgKaQaerHNJY2CrUyH1Ii9VJIepIQNdkBu6Nw5YD9Vqmp_b15O_FsBJy_u4B0kzpVGBfrMvYxItoAbydmKqWyiDn0ZioOWQpgKC7M4VG5mj7-Cts8a79x3yqnNG4ToPjm9S0Fv7PLZX0r9vM074d0stmb0PMHGHEAvTYhtnyc-5GA1wv1ozi_8YcdtkugDXBshhp5EqxbpV0N5ewcR6GYXNdtx0xAGePlx_aJJkMnzBr-eqCV5zZzcjlTDH1tA0XMB68oeIA7yLeLXOVoHtPgi_ndIC6OAa3Hjy-x3RbKaldyqtdJLW7Sk0b5RvMHfwGshJbiyFcJtkpp3loQwU1qtF-VMQJTwQGQt_NoaBGhMD-g__YVfcYPQw92dxgRkD0c=s640-no?authuser=1" />
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike4(!like4)} >

                                    {like4 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like4 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>daniivis</strong> Sou linda

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>


            {/* ROSALIA*/}


            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://i.pinimg.com/564x/0e/44/84/0e448429759bfe33ae3441ba4b7efe21.jpg" />

                    <p>rosalia.vt</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                {/* <img src="https://files.tecnoblog.net/wp-content/uploads/2015/03/8551.gif" /> */}

                <iframe width="469" height="315" src="https://www.youtube.com/embed/MkR7NC-HNCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike5(!like5)} >

                                    {like5 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like5 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>rosalia</strong> MotoMami

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>


 


        {/* TOP */}






            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://yt3.ggpht.com/ytc/AKedOLShoAv85PyHPQZXkdEYAirEFkVlHT7QL0SO4jnLPQ=s176-c-k-c0x00ffffff-no-rj" />

                    <p>twentyonepilots</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                {/* <img src="https://files.tecnoblog.net/wp-content/uploads/2015/03/8551.gif" /> */}

                <iframe width="469" height="315" src="https://www.youtube.com/embed/LNWO_vJBboY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike6(!like6)} >

                                    {like6 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like6 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>twentyonepilots</strong> TOP

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>






            {/* IMAGEM - PINTEREST  */}






            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj" />

                    <p>oliviarodrigo</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                <img src="https://i.pinimg.com/564x/1a/bf/4c/1abf4c6328393e5fedfd389b77cd4478.jpg" />
                </div>


            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike7(!like7)} >

                                    {like7 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like7 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>oliviarodrigo</strong> moon

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>


















            <div className="post">
            <header className="header-post">

                <div className="infos-post">
                    <img className="img-header-post" src="https://logospng.org/download/nasa/logo-nasa-2048.png" />

                    <p>nasa</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                {/* <img src="https://i.pinimg.com/564x/bd/3d/49/bd3d49c0df84c71f900a31442f460b01.jpg" /> */}
                <img src="https://i.pinimg.com/564x/01/8f/cc/018fcc9d0c9ac6ddfdd368386835b916.jpg" />

                {/* <iframe width="469" height="315" src="https://www.youtube.com/embed/ngG2XKJ_y1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div> */}
                </div>
            <div className='footer-post'>

                <IconContext.Provider value={{ size: "30px" }}>

                    <section className='engagement-post'>
                        <div className='icones-1'>
                            
                            <div className='icon'>
                                <button onClick={() => setLike8(!like8)} >

                                    {like8 ? <IoMdHeartEmpty/> : <FcLike/>}
                                </button> 

                            </div>

                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>

                        </div>
                        <div className='icon'><BsBookmark /></div>

                    </section>

                </IconContext.Provider>

                <section className="like">
                    <span>
                    {like8 ? 90 : 91} curtidas
                    </span>
                </section>

                <div className="legend">
                    <p>
                        <strong>nasa</strong> 

                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            </div>

        </>
    )
}