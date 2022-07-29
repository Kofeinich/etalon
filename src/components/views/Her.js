import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import SVGHer from "../../templates/svg/svg-views/SVGHer";
import useWindowWidth from "../window";

const Her = () => {
    let mt='5vh'
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
                    <SVGHer width={'100%'} height={'100%'}/>
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
                    <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'} fontSize={fsH}>Наследственные споры</Text>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex
                        maxWidth={'1000px'}
                        display={'column'}
                    >
                        <p className={'my-paragraph'}>
                            Юрист Владимир Конюхов уже более двадцати лет оказывает помощь людям в
                            вопросах, связанных с наследственным правом.
                        </p>
                        <p className={'my-paragraph'}>
                            Жизнь человека устроена таким образом, что раньше или позже, а нам все-таки
                            приходится столкнуться с вопросами по наследованию движимого и недвижимого
                            имущества и так далее. Причем в процессе самого установления наследства могут
                            возникнуть необычайно сложные правовые ситуации, с которыми самостоятельно
                            справиться будет непросто, то и вовсе невозможно.
                        </p>
                        <p className={'my-paragraph'}>
                            <b>Юрист в Новороссийске</b> по наследственным делам:
                        </p>
                        <p className={'my-paragraph'}>
                            <b>Перечень услуг</b> по вопросам наследования, оказываемых юристом:
                        </p>
                        <p className={'my-paragraph'}>

                            <ul>
                                <li>
                                    <p className={'spisok'}>
                                        Подробные юридические консультации, раскрывающие суть вопросов вступления в
                                        наследство, а также наследования по завещанию и по закону. Кроме того, есть еще
                                        принятие и отказ от наследства, порядок вступления в наследственные права и так далее
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Реальная помощь, чтобы вступить в наследство через суд, личное представительство в
                                        судебном процессе
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Четкое определение возможного круга наследников, сбор, а также оформление всех
                                        бумаг о вступлении в права, либо же отказе от них
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Признание завещания правомерным или недействительным (ничтожным)
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Открытие, а также последующее ведение дела о наследстве в суде
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Самостоятельно получение дубликатов всей необходимой документации на право
                                        владения имуществом
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Регистрация всех действий, относительно наследования в официальных органах
                                        регистрации
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Принятие наследства в срок, указанный законодательством, а также восстановление
                                        срока для принятия наследства, при наличии веских причин для просрочки
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Получение правоустанавливающих документов на право наследования, а также
                                        передача их клиенту из рук в руки
                                    </p>
                                </li>
                                <li>
                                    <p className={'spisok'}>
                                        Оспаривание судебных решений, если они не устраивают клиента, подача
                                        разнообразных исков, ходатайств, жалоб и тому подобное
                                    </p>
                                </li>
                            </ul>
                        </p>
                    </Flex>
                </Flex>


            </Box>
        </>
    )
}
export default Her