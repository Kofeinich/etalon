import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import SVGEstate from "../../templates/svg/svg-views/SVGEstate";
import useWindowWidth from "../window";

const Estate = () => {
    let mt='10vh'
    let fsH='36px'
    let fs = 'lg'
    let fs2 = '22px'
    let mbx = '120px'
    return (
        <>
            <Flex
                m={'0px'}
                justify={'center'}
                w={'100%'}
            >
                <Box
                    w={'100%'}
                    maxWidth={'600px'}
                >
                    <SVGEstate width={'100%'} height={'100%'}/>
                </Box>
            </Flex>
            <Box
                mt={mt}
                fontFamily={'CasperRegular'}
                mb={mbx}
            >
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                        <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'}  fontSize={fsH}>Практика - сделки с недвижимостью</Text>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                        <Text as={"b"} p={'10px'} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Гражданское дело о признании недействительным <br/>договора купли-продажи квартиры</Text>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex
                        maxWidth={'1200px'}
                        display={'column'}
                    >
                        <p className={'my-paragraph'}>
                            К адвокату  обратился гражданин   с  просьбой  защитить  его  интересы в    районном  суде  по  предъявленному  к  нему  иску  о  признании  договора купли-продажи  ½ доли квартиры  недействительной (ничтожной)  сделкой.  Истец   свои  требования  мотивировал  тем,  что  в  период, когда  он  находился  с  нашей    доверительницей   в  зарегистрированном  браке,  он с  нарушением   требований  закона, как  он  полагал,  оформил  ½  доли в   трехкомнатной  квартире  на   свою  супругу.   При  этом,  в  ходе  судебного  разбирательства   Истец   пытался  убедить суд,  что    бывшая  супруга  его   всячески   обманывала,  вводила  в  заблуждение,  давила  на  него  психологически,  пугая  разводом,   и в результате чего,   он  не осознавая  значение   своих  действий,   не желая того,   совершил  сделку  по  отчуждению   ½  доли  в  спорной   квартире  в  пользу  своей  бывшей  жены.  А  после  того, как  они развелись,  он  яко бы  остался  обманутым.
                            Суд  отказал  Истцу в удовлетворении  исковых  требований. Адвокату  удалось  доказать  суду (предоставив   необходимые  доказательства  и  аргументы),  что  ни какого  обмана  со  стороны  нашей доверительницы не было,   ни  какой  сделки   между   ней   и   Истцом  по  купли-продажи  ½ доли  квартиры  не  совершалось.
                            Адвокату удалось  убедить  суд в том,   что  наша  доверительница была  самостоятельным участником  и  стороной   сделки,   а  деньги, которые  были   оплачены Истцом  за  квартиру, в  том  числе  за  ½  доли в  квартире, оформленную  на     нашу  доверительницу,     являлись ни чем иным,  как  дарением   со  стороны  Истца   в  пользу нашей  доверительницы.
                            По  данному   делу  состоялось  апелляционное  заседание вышестоящего суда,  которое   оставило  решение суда  перовой  инстанции в  силе.
                        </p>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
export default Estate