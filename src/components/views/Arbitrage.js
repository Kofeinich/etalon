import React from "react";
import {
    Flex, Box, Text
} from '@chakra-ui/react';
import SVGArbitrage from "../../templates/svg/svg-views/SVGArbitrage";
import useWindowWidth from "../window";



const Arbitrage = () => {

    let mt='10vh'
    let fsH='36px'
    let fs = 'lg'
    let fs2 = '22px'
    let mbx = '120px'

    let arb =  <Box>
        <Flex
            m={'0px'}
            p={'0px'}
            justify={'center'}
            w={'100%'}
        >
            <Box
                w={'100%'}
                maxWidth={'600px'}
            >
                <SVGArbitrage width={'100%'} height={'100%'}/>
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
                <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'} fontSize={fsH}>Арбитражная практика</Text>
            </Flex>
            <Flex
                justify={'center'}
                w={'100vw'}
            >
                <Text as={"b"} p={'10px'} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Арбитражное дело о взыскании задолженности<br></br> по договору поставки.</Text>
            </Flex>
            <Flex
                justify={'center'}
                w={'100vw'}
            >
                <Text maxWidth={'2000px'} m={'0'} p={'5vw'} w={'100vw'} color={'black'} align='left' fontSize='lg'>
                    К  адвокату  обратилось  общество  с  ограниченной  ответственностью  с  просьбой   оказать  помощь  по  взысканию  задолженности,  вытекающей  из  договора  поставки, а также  неустойки  за  просрочку исполнения  обязательства.
                    Изучив   представленные  заказчиком  документы,   было  принято решение,  что  имеются  все основания  для  составления  искового заявления и  предъявления  его в арбитражный  суд  города  Санкт-Петербурга и  Ленинградской   области.   После возбуждения  арбитражным  судом  дела,  в ходе  судебного разбирательства,   «всплыли»  новые  документы, предоставленные  в  суд  Ответчиком, и  о  которых  не  было  известно   при   подготовке  искового заявления, и которые,   следовательно,  не  были  учтены  первоначально при  составлении   искового  заявления.
                    Это было  дополнительное  соглашение к  договору  поставки, которым  установлена   обязанность     нашего  заказчика  уплачивать   вознаграждение  («бонус»)  за  продвижение  продукции     нашего  заказчика   на  рынке (территории  города Санкт-Петербурга), и которое   по  расчетам  ответчика,  полностью  покрывает  его   долг  пред  истцом  за  поставленную  продукцию.  В связи с чем,  ответчик  заявил  встречный  иск в  арбитражный  суд.
                    Проанализировав  возражения  Ответчика, изложенные  им во  встречном  исковом  заявлении,  адвокатом    арбитражному  суду  были   предоставлены  доказательства и аргументы,   опровергающие, во-первых,    право   Ответчика  на  проведение зачета  в  одностороннем  порядке без  согласия  нашего заказчика, а во-вторых,  приведены   доказательства,   обосновывающие,   что  Ответчик  утратил  право  на  взыскание   вознаграждения (бонус за  продвижение  продукции  истца   на  территории города Санкт-Петербурга),    поскольку  им  был  пропущен, установленный   законом    срок  исковой  давности.
                    Арбитражный  суд, изучив доводы и доказательства адвоката,  представленные  им в материалы  дела,  исковые   требования  Истца (заказчика)  удовлетворил в   полном  объеме, взыскав  как сумму  основного долга,  так и неустойку за  несвоевременное  исполнение обязательства  по оплате  за поставленный  товар.
                    Во  встречном  исковом  заявлении  Ответчику   было  отказано в  полном  объеме.   На указанное  решение  арбитражного суда   города  Санкт-Петербурга и  Ленинградской   области  Ответчиком  была  подана апелляционная  жалоба,  которая оставила  решение суда первой  инстанции   без  изменения.
                </Text>
            </Flex>



            <Flex
                justify={'center'}
                w={'100vw'}
            >
                <Text as={"b"} p={'10px'} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Арбитражное дело о взыскании суммы задолженности<br></br> по договору водоснабжения (водоотведения).</Text>
            </Flex>
            <Flex
                justify={'center'}
                w={'100vw'}
            >
                    <Text maxWidth={'2000px'} m={'0'} p={'5vw'} w={'100vw'} color={'black'} align='left' fontSize='lg'>
                        К  адвокату  обратился руководитель  ООО  «П»  с  просьбой  представить  интересы   ООО   «П»  в  арбитражном суде, в котором   последнее является    ответчиком    по  делу.    Следует, отметить,  что   адвокат  вступил в  дело  не  сразу, а  в  середине  судебного процесса.   Суть  спора  заключается  в  следующем.
                        ООО «А»  (Истец по делу)  по  договору  с ООО «П» (Ответчик по делу)  оказывал  услуги  по водоснабжению и водоотведению.  Деятельность по оказанию услуг  продолжалась  в  течение   длительного времени.   Истец  отпускал ресурс (питьевая вода),  а  Ответчик (Доверитель)  принимал  этот   ресурс  и  на протяжении   всего  договорного   периода  производил  оплату  согласно выставленных   Истцом  счетов.  В  дальнейшем, полтора   года  спустя  с  момента  заключения    договора   на  водоснабжение (водоотведение),  у Истца  меняется  руководство  компании  и  оно  обнаруживает,  что у прибора  учета,  по которому определяется  объем отпущенной  воды,  истек  еще  два  года   назад  межповерочный    период.   Следует  отметить,  что  как  до  обнаружения  факта  истечения  межповерочного периода у  прибора  учета, так  и  после  установления  этого  факта в течение  восьми  месяцев,  Истец  продолжал   выставлять  Ответчику  счета за  отпущенный  ресурс  согласно  показаний  этого   прибора учета, а  ответчик  продолжал  производить оплату.    Однако,  Истец  посчитал,  что   он  сможет  заработать неплохие  деньги  на  том  обстоятельстве,  что у  прибора    учета  Ответчика – Доверителя  адвоката,  пропущен межповерочный  период, и  предъявил в  арбитражный  суд   исковое  заявление о  взыскании  с   Ответчика  суммы  задолженности, которая  превышает   в  семьдесят  раз   сумму  платежа,  которую  Ответчик  рассчитал и оплатил  по  прибору  учета.
                        Дело в  том, как  полагал   Истец,  что  поскольку   прибор  учета  работал  за  пределами  межповерочного  периода,  объем  отпущенного   ресурса  в  этом  случае  необходимо   определять не  по прибору  учета, а  расчетным  методом (по  так называемому  диаметру  сечения  трубы),  что  значительно  (в  десятки  раз)  превышает   показания   прибора  учета.  Поэтому   объем  отпущенного ресурса  в  спорный  период  с  суммы  порядка 240 000 рублей  врос  фактически  до  8 000 000 рублей.
                        Вступив в  дело,  адвокат,    изучив   все  обстоятельства  дела и существо   спорного  вопроса,  полностью   изменил  первоначальную  стратегию  защиты  по    предъявленному  иску.  Было  принято  решение,  не  заострять  внимание  на   неправильность применения  расчетного метода  определения  объема  отпущенного  ресурса, а  попытаться   сконцентрировать   внимание  арбитражного суда, во-первых, на  недоказанность  Истцом   размера  диаметра  водопроводной  трубы,  который  являлся  составной  частью  Правительством установленной  формулы  расчета объема,    что на  основании ст. 65 АПК РФ  входило  в  предмет  доказывания  со  стороны   Истца. Ооднако,    им  бесспорно  доказано  не  было.  Во-вторых,   адвокатом  доказано,  что  со  стороны  Истца  было  допущено  злоупотребление  своим  правом.  Истец,  безусловно  имел   законное   право  на  применение  расчетного метода  определения  объема отпущенной  Ответчику воды,  однако   он  нарушил  законно-установленное  требование  п. 1 ст. 10 ГПК РФ, которой  установлено,  что не  допускается  осуществление  гражданских  прав  исключительно с  намерением   причинить   вред  иному  лицу.  Кроме  того,  адвокатом  было доказано,  что  не  смотря  на то,  что  в  спорный  период  прибор  работал  за  пределами  межповерочного периода,   стороны  добровольно,  достигли  соглашения (это подтверждается  выставленными  счетами,  актами сверки задолженности,  платежами со  стороны  ответчик,  представленными   адвокатом  в  материалы  дела),  что  расчеты  будут  определяться по  этому  прибору  учета,  и  это  полностью  соответствует  требованиям  п. 2 ст.1 ГК РФ, которой установлено, что граждане (физические лица) и юридические лица приобретают и осуществляют свои гражданские права своей волей и в своем интересе.   Кроме  того,  адвокатом  в  материалы  дела   было  приобщено заключение   ФБУ  государственного регионального центра  стандартизации  и  метрологии,  которым   был сделан  вывод,  что в  спорный  период  в течение  всего  периода  пропуска  срока  поверки   и  достоверности   его показаний  –  прибор  учета  был  пригодным.
                        Арбитражный  суд,  рассмотрев  спор  по  существу,  полностью  отказал  во  взыскании  с  Ответчика  – доверителя  адвоката  в  пользу  Истца  суммы  основного долга  в  размере  порядка 8 000 000 рублей  основного долга,  процентов  за  пользование чужими денежными средствами,  и  судебных  издержек  связанных с рассмотрением дела.
                    </Text>
            </Flex>

            <Flex
                justify={'center'}
                w={'100vw'}
            >
                    <Text as={"b"} p={'10px'} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Арбитражное дело об одностороннем отказе от договора поставки (расторжение договора), взыскании за оплаченный по договору поставки товар, убытков и процентов за пользование чужими денежными средствами.</Text>
            </Flex>
            <Flex
                justify={'center'}
                w={'100vw'}
            >
                    <Text maxWidth={'2000px'} m={'0'} p={'5vw'} w={'100vw'} color={'black'} align='left' fontSize='lg'>
                        Фирма  «Т» (ответчик по делу), далее  Доверитель,   обратилась  к  адвокату  за  помощью  в  представлении   ее  интересов  в  арбитражном  суде    по  иску  фирмы  «Д»  (истец по делу)  к   фирме «Т».  Суть   спора  заключалась в   следующем:  фирма «Т»   по  заключенному  с  фирмой «Д»  договору  поставки   поставила  фирме «Д»   конвейер   собственного производства  для  перемещения  крупногабаритных  грузов.    Фирма «Д»,  приняв   конвейер,  оплатило за  него  полную  его стоимость.  В  дальнейшем,  после  начала  эксплуатации,  Фирма «Д»  (Истец) обнаружила  в нем   недостатки, которые   она  посчитала  существенными,  поскольку  как полагал  Истец,  эти недостатки  не могли быть устранены   в  приемлемый  для  него срок,  что в  соответствие со  ст. 523 ГК РФ  давало   Истцу   право в  одностороннем порядке  расторгнуть  договор  с    поставщиком   товара  – фирмой «Т».   С этой  целью   фирма «Д»  направила  в адрес  фирмы «Т»  заявление  об одностороннем  отказе от договора  поставки возврата  уплаченных  денежных  средств  за  товар,  а в дальнейшем  соответствующую  предсудебную  претензию.
                        Фирма  «Т», не согласившись с  требованиями   фирмы «Д»,  обратилась  к  адвокату  за  помощью  представить ее интересы на  стороне  ответчика   в  арбитражном  суде  от  незаконных   посягательств   Истца  (фирма «Д»).
                        Изучив,  все имеющееся  в  материалах  дела документы,   адвокат  обратил  внимание своего  доверителя,  что  доставкой  товара  от  поставщика к   покупателю,  занималась  некая  фирма «А», которая   имела   договорные   отношения  (договор   перевозки, транспортной  экспедиции)  с  Истцом  по  доставке  товара  в  адрес места нахождения  Истца.  Кроме, того  адвокатом  было  обращено внимание  заказчика   и арбитражного  суда,  что   от  покупателя, не смотря на то что  Истцом  был  заключен договор   перевозки и договор  транспортной  экспедиции с иной  организацией, по  доверенности Истца приемкой  товара    занимался  сотрудник  Истца – водитель, который,  как  выяснилось в  судебном  заседании,  находился с Истцом  трудовых  отношениях.
                        Адвокату  удалось  доказать  арбитражному  суду,   что  поскольку  в  товарной накладной   не  отражены  какие-либо  повреждения  (недостатки)  товара, которые   в  случае  их обнаружения  ответственным лицом  со  стороны  принимающей  стороны  в  силу  закона  должны  быть  обязательно  отражены  накладной (акте),   постольку  Истцом  не  был  доказан  факт    образования  недостатка товара  до  передачи  ему  этого  товара. В этой связи, возражая  против  доводов  адвоката,  Истец  сослался  на то обстоятельство,  что   водитель,  принимавший  груз, не располагал  необходимыми знаниями для  его приемки по количеству  и качеству и не  знал,  что  обнаруженные недостатки  следует  отражать в накладной либо акте.    Следовательно, утверждал  Истец, недостатки у  товара  имелись еще до его  передачи   покупателю, однако в  силу  отсутствия  у   водителя  необходимых   знаний,  он эти недостатки  не   отметил в  накладной  на прием-передачу товара. В этой  связи,  арбитражный  суд   согласился  с  доводами  адвоката,  что   позиция   Истца  противоречит    принципу  добросовестности и разумности  участников  делового оборота, закрепленного в  п. 5 ст. 10 ГК РФ.   К делу  в качестве  третьего лица, не заявляющего самостоятельные  требования,  была  привлечена  транспортно-экспедиционная  компания,   которая  в  ходе  судебного разбирательства, понимая,  что    в дальнейшем  Истец, если  не  получится  взыскать с  ответчика  стоимость не качественного товара,   может   переложить  всю  ответственность на нее,  попытаясь  доказать,  что  недостатки  товара   возникли  в  процессе   перевозки  груза,   занял  активную   позицию по  поддержке   доводов  адвоката – представителя  Ответчика.  В результате, арбитражный  суд,  рассмотрев   исковые  требования Истца, отказал   в  полном  объеме  в  удовлетворении  исковых  требований  к  Ответчику – доверителю адвоката.   В дальнейшем дело  было  обжаловано в  апелляционную  инстанцию  Второго арбитражного апелляционного  суда,       который  рассмотрев  апелляционную жалобу  Истца,  оставил  решение суда  в  силе  без изменений.
                    </Text>
            </Flex>
        </Box>
    </Box>
    return (
        <>
            {arb}
        </>
    )
}
export default Arbitrage