import {
    Button,
    Divider,
    Icon,
    Text, Center, Flex, Box, Input, Grid,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import SvgBriefcase from "../../templates/svg/home-page/BriefCase";
import SvgAlarmFill from "../../templates/svg/home-page/Alarm";
import SvgReceipt from "../../templates/svg/home-page/Receipt";
import SvgPeople from "../../templates/svg/home-page/People";
import SvgEstate from "../../templates/svg/home-page/Estate";
import useWindowWidth from "../window"
import { Link } from "gatsby"

const Attachments = () => {

    const w = useWindowWidth()
    let attach
    let padAll = '10vw'
    if (w < 600){
        padAll = '5vw'
    }

    if (w >= 1000){
        attach = <Box
            w={'100%'}
            overflowY="scroll"
            fontFamily={'CasperRegular'}
            color={'#2d334a'}
            align={'center'}
            bg={'white'}
            mb={'150px'}
        >
            <Center h={'15vh'} maxHeight={'300px'} m={'0px'} w={'100%'} bg={'white'} >
                <Text fontFamily={'CasperBoldItalic'} m={'0px'} w={'100%'} color={'#272343'} align='center' fontSize={'36px'}>Популярные услуги</Text>
            </Center>
            <Grid
                templateColumns={'1fr 1fr'}
                justify={'space-between'}
                maxWidth={'1400px'}
                mt={'30px'}
                w={'61%'}
            >
                <Box pb={'0px'} pt={'0px'}>
                    <Box>
                        <SvgBriefcase width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Center h={'60px'}>
                        <Link to='/arbitrazhnaya-praktika'>
                            <Button variant='text'
                                    fontSize={'22px'}
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                            >
                                Арбитраж
                            </Button>
                        </Link>
                    </Center>
                    <Text pl={'25px'} pr={'25px'} align={'justify'} fontSize={'18px'} maxWidth={'400px'}>
                        Арбитра&shy;жные дела — один из ас&shy;пек&shy;тов жи&shy;зни, с ко&shy;то&shy;рым мо&shy;гут стол&shy;кну&shy;ться как юр&shy;лица,
                        так и обыч&shy;ные граж&shy;да&shy;не, за&shy;ни&shy;ма&shy;ющиеся биз&shy;не&shy;сом, либо же ста&shy;вшие уча&shy;стни&shy;ками  в арби&shy;траж&shy;ном про&shy;цессе.
                        Я ста&shy;ну ва&shy;шим на&shy;деж&shy;ным пар&shy;тне&shy;ром
                        в про&shy;цессе урегу&shy;ли&shy;ро&shy;вания этой ка&shy;те&shy;гории спо&shy;ров в ар&shy;би&shy;траж&shy;ном  су&shy;до&shy;про&shy;из&shy;водстве.
                    </Text>
                </Box >
                <Box pb={'0px'}  pt={'0px'}>
                    <Box>
                        <SvgReceipt width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Center h={'60px'}>
                        <Link to='/semeynyye-spory'>
                            <Button variant='text'
                                    fontSize={'22px'}
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                            >
                                Семейные споры
                            </Button>
                        </Link>
                    </Center>
                    <Text pl={'25px'} pr={'25px'} align={'justify'} fontSize={'18px'} maxWidth={'400px'}>
                        Иногда су&shy;пруги не могут са&shy;мос&shy;то&shy;ятельно ре&shy;шить се&shy;ме&shy;йные споры.
                        Дело до&shy;хо&shy;дит до раз&shy;вода, ну&shy;жно опре&shy;де&shy;литься с раз&shy;делом сов&shy;ме&shy;стно при&shy;обре&shy;тенного иму&shy;щества,
                        а так&shy;же с кем и где  оста&shy;нутся жить несо&shy;вершен&shy;но&shy;летние де&shy;ти.
                        По&shy;мощь юри&shy;ста по&shy;зво&shy;лит зна&shy;чи&shy;тельно об&shy;лег&shy;чить брако&shy;раз&shy;водный процесс, вполне воз&shy;можно,
                        что суп&shy;руги смо&shy;гут полю&shy;бовно и без су&shy;дебных тяжб ре&shy;шить свои соб&shy;ствен&shy;ные се&shy;мейные проб&shy;лемы.
                    </Text>
                </Box>
            </Grid>
            <Grid
                justify={'space-between'}
                templateColumns={'1fr 1fr'}
                maxWidth={'1200px'}
                mt={'30px'}
                w={'61%'}
            >
                <Box pb={'0px'} pt={'0px'}>
                    <Box>
                        <SvgPeople width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Center h={'60px'}>
                        <Link to='/nasledstvennyye-spory'>
                            <Button variant='text'
                                    fontSize={'22px'}
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                            >
                                Наследственные споры
                            </Button>
                        </Link>
                    </Center>
                    <Text pl={'25px'} pr={'25px'} align={'justify'} fontSize={'18px'} maxWidth={'400px'}>
                        Жизнь чело&shy;века устроена таким обра&shy;зом, что раньше или  поз&shy;же,
                        а нам все-таки при&shy;хо&shy;дится стол&shy;кнуться с во&shy;про&shy;сами по на&shy;сле&shy;до&shy;ванию дви&shy;жи&shy;мого
                        и не&shy;дви&shy;жи&shy;мого иму&shy;щества. При&shy;чем в про&shy;цессе са&shy;мого уста&shy;но&shy;вления на&shy;следства могут воз&shy;ни&shy;кнуть нео&shy;бычайно
                        слож&shy;ные пра&shy;во&shy;вые си&shy;туации, с ко&shy;то&shy;рыми само&shy;стоя&shy;тельно спра&shy;виться будет не&shy;просто, а то и во&shy;все не&shy;воз&shy;можно.
                    </Text>
                </Box>
                <Box pb={'0px'} pt={'0px'}>
                    <Box>
                        <SvgAlarmFill width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Center h={'60px'}>
                        <Link to='/vzyskaniye-dolgov'>
                            <Button variant='text'
                                    fontSize={'22px'}
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                            >
                                Взыскание долгов
                            </Button>
                        </Link>
                    </Center>
                    <Text pl={'25px'} pr={'25px'} align={'justify'} fontSize={'18px'} maxWidth={'400px'}>
                        Как часто люди да&shy;ют в долг зна&shy;чи&shy;тель&shy;ные сум&shy;мы де&shy;нег зна&shy;ко&shy;мым, рас&shy;счи&shy;тывая на их чест&shy;ность и по&shy;ря&shy;доч&shy;ность,
                        а так&shy;же обе&shy;ща&shy;ние вер&shy;нуть всю сум&shy;му то&shy;чно в срок.
                        Но ино&shy;гда долг не спе&shy;шат воз&shy;вра&shy;щать. При&shy;чины мо&shy;гут быть раз&shy;ными, но если вы чув&shy;ству&shy;ете,
                        что зае&shy;мщик вас про&shy;сто об&shy;ма&shy;нывает,
                        то за&shy;ду&shy;май&shy;тесь о при&shy;ну&shy;ди&shy;тель&shy;ных спо&shy;со&shy;бах воз&shy;врата дол&shy;га.
                        И как по&shy;ка&shy;зы&shy;вает  прак&shy;ти&shy;ческий  опыт – чем быс&shy;трее, тем лучше.
                    </Text>
                </Box >
            </Grid>
            <Box pb={'0px'} pt={'0px'} mt={'30px'}>
                <Box>
                    <SvgEstate width={48} height={48} fill={'#272343'}/>
                </Box>
                <Center h={'60px'}>
                    <Link to='/sdelki-s-nedvizhimostyu'>
                        <Button variant='text'
                                fontSize={'22px'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                        >
                            Недвижимость
                        </Button>
                    </Link>
                </Center>
                <Text pl={'25px'} pr={'25px'} align={'justify'} fontSize={'18px'} maxWidth={'400px'}>
                    Не&shy;дви&shy;жи&shy;мость – это до&shy;воль&shy;но до&shy;ро&shy;го&shy;стоящая по&shy;купка, по&shy;этому не&shy;об&shy;ходимо скру&shy;пуле&shy;зно от&shy;нес&shy;тись
                    к офор&shy;мле&shy;нию до&shy;ку&shy;мен&shy;тов и про&shy;верке юри&shy;ди&shy;ческой чис&shy;тоты сдел&shy;ки что&shy;бы
                    ог&shy;ра&shy;дить себя от  воз&shy;мож&shy;ных не&shy;прият&shy;ностей, по&shy;скольку   жи&shy;лье мо&shy;жет быть в за&shy;логе,
                    а про&shy;да&shy;вец – сов&shy;сем не тот че&shy;ло&shy;век, за ко&shy;то&shy;рого себя вы&shy;дает.
                    Я по&shy;мо&shy;гу вам юри&shy;ди&shy;чески  гра&shy;мотно  сос&shy;тавить до&shy;говор,  со&shy;брать до&shy;ку&shy;менты,
                    не&shy;обхо&shy;димые для офор&shy;мле&shy;ния сдел&shy;ки, про&shy;верить лич&shy;ность вла&shy;дельцев не&shy;дви&shy;жимости,
                    ор&shy;га&shy;ни&shy;зовать и про&shy;кон&shy;троли&shy;ровать все вза&shy;имо&shy;рас&shy;четы между сто&shy;ронами.
                </Text>
            </Box>
        </Box>
    } else {
        attach = <Box
            w={'100%'}
            overflowY="scroll"
            fontFamily={'CasperRegular'}
            color={'#2d334a'}
            align={'center'}
            mb={'120px'}
            bg={'white'}
        >
            <Center h={'15vh'} maxHeight={'300px'} m={'0px'} w={'100%'} bg={'white'} >
                <Text fontFamily={'CasperBoldItalic'} m={'0px'} w={'100%'} color={'#272343'} align='center' fontSize={'32px'}>Популярные услуги</Text>
            </Center>
            <Box
                pl={padAll}
                pr={padAll}
            >
                <Box mb={'40px'} mt={'40px'}>
                    <Box>
                        <SvgBriefcase width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Link to='/arbitrazhnaya-praktika'>
                        <Button variant='text'
                                fontSize={'22px'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                        >
                            Арбитраж
                        </Button>
                    </Link>
                    <Center pl={'5vw'} pr={'5vw'} pt={'2vw'}>
                        <Text align={'justify'} fontSize={'16px'}>
                            Арбитра&shy;жные дела — один из ас&shy;пек&shy;тов жи&shy;зни, с ко&shy;то&shy;рым мо&shy;гут стол&shy;кну&shy;ться как юр&shy;лица,
                            так и обыч&shy;ные граж&shy;да&shy;не, за&shy;ни&shy;ма&shy;ющиеся биз&shy;не&shy;сом, либо же ста&shy;вшие уча&shy;стни&shy;ками  в арби&shy;траж&shy;ном про&shy;цессе.
                            Я ста&shy;ну ва&shy;шим на&shy;деж&shy;ным пар&shy;тне&shy;ром
                            в про&shy;цессе урегу&shy;ли&shy;ро&shy;вания этой ка&shy;те&shy;гории спо&shy;ров в ар&shy;би&shy;траж&shy;ном  су&shy;до&shy;про&shy;из&shy;водстве.
                        </Text>
                    </Center>
                </Box >
                <Box mb={'40px'} mt={'0px'}>
                    <Box>
                        <SvgReceipt width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Link to='/semeynyye-spory'>
                        <Button variant='text'
                                fontSize={'22px'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                        >
                            Семейные споры
                        </Button>
                    </Link>
                    <Center pl={'5vw'} pr={'5vw'} pt={'2vw'} >
                        <Text align={'justify'} fontSize={'16px'}>
                            Иногда су&shy;пруги не могут са&shy;мос&shy;то&shy;ятельно ре&shy;шить се&shy;ме&shy;йные споры.
                            Дело до&shy;хо&shy;дит до раз&shy;вода, ну&shy;жно опре&shy;де&shy;литься с раз&shy;делом сов&shy;ме&shy;стно при&shy;обре&shy;тенного иму&shy;щества,
                            а так&shy;же с кем и где  оста&shy;нутся жить несо&shy;вершен&shy;но&shy;летние де&shy;ти.
                            По&shy;мощь юри&shy;ста по&shy;зво&shy;лит зна&shy;чи&shy;тельно об&shy;лег&shy;чить брако&shy;раз&shy;водный процесс, вполне воз&shy;можно,
                            что суп&shy;руги смо&shy;гут полю&shy;бовно и без су&shy;дебных тяжб ре&shy;шить свои соб&shy;ствен&shy;ные се&shy;мейные проб&shy;лемы.
                        </Text>
                    </Center>
                </Box>
                <Box mb={'40px'} mt={'40px'}>
                    <Box>
                        <SvgEstate width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Link to='/sdelki-s-nedvizhimostyu'>
                        <Button variant='text'
                                fontSize={'22px'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                        >
                            Недвижимость
                        </Button>
                    </Link>
                    <Center pl={'5vw'} pr={'5vw'} pt={'2vw'}>
                        <Text align={'justify'} fontSize={'16px'}>
                            Не&shy;дви&shy;жи&shy;мость – это до&shy;воль&shy;но до&shy;ро&shy;го&shy;стоящая по&shy;купка, по&shy;этому не&shy;об&shy;ходимо скру&shy;пуле&shy;зно от&shy;нес&shy;тись
                            к офор&shy;мле&shy;нию до&shy;ку&shy;мен&shy;тов и про&shy;верке юри&shy;ди&shy;ческой чис&shy;тоты сдел&shy;ки что&shy;бы
                            ог&shy;ра&shy;дить себя от  воз&shy;мож&shy;ных не&shy;прият&shy;ностей, по&shy;скольку   жи&shy;лье мо&shy;жет быть в за&shy;логе,
                            а про&shy;да&shy;вец – сов&shy;сем не тот че&shy;ло&shy;век, за ко&shy;то&shy;рого себя вы&shy;дает.
                            Я по&shy;мо&shy;гу вам юри&shy;ди&shy;чески  гра&shy;мотно  сос&shy;тавить до&shy;говор,  со&shy;брать до&shy;ку&shy;менты,
                            не&shy;обхо&shy;димые для офор&shy;мле&shy;ния сдел&shy;ки, про&shy;верить лич&shy;ность вла&shy;дельцев не&shy;дви&shy;жимости,
                            ор&shy;га&shy;ни&shy;зовать и про&shy;кон&shy;троли&shy;ровать все вза&shy;имо&shy;рас&shy;четы между сто&shy;ронами.
                        </Text>
                    </Center>
                </Box>
                <Box pb={'40px'} pt={'0px'}>
                    <Box>
                        <SvgPeople width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Link to='/nasledstvennyye-spory'>
                        <Button variant='text'
                                fontSize={'22px'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                        >
                            Наследственные споры
                        </Button>
                    </Link>
                    <Center pl={'5vw'} pr={'5vw'} pt={'2vw'}>
                        <Text align={'justify'} fontSize={'16px'}>
                            Жизнь чело&shy;века устроена таким обра&shy;зом, что раньше или  поз&shy;же,
                            а нам все-таки при&shy;хо&shy;дится стол&shy;кнуться с во&shy;про&shy;сами по на&shy;сле&shy;до&shy;ванию дви&shy;жи&shy;мого
                            и не&shy;дви&shy;жи&shy;мого иму&shy;щества. При&shy;чем в про&shy;цессе са&shy;мого уста&shy;но&shy;вления на&shy;следства могут воз&shy;ни&shy;кнуть нео&shy;бычайно
                            слож&shy;ные пра&shy;во&shy;вые си&shy;туации, с ко&shy;то&shy;рыми само&shy;стоя&shy;тельно спра&shy;виться будет не&shy;просто, а то и во&shy;все не&shy;воз&shy;можно.
                        </Text>
                    </Center>
                </Box>
                <Box pb={'40px'} pt={'0px'}>
                    <Box>
                        <SvgAlarmFill width={48} height={48} fill={'#272343'}/>
                    </Box>
                    <Link to='/vzyskaniye-dolgov'>
                        <Button variant='text'
                                fontSize={'22px'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                        >
                            Взыскание долгов
                        </Button>
                    </Link>
                    <Center pl={'5vw'} pr={'5vw'} pt={'2vw'}>
                        <Text align={'justify'} fontSize={'16px'}>
                            Как часто люди да&shy;ют в долг зна&shy;чи&shy;тель&shy;ные сум&shy;мы де&shy;нег зна&shy;ко&shy;мым, рас&shy;счи&shy;тывая на их чест&shy;ность и по&shy;ря&shy;доч&shy;ность,
                            а так&shy;же обе&shy;ща&shy;ние вер&shy;нуть всю сум&shy;му то&shy;чно в срок.
                            Но ино&shy;гда долг не спе&shy;шат воз&shy;вра&shy;щать. При&shy;чины мо&shy;гут быть раз&shy;ными, но если вы чув&shy;ству&shy;ете,
                            что зае&shy;мщик вас про&shy;сто об&shy;ма&shy;нывает,
                            то за&shy;ду&shy;май&shy;тесь о при&shy;ну&shy;ди&shy;тель&shy;ных спо&shy;со&shy;бах воз&shy;врата дол&shy;га.
                            И как по&shy;ка&shy;зы&shy;вает  прак&shy;ти&shy;ческий  опыт – чем быс&shy;трее, тем лучше.
                        </Text>
                    </Center>
                </Box >
            </Box>
        </Box>
    }

    return (
        <>
            {attach}
        </>
    )
}

export default Attachments