import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import SVGDebts from "../../templates/svg/svg-views/SVGDebts";


const Debts = () => {
    let mt='10vh'
    let fsH='36px'
    let fs = 'lg'
    let fs2 = '22px'
    let w = '80%'
    let mbx = '120px'
    if (window.innerWidth < 520){
        mt='30px'
        fs2 = '18px'
        fsH='22px'
        fs='lg'
        w = '90%'
        mbx = '90px'
    }

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
                    <SVGDebts width={'100%'} height={'100%'}/>
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
                    <Flex w={'80%'}>
                        <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'} fontSize={fsH}>Практика по взысканию долгов</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex w={'80%'}>
                        <Text as={"b"} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Гражданское дело о взыскании неустойки за просрочку передачи объекта долевого строительства жилья.</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                    mb={'30px'}
                >
                    <Flex w={w} maxWidth={'1200px'} justify={'space-between'}>
                        <Text mt={'20px'} w={'100%'} color={'black'} align='left' fontSize='lg'>
                            К  адвокату  обратился  гражданин  с  просьбой  оказать ему  содействие   при  защите  его  интересов  во  взаимоотношениях  с  застройщиком жилья, с  которым  у  него был  заключен  договор  «На   участие в  долевом  строительстве  многоквартирного   жилого дома».  Гражданин пояснил,  что    все  сроки, когда   он  должен  был  получить  квартиру  уже  вышли, он несет  огромные  убытки  в  связи  с тем,  что  вынужден  временно   снимать   квартиру  и платить  плату  за наем  квартиры, а   также   оплачивать  банку    проценты    по ипотечному  кредиту.   Изучив все  представленные  для   изучения   гражданином   документы,  адвокат  посоветовал, пока  не торопиться,  и ни в коем  случае  не  расторгать  договор   «На   участие в  долевом  строительстве  многоквартирного   жилого дома», а набраться   терпения   и   дождаться,  когда  дом  будет сдан в  эксплуатацию, и  им  будет  оформлено право  собственности  на  квартиру.   Гражданин  прислушался к  совету   адвоката,  и  не стал    торопить  события.
                            После  того, как  жилой   дом  был  сдан в  эксплуатацию и гражданин оформил  право  собственности  на  квартиру,  гражданин  принес   адвокату  все  документы,  подтверждающие  договорные  отношения  между  застройщиком  и гражданином, документы  подтверждающие  право  собственности  на  жилье,  которое  являлось  объектов  долевого строительства,  документы,  подтверждающие  наем квартиры  гражданина  и  оплату  за него,  а  также   все  банковские  документы  по  ипотечному  кредиту и размеру внесенных  гражданином   ипотечных  платежей.    Адвокатом  была  подготовлена мотивированная  претензия  в  адрес  застройщика, в  которой   предлагалось  последнему  в  добровольном  порядке   уплатить  неустойку за  просрочку   передачи  гражданину  предмета  долевого строительства  жилья,  размер которых составил  порядка  ста тысяч  рублей,  а также  возместить  убытки,  возникшие  у гражданина в  связи  с  наймом  квартиры, а также    возместить   моральный  вред.  Однако,  претензия   гражданина  застройщиком    была  оставлена    без  ответа.
                            После  этого,  гражданин   принял  решение  обратиться  в  суд.   Адвокатом,  учитывая  требования  законодательства  о  защите  прав  потребителя,    было  составлено исковое  заявление в  суд,  в  котором  были  сформулированы  требования  гражданина  о взыскании   неустойки  за  просрочку  исполнения   передачи   долевого строительства  жилья,  убытки, вызванные   несением  гражданином расходов  в  связи   с наймом   квартиры  на  период просрочки  передачи  застройщиком  гражданину  квартиры, моральный  вред, причиненный  гражданину, а также   сумму   штрафа за  неудовлетворение   в  добровольном  порядке  законного  требования  гражданина – участника долевого строительства жилья в  размере 50% от цены  иска.   В ходе  судебного разбирательства  адвокат  поддержал  ранее  заявленные   исковые  требования.
                            Суд, изучив  все имеющиеся  и  представленные  в  дело  доказательства, исковые  требования  истца  (гражданина)  удовлетворил    практически   в  полном    объеме (сократив  только  сумму  морального вреда),  взыскав  в общей  сложности  с  застройщика  в  пользу гражданина  денежную сумму в  размере  ста  восьмидесяти  тысяч  рублей,  а  также  взыскал с   застройщика  расходы  гражданина  на  оплату  услуг   адвоката.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex w={'80%'}>
                        <Text as={"b"} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Дело о взыскании задолженности по договору поставки</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                    mb={'30px'}
                >
                    <Flex w={w} maxWidth={'1200px'} justify={'space-between'}>
                        <Text mt={'20px'} w={'100%'} color={'black'} align='left' fontSize='lg'>
                            К  адвокату обратился руководитель  ООО «К»  с   проблемой  взыскания  задолженности   по  договору  поставки  со  своего  контрагента.   Суть  проблемы  заключалась  в том,  что  наш  клиент,  оформляя  документы  по  отгрузке  товара  по  накладным в  адрес  покупателя,   в  отгрузочных  документах   не  отразил  всех  необходимых  реквизитов,  по  которым  можно  было  идентифицировать  лицо,  которое   получило  товар.   А  общество (должник), которое  было  указано в  отгрузочных  документах,  как  получатель  товара,   утверждало,  что   товар  оно  не  получало,  ни  каких   полномочий  на  получение  товара  от  его   имени   кому бы то ни было  оно  не  давало.
                            Нами  были  изучены  все  необходимые   документы, представленные  нам  доверителем, и  было  принято  решение   обратиться  в  арбитражный  суд  о взыскании   с  должника    задолженности  по  договору   поставки.  Разбирательство  по  делу  осложнялось  тем,  что  ответчик (не смотря  на  неоднократные   вызовы  его  в  суд)  ни в  одном   из   судебных    заседаний  не  появился,  ограничившись  лишь   кратким  отзывом   на  исковое  заявление, в  котором   все  отрицал.   Между  тем,   нам  удалось  «чудом»  добыть  необходимые  доказательства,  указывающие  на  связь  лица,  получившего  товар  по  накладной   с   обществом-должником и  доказать  суду  злоупотребление   правом  со  стороны   Ответчика  и  факт   получения   товара   по  накладной  лицом,  расписавшимся   в  товарной  накладной,    именно для   него.
                            Результатом  рассмотрения   судебного  разбирательства  стало  решение   арбитражного   суда,  которым  с  должника  была  взыскана  в полном  объеме  непогашенная  задолженность,  договорная   неустойка  за  неисполнение  обязательства, а    также  все   судебные  издержки.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex w={'80%'}>
                        <Text as={"b"} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Дело о взыскании заработной платы и компенсации за задержку ее выплаты</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                    mb={'30px'}
                >
                    <Flex w={w} maxWidth={'1200px'} justify={'space-between'}>
                        <Text mt={'20px'} w={'100%'} color={'black'} align='left' fontSize='lg'>
                            К адвокату  обратился  директор  ООО «Ч», к  которому его  бывшие  работники  предъявили  исковые  требования   о  взыскании   заработной  платы. Свои  требования  они  мотивировали  тем,  что    им  за  последний  месяц  работы,  предшествующий  их  увольнению,   не была  выплачена  в  полном  объеме  заработная  плата по причине  того, как  они уверяли суд,  что работодатель  часть  зарплаты им платил в «белую», а часть  передавал  в  «конверте».
                            Изучив   представленные  доверителем  документы,  удалось  доказать  суду,  что  бывшие  работники  злоупотребили  своим  правом   предъявления  иска к  своему  работодателю,  поскольку  требовали  взыскания  зарплаты  за  тот  период  времени,  когда  они уже  не  работали  в компании   нашего клиента.  Кроме  того,    были  представлены  суду  все  доказательства из  которых  следовало,  что  заработная  плата  работникам  наши  доверителем  выплачивалась только  официально, ни  в  каких  «конвертах»  заработная  плата   работникам  никогда  не выплачивалась.
                            Поскольку,  обратного  суду  со  стороны  истцов  доказано  не  было,  суд согласился  с  нашей  позицией  и  отказал   истцам  в  удовлетворении исковых  требований.
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex w={'80%'}>
                        <Text as={"b"} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Дело о взыскании стоимости неосновательного обогащения</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                    mb={'30px'}
                >
                    <Flex w={w} maxWidth={'1200px'} justify={'space-between'}>
                        <Text mt={'20px'} w={'100%'} color={'black'} align='left' fontSize='lg'>
                            К  адвокату  обратилась  клиент «А»  со  следующей  проблемой:   к  ней (ИП –агент по  работе  с  недвижимостью)  обратился с  исковыми  требованиями  гражданин «Ч»   о  возврате  излишне полученных   нашей  клиенткой  денежных  средств  в  размере 850 тыс. рублей.  Между  Истцом  и  нашей  доверительницей   был  заключен  предварительный  договор,  по  условиям  которого  наша  доверительница должна  была  приобрести  на  имя  гражданина «Ч»  4-х  комнатную  квартиру по  конкретному   адресу, расселив  при  этом  жителей  в ней  проживающих  в другие  жилые  помещения.   Наша  доверительница исполнила,  принятые  на  себя обязательства по  договору.  На  деньги,  которые  она получила   от  гр. «Ч»  она  приобрела  три  однокомнатные  квартиры и расселила  в них  три  семьи, в  том  числе  одну  с  малолетним  ребенком. Сделала  в  этих  квартирах   косметический  ремонт, а  разницу  она   составила  себе  как  вознаграждение  за  оказанные    услуги   по  договору.
                            Гражданин «Ч»,  посчитав,  что   наша  доверительница   чересчур  много  заработала  на  сделке,  решил,  что    все,  что   получила  в  виде  вознаграждения  наша  доверительница,  вернуть  обратно   себе,  оставив  таким  образом  ее  ни с чем.    Изучив  предоставленные  нашим  клиентом  все  документы,  а  также  запросив   у   различных  органов  и  организаций  недостающие  доказательства,   адвокат  сумел  доказать,  во-первых,  отсутствие   факта  неосновательного  обогащения  со  стороны  нашей  доверительницы,  а  во-вторых,  что  сумма  вознаграждения  за  оказанную  услугу  фактически  составила   не 850 тыс.рублей,  а  значительно  ниже  порядка 110 тыс. рублей.  А сумма,  которая является    разницей   между   850 тыс. р.    и  110 тыс. рублей составляет   стоимость  расходов (740 тыс. рублей),  которая  понесла  наша   доверительница, исполняя  свои  договорные  обязательства  перед  истцом.  Адвокату   удалось  убедить  суд в  том,  что    Истец,   предполагая,  что  документы на  указанную  сумму  могут  не  находиться  у  нашей  доверительницы (у  него  имелась  информация,  что  соответствующие  документы  утеряны  нашей  клиенткой),  обратился   в  суд   за  взысканием  этой  суммы. Тем  самым   Истец   сам  хотел  необоснованно  обогатиться  за  счет  нашей  клиента.    Однако,  такого   шанса  ему  предоставлено не  было.
                            Обратившись  с  запросами  в организации, которые  делали по  её  заказу   ремонт  жилых  помещений,  а  также   проведя  необходимые   экспертизы (стоимости ремонта,  почерковедческие),  нам  удалось  доказать  суду   в  первую  очередь  добросовестность  действий  нашей  доверительницы,  а  также  необоснованность  требований  Истца.  Кроме того,  нам  удалось  практически   восстановить  утерянные  доказательства  понесенных  расходов  нашим  клиентом,  связанных с   исполнением  ею своих  обязательств  по договору.
                            Результатом  судебного  разбирательства  стало  вынесение  решения  по  делу,  которым  в  исковых  требованиях  Истцу  было  отказано  в  полном  объеме.  По данному  делу   Истцом  была  подана  апелляционная жалоба,  однако  апелляционной инстанцией   решение  суда  первой  инстанции  было  признано  законным  и неподлежащим  отмене.
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                    <Flex w={'80%'}>
                        <Text as={"b"} mt={'15px'} w={'100%'} color={'#272343'} align='center' fontSize={fs2}>Дело о взыскании суммы штрафных санкций с компании-застройщика за неисполненное в срок обязательство по передачи квартиры по договору долевого строительства жилья.</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify={'center'}
                    w={'100vw'}
                    mb={'30px'}
                >
                    <Flex w={w} maxWidth={'1200px'} justify={'space-between'}>
                        <Text mt={'20px'} w={'100%'} color={'black'} align='left' fontSize='lg'>
                            К адвокату  обратилась гражданка «Ж» с просьбой  взыскать с   компании – застройщика  неустойку за  просрочку  предварительно оплаченного товара  по  заключенному  договору  на приобретение  квартиры, а  также  компенсации морального вреда  за  неудовлетворение в  добровольном  порядке   законного  требования   покупателя  по передаче  оплаченной квартиры.
                            Изложенная  на  словах   гражданкой «Ж» (доверитель) ситуация, изначально  казалась  простой, и не вызывающей  особой  сложности  для  обращения с  иском в  суд.   Однако, после  изучения, полученных документов,   ситуация  оказалась  отнюдь  не  простой, а юридически  преднамеренно  запутанной  компанией-застройщиком с  тем,  чтобы   осложнить   покупателю   возможности  для   предъявления  каких-либо  требований  к  компании-застройщику в  случае возможного судебного спора.   Дело в  том,  что  компания-застройщик,  формально  заключила  с  гражданкой  договор  не  долевого строительства  жилья,  а  предварительный  договор,  сказав   при  его  заключении гражданке,  что  это  одно и то же  и  регистрация   этого   предварительного   договора  в  Росреестре  не требуется.  Поэтому, при  выработке    стратегии  взыскания  с  недобросовестной компании-застройщика  финансовых  санкций  встал  вопрос:  какой  иск  предъявлять: требование, вытекающее  из  не исполненного  в срок    предварительного  договора купли-продажи  квартиры, либо  из  обязательства, вытекающего  из договора  долевого  строительства жилья, который  фактически  оформлен и подписан  не  был ?
                            Вобщем,  как  показал  ход  судебного разбирательства, нами  был  выбран рискованный,  но правильный  путь:   предъявлять иск, вытекающий из  договора  долевого  строительства жилья, не смотря  на то,  что сам   предварительный  договор купли-продажи квартиры  и его  условия, содержали  положения, указывающие на то,  что  деньги  гражданка  передавала в  оплату  по этому предварительному  договору. Более  того,  после  того, как  дом  был  построен, компания – застройщик  в  дальнейшем  заключила  с гражданкой  основной  договор  купли-продажи квартиры, в котором  отсутствовала  ссылка,  что он   вытекает   из  исполненного   обязательства  по  предварительному  договору купли-продажи. А сам предварительный договор  (его оригинал)  был  вообще  после  подписания  основного  договора  уничтожен.
                            Разность в  подходе  заключалась в  том, что    если  исходить  из  неисполненного в  срок  обязательства  по предварительному  договору,  то  невозможно  было бы применить  штрафные  санкции, вытекающие из  Закона «Об  участии в  долевом  строительстве многоквартирных домов   иных  объектов  недвижимости», а они  значительно   выше, нежели  штрафные  санкции  за не исполнение в  срок  обязательства  по предварительному  договору.
                            Однако, Адвокату  в  суде  удалось  доказать,  что   компания-застройщик  ввела  гражданку – покупателя в  заблуждение, утверждая    на  словах,  что  она   заключает  как  бы  договор  долевого строительства  жилья,  и что этот  договор, практические  одно и то же,  что  и  договор  долевого строительства  жилья,  но   только его не надо  регистрировать в  Росреестре, и тем  самым,   увеличивать  стоимость   приобретаемой  квартиры.    В этой связи  суду  адвокатом   были  предоставлены  документы, из  которых  следовало,  что  оплата за  квартиру  гражданкой  была  произведена  до сдачи   объекта  строительства (жилой  дом) в  эксплуатацию, а  следовательно  компания-застройщик по  закону  обязана  была  оформлять не  предварительный договор,  а  договор   долевого строительства  жилья и зарегистировать его в установленном  порядке.  Кроме  того, в  ходе  судебного разбирательства   были  заслушаны   свидетели,  приглашенные  нашей  стороной, и подтвердившие   нашу   позицию по делу.  Также  суду  были   предоставлены  аудио-записи телефонных  разговоров,  из  которых   следовало,  что  менеджер,    предлагая   гражданке «Ж»  квартиру,  предлагал     заключить    договор  долевого строительства жилья, а  фактически  оформил  предварительный  договор купли-продажи  квартиры,  и  тем  самым  ввел  гражданку  в  заблуждение относительно правовой   сути  договора.  Суд, рассмотрев  гражданское  дело,  согласился  с  нашей  правовой позицией,  признав   предварительный  договор   купли-продажи  квартиры  договором  долевого строительства  жилья, наши  требования  удовлетворил  частично,  из   650 000 тысяч  рублей неустойки, взыскал   400 000 рублей,  кроме  того, взыскал с компании – застройщика сумму  штрафа  в  размере 150 000 рублей, и компенсацию  морального вреда  в размере  5 000 рублей,  а также расходы  на  оплату  услуг  адвоката.

                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
export default Debts