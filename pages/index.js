import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter} from 'next/router';
import appConfig from './config.json';


function Title(content) {
    const Tag = content.tag;
    return (
        <>
            <Tag>{content.children}</Tag>
            <style jsx>{`
            ${Tag}{
                color: ${appConfig.theme.colors.primary['500']};
                font-size: 32px;
                font-weight: 600;
            }
        `}</style>
        </>

    );
}

//Componente React
// function HomePage() {
//     return (
//     <div>
//         <GlobalStyle />
//         <Title tag="h1">Welcome back!</Title>
//         <h2>Discord - Alura Matrix</h2>
//     </div>

//     );
//   }

//   export default HomePage

export default function PaginaInicial() {
    // const username = 'Andy';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://live.staticflickr.com/65535/51845487649_951aff2d7a_k.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[900],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function(infos) {
                            infos.preventDefault();
                            roteamento.push(`/chat?username=${username}`);

                            // window.location.href ='/chat'
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Welcome Back!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>
                        {/* <input
                            type='text'
                            value={username}
                            onChange={function (event){
                                //onde ta o valor?
                                const valor = event.target.value;
                                //trocar o valor da variavel com o react
                                setUsername(valor);
                            }}
                        /> */}
                        <TextField
                            value={username}
                            placeholder='Type your github username'
                            onChange={function (event){
                                //onde ta o valor?
                                const valor = event.target.value;
                                //trocar o valor da variavel com o react
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                   textColor: appConfig.theme.colors.neutrals[200],
                                 mainColor: appConfig.theme.colors.neutrals[900],
                                  mainColorHighlight: appConfig.theme.colors.primary[500],
                                   backgroundColor: appConfig.theme.colors.neutrals[800],
                               },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Login'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                                width: '130px',
                                height: '130px'
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}