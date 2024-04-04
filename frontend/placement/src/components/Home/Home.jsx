import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

export default function Home() {

    const comingCompany = [
        {
            company: "google",
            logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
            background: "Google is leading Tech Company in the world. From search engines to AI Applications are all part of Google.",
            requirements: "C++, Java, Python",
            arival: "2 Days"
        },
        {
            company: "apple",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pW0TOZyl_OZMIuo5HjUsyQHaIf%26pid%3DApi&f=1&ipt=6c9a98e5bc2669f63586e2ad9d23b94bd1d7d3901f5f574c72f519dbe515f5bc&ipo=images",
            requirements: "Swift, Typescript",
            background: "Apple is the Leading Tech Company ranging from Smartphones to Presonal Computers. It is famously for Mac and IOS.",
            arival: "1 Day"
        },
        {
            company: "microsoft",
            logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&f=1&nofb=1&ipt=88349f3f1701e2d7db800a6103a175be39ae730ec05a424e898dfd300dda202c&ipo=images",
            requirements: "C#, .Net, Java",
            background: "Leading Company in the field of Operating Systems for the Personal Computers, Microsoft is another tech giant.",
            arival: "3 Days"
        },
    ];

    return (
        <>
            <Navbar />
            <div
                style={{
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "center",
                    "justifyContent": "center"
                }}
            >
                <div className='homeScrollBar'>
                    <div>
                        Upcoming Companies
                    </div>
                    <div className='homeScrollBarMain'>
                        {comingCompany.map((key) =>
                            <div
                                key={key.company}
                                className='companyCard'>
                                <div>
                                    <img src={`${key.logo}`} />
                                    <span>
                                        {key.company.toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                {key.background}
                                </div>
                                <div>
                                    <span>
                                        {key.requirements}
                                    </span>
                                    <span>
                                        {key.arival}
                                    </span>
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className='homeCurrentPost'>

                </div>
                <div className='homePastPost'>

                </div>
            </div>
        </>
    )
}
