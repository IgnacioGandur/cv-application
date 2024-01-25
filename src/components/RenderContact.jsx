export default function RenderContact({ personalInfo, backgroundOptions }) {
    return (
        <>
            <div className='container'>
                <p>{personalInfo.address},</p>
                <p>
                    {personalInfo.city}, {personalInfo.country}.
                </p>
                <p>
                    <i
                        style={{
                            fontSize: '1.3rem',
                            color: '#adb5bd',
                            margin: '2px 2px 2px 0',
                        }}
                        className='fa-solid fa-at'
                    ></i>{' '}
                    <a href={`mailto:${personalInfo.email}`}>
                        {personalInfo.email}
                    </a>
                </p>
                <p>
                    <i
                        style={{ fontSize: '1.5rem', color: '#29ac00' }}
                        className='fa-brands fa-square-whatsapp'
                    ></i>{' '}
                    {personalInfo.phoneNumber}
                </p>
            </div>
            {(personalInfo.xTwitter ||
                personalInfo.instagram ||
                personalInfo.linkedin ||
                personalInfo.githubProfile ||
                personalInfo.portfolioLink) && (
                <div className='social-media'>
                    {personalInfo.xTwitter && (
                        <p>
                            <i
                                style={{
                                    fontSize: '1.5rem',
                                    color: backgroundOptions.darkBackground
                                        ? 'white'
                                        : 'black',
                                }}
                                className='fa-brands fa-square-x-twitter'
                            ></i>{' '}
                            <a
                                href={personalInfo.xTwitterLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                @{personalInfo.xTwitter}
                            </a>
                        </p>
                    )}
                    {personalInfo.instagram && (
                        <p>
                            <i
                                style={{ fontSize: '1.5rem', color: '#f70496' }}
                                className='fa-brands fa-square-instagram'
                            ></i>{' '}
                            <a
                                href={personalInfo.instagramLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                instagram.com/{personalInfo.instagram}
                            </a>
                        </p>
                    )}
                    {personalInfo.linkedin && (
                        <p>
                            <i
                                style={{ fontSize: '1.5rem', color: '#007ab5' }}
                                className='fa-brands fa-linkedin'
                            ></i>{' '}
                            <a
                                href={personalInfo.linkedinLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                linkedin.com/in/{personalInfo.linkedin}
                            </a>
                        </p>
                    )}
                    {personalInfo.githubProfile && (
                        <p>
                            <i
                                style={{
                                    fontSize: '1.5rem',
                                    color: backgroundOptions.darkBackground
                                        ? 'white'
                                        : 'black',
                                }}
                                className='fa-brands fa-square-github'
                            ></i>{' '}
                            <a
                                href={personalInfo.githubProfile}
                                target='_blank'
                                rel='noreferrer'
                            >
                                {personalInfo.githubProfile}
                            </a>
                        </p>
                    )}
                    {personalInfo.portfolioLink && (
                        <p>
                            <i
                                style={{ fontSize: '1.15rem' }}
                                className='fa-solid fa-link'
                            ></i>{' '}
                            <a
                                href={personalInfo.portfolioLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                {personalInfo.portfolioLink}
                            </a>
                        </p>
                    )}
                </div>
            )}
        </>
    );
}
