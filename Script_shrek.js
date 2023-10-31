async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Escrito por

William Steig & Ted Elliott 




SHREK
Era uma vez um lindo 
princesa. Mas ela tinha um encantamento 
sobre ela de um tipo medroso que poderia 
só ser quebrado pelo primeiro beijo do amor. 
Ela estava trancada em um castelo vigiado 
por um terrível dragão que respira fogo. 
Muitos bravos cavaleiros haviam tentado 
libertai-a desta terrível prisão, 
mas não prevaleceu. Ela esperou no 
Dragão manter na sala mais alta de 
A torre mais alta para seu verdadeiro amor 
e o primeiro beijo do amor verdadeiro. (risos) 
Como isso sempre vai acontecer. Que 
uma carga de - (descarga do vaso sanitário)

Allstar - por Smashmouth começa a jogar. Shrek segue seu 
dia. Enquanto em uma cidade próxima, os moradores se reúnem para ir 
depois do ogro.

NOITE - PERTO DA CASA DE SHREK

HOMEM1
Acha que está lá dentro?

HOMEM2
Está bem. Vamos entender!

HOMEM1
Uau. Esperar. Você sabe o que isso 
Algo pode fazer com você?

HOMEM3
Sim, ele vai moer seus ossos por ser 
pão.

Shrek se esgueira atrás deles e ri.

SHREK
Sim, bem, na verdade, isso seria um 
gigante. Agora, ogros, oh eles são muito piores. 
Eles vão fazer um terno de sua fresquinha 
pele descascada.

HOMENS
Não!

SHREK
Eles vão raspar seu fígado. Aperte o 
geleia dos seus olhos! Na verdade, é 
muito bom em torradas.

HOMEM1
Voltar! Volta, bicho! Voltar! Eu te aviso! 
(acena a tocha em Shrek.)

Shrek lambe calmamente os dedos e apaga a tocha. O 
os homens se afastam dele. Shrek ruge muito alto e longo 
e sua respiração apaga todas as tochas restantes até o 
os homens estão no escuro.

SHREK
Esta é a parte em que você foge. 
(Os homens lutam para fugir. Ele ri.) 
E fique de fora! (olha para baixo e escolhe 
até um pedaço de papel. Lê.) "Procurado. 
Criaturas de contos de fadas." (Ele suspira e 
joga o papel sobre o ombro.)


NO DIA SEGUINTE

Há uma linha de criaturas de contos de fadas. O chefe da guarda 
senta-se em uma mesa pagando as pessoas por trazerem as criaturas dos contos de fadas 
para ele. Há gaiolas por todos os lados. Algumas das pessoas na fila 
são Peter Pan, que está carregando Sininho em uma gaiola, Gipetto 
que está carregando Pinóquio, e um fazendeiro que está carregando os três 
porquinhos.

GUARDA
Está bem. Este está cheio. Supor 
fora! Mova-o junto. Sem essa! Fique de pé!


PROTETOR DE CABEÇA
Próximo!

GUARDA
(pegando a vassoura de bruxa) Me dá isso! 
Seus dias de voo acabaram. (quebra o 
vassoura ao meio)

PROTETOR DE CABEÇA
São 20 moedas de prata para a bruxa. 
Próximo!

GUARDA
Fique de pé! Sem essa!

PROTETOR DE CABEÇA
Vinte peças.

URSA MENOR
(chorando) Esta gaiola é muito pequena.

BURRO
Por favor, não me entregue. Eu nunca vou 
ser teimoso de novo. Eu posso mudar. Por favor! 
Me dê outra chance!

VELHA
Ah, cala a boca. (empurra a corda)

BURRO
Ah!

PROTETOR DE CABEÇA
Próximo! O que você tem?

GIPETTO
Este pequeno boneco de madeira.

PINÓQUIO
Não sou fantoche. Eu sou um menino de verdade. (seu 
nariz cresce)

PROTETOR DE CABEÇA
Cinco xelins para o brinquedo possuído. 
Retire-o.

PINÓQUIO
Pai, por favor! Não deixe que eles façam isso! 
Me ajuda!

Gipetto pega o dinheiro e vai embora. A velha se levanta 
à mesa.

PROTETOR DE CABEÇA
Próximo! O que você tem?

VELHA
Bem, eu tenho um burro falante.

PROTETOR DE CABEÇA
Direita. Bem, isso é bom para dez xelins, 
se puder provar.

VELHA
Ah, vá em frente, fella.

Burro só olha para ela.

PROTETOR DE CABEÇA
Poço?

VELHA
Oh, oh, ele é apenas... ele é só um pouquinho 
nervoso. Ele é realmente um tagarela. 
Fala, seu boneco...

PROTETOR DE CABEÇA
É isso. Já ouvi o suficiente. Guardas!


VELHA
Não, não, ele fala! Ele faz. (faz de conta 
ser Burro) Eu posso falar. Eu amo 
falar. Eu sou a coisa mais maldita 
você já viu.

PROTETOR DE CABEÇA
Tirá-la da minha vista.

VELHA
Não, não! Juro! Ah! Ele pode falar!

Os guardas agarram a idosa e ela luta com eles. Um 
de suas pernas voa para fora e chuta Tinkerbell para fora de Peter Pan 
mãos, e sua gaiola cai na cabeça de Burro. Ele fica polvilhado 
com pó de fada e ele é capaz de voar.

BURRO
Ei! Eu posso voar!

PEDRO PAN
Ele pode voar!

3 POQUINHOS
Ele pode voar!

PROTETOR DE CABEÇA
Ele pode falar!

BURRO
Ha ha! Isso mesmo,! Agora estou 
um burro voador e falante. Você pode 
ter visto uma mosca doméstica, talvez até uma supermosca 
mas aposto que você nunca viu um burro 
voar. Ha ha! (O pó de pixie começa 
para desgastar) Uh-oh. (ele começa a afundar 
ao chão.)

Ele bate no chão com um baque.

PROTETOR DE CABEÇA
Agarre-o! (Burro tira a corrida.) 
Depois dele!

GUARDAS
Ele está fugindo! Pega ele! Assim! 
Virar!

Burro continua correndo e ele acaba encontrando Shrek. Literalmente. 
Shrek se vira para ver quem esbarrou nele. Burro parece assustado 
Por um momento, ele vê os guardas subindo o caminho. Ele 
rapidamente se esconde atrás de Shrek.

PROTETOR DE CABEÇA
Você está aí. Ogro!

SHREK
Sim?

PROTETOR DE CABEÇA
Por ordem do Senhor Farquaad estou autorizado 
para colocá-lo sob prisão e transporte 
você para uma instalação de reassentamento designada.


SHREK
Ah, mesmo? Você e que exército?

Ele olha para trás do guarda e o guarda se vira para olhar também 
e vemos que os outros homens fugiram. O guarda enfia rabo 
e foge. Shrek ri e volta atrás sobre seus negócios e 
começa a caminhar de volta para sua casa de campo.

BURRO
Posso dizer-lhe alguma coisa? Escutar 
você era muito, muito, muito magro' 
de volta aqui. Incrível!

SHREK
Você está falando... (Ele se vira 
e Burro se foi) eu? (ele volta atrás 
ao redor e Burro está bem na frente 
dele.) Uau!

BURRO
Sim. Eu estava falando com você. Posso dizer 
você que você que você foi grande de volta 
aqui? Aqueles guardas! Achavam que 
foi tudo isso. Então você apareceu, 
e bam! Eles estavam tropeçando em si mesmos 
como bebês na floresta. Isso realmente 
me fez sentir bem ao ver isso.

SHREK
Ah, isso é ótimo. Realmente.

BURRO
Cara, é bom ser livre.

SHREK
Agora, por que você não vai comemorar o seu 
liberdade com seus próprios amigos? Hmm?


BURRO
Mas, uh, eu não tenho amigos. E 
Eu não vou lá sozinho. Ei 
Espere um minuto! Tive uma ótima ideia! Eu vou 
fique com você. Você é malvado, verde, 
máquina de lutar. Juntos vamos assustar 
o cuspe de qualquer um que cruze 
nos.

Shrek se vira e olha para o Burro por um momento antes de rugir muito 
ruidosamente.

BURRO
Ah, nossa! Isso foi realmente assustador. Se você 
não se importe de eu dizer', se isso não 
trabalho, seu fôlego certamente vai ficar 
o trabalho feito, porque você definitivamente 
precisa de alguns Tic Tacs ou algo assim, pq 
sua respiração fede! Você quase queimou 
o cabelo sai do meu nariz, assim como o 
Hora... (Shrek tapa a boca, mas burro 
continua a falar, então Shrek remove 
sua mão.) ... depois comi uns podres 
Bagas. Eu tinha gases fortes vazando 
Saiu da minha bunda naquele dia.

SHREK
Por que você está me seguindo?

BURRO
Vou te contar o porquê. (canto) Causa 
Estou sozinho, não tem ninguém aqui ao lado 
Eu, Meus problemas todos se foram, Não há 
ninguém para me ridicularizar, mas você tem que ter 
fé...

SHREK
Pare de cantar! Não é à toa que não 
ter amigos.

BURRO
Uau. Só um verdadeiro amigo seria isso 
cruelmente honesto.

SHREK
Ouça, burrozinho. Dê uma olhada em 
me. O que eu sou?

BURRO
(olha todo o caminho para cima em Shrek) Uh... realmente 
alto?

SHREK
Não! Eu sou um ogro! Você sabe. "Agarra o seu 
tocha e forquilhas". Não é isso 
incomoda?

BURRO
Não.

SHREK
Realmente?

BURRO
Realmente, realmente.

SHREK
Ah.

BURRO
Cara, eu gosto de você. Qual é o seu nome?

SHREK
Uh, Shrek.

BURRO
Shrek? Bem, você sabe o que eu gosto sobre 
você, Shrek? Você tem esse tipo de eu-não-ligo-o-que-ninguém-pensa-de-mim 
coisa. Eu gosto disso. Eu respeito isso, 
Shrek. Tudo bem. (Eles vêm 
uma colina e você pode ver a casa de Shrek.) 
Uau! Olha isso. Quem gostaria de viver 
no lugar assim?

SHREK
Essa seria a minha casa.

BURRO
Ah! E é lindo! Simplesmente lindo. 
Você sabe que é um decorador. 
É incrível o que você fez com isso 
um orçamento modesto. Eu gosto dessa pedra. 
Isso é uma bela pedra. Eu acho que você 
Não entretém muito, não é?

SHREK
Gosto da minha privacidade.

BURRO
Sabe, eu também. Isso é outra coisa 
temos em comum. Como eu odeio quando 
você tem alguém na sua cara. Você tem 
tentando dar-lhes uma dica, e eles 
não vai sair. Há aquele silêncio constrangedor. 
(silêncio constrangedor) Posso ficar com você?


SHREK
Uh, o quê?

BURRO
Posso ficar com você, por favor?

SHREK
(sarcasticamente) É claro!

BURRO
Realmente?

SHREK
Não.

BURRO
Por favor! Não quero voltar para lá! 
Você não sabe o que é ser 
considerado uma aberração. (pausa enquanto ele 
olha para Shrek) Bem, talvez sim. 
Mas é por isso que temos que ficar juntos. 
Você tem que me deixar ficar! Por favor! Por favor!


SHREK
Ok! Ok! Mas uma noite só.

BURRO
Ah! Obrigado! (ele corre para dentro do chalé)


SHREK
O que você está...? (Burro sobe para cima 
a chair.) No! No!

BURRO
Isso vai ser divertido! Podemos ficar acordados 
tarde, trocando histórias viris, e em 
os waffles mornin' I'm makin'.

SHREK
Ah!

BURRO
Onde eu durmo?

SHREK
(irritado) Fora!

BURRO
Ah, bom, acho legal. Eu quero dizer 
Eu não te conheço, e você não sabe 
eu, então eu acho que lá fora é melhor, você 
saber. Aqui vou eu. Boa noite. (Shrek 
bate a porta.) (suspiro) Quer dizer, eu faço 
como o ar livre. Eu sou um burro. Eu estava 
nascidos fora. Vou ficar sentado 
Eu lá fora, eu acho, sabe. Por 
Eu mesmo, lá fora. Estou sozinho... não há 
ninguém aqui ao meu lado...

SHREK'S COTTAGE - NOITE

Shrek está se preparando para o jantar. Ele se senta e acende 
uma vela feita de cera. Ele começa a comer quando ouve um 
ruído. Ele se levanta com um bufão.

SHREK
(para Burro) Pensei que lhe disse para 
fique do lado de fora.

BURRO
(da janela) Estou fora.

Há outro barulho e Shrek se vira para encontrar a pessoa que 
fez o barulho. Ele vê várias sombras se movendo. Ele finalmente se vira 
e vê 3 ratos cegos em sua mesa.

MOUSE CEGO1
Bem, senhores, está muito longe do 
Mas que escolha temos?


MOUSE CEGO2
Não é em casa, mas vai dar tudo certo.


GORDO
(quicando em uma lesma) Que cama linda.


SHREK
Entendi. (Pega um rato, mas ele escapa 
e pousa em seu ombro.)

GORDO
Encontrei um pouco de queijo. (morde Shrek's 
orelha)

SHREK
Ow!

GORDO
Blá! Coisas horríveis.

MOUSE CEGO1
É você, Gordo?

GORDO
Como você sabia?

SHREK
Suficiente! (ele pega os 3 ratos) O que são 
vc fazendo na minha casa? (Ele fica esbarrado 
por trás e ele solta os ratos.) 
Ei! (ele se vira e vê os Sete Anões 
com Branca de Neve na mesa.) Ah, não, 
Não, não. Morto fora da mesa.


ANÃO
Onde devemos colocá-la? O 
cama está tomada.

SHREK
Hem?

Shrek marcha até o quarto e joga a cortina de volta. 
O Lobo Mau está sentado na cama. O lobo apenas olha 
ele.

LOBO MAU GRANDE
Que?

LAPSO DE TEMPO

Shrek agora tem o Lobo Mau pelo colarinho e está arrastando 
ele para a porta da frente.

SHREK
Eu moro em um pântano. Coloquei cartazes. Eu sou 
um ogro aterrorizante! O que eu tenho que fazer 
tem um pouco de privacidade? (Ele abre o 
porta da frente para jogar o Lobo para fora e 
ele vê que todas as fadas recolhidas 
Criaturas do conto estão em sua terra.) Ah 
Não. Não! Não!

Os 3 ursos sentam-se ao redor do fogo, o flautista está tocando o seu 
Os ratos estão todos correndo para ele, alguns elfos estão dirigindo 
tráfego aéreo para que as fadas e bruxas possam pousar... etc.


SHREK
O que você está fazendo no meu pântano? (isso 
ecoa e todos se calam.)


Suspiros são ouvidos por todos os lados. As 3 boas fadas se escondem dentro de um 
tenda.

SHREK
Tudo bem, saia daqui. Todos vocês, 
Mova-o! Sem essa! Vamos! Hapaya! 
Hapaya! Ei! Rápido. Sem essa! (saiba mais 
anões correm para dentro de casa) Não, não! 
Não, não. Lá não. Lá não. (Eles 
fechou a porta para ele) Ah! (vira para 
olha o Burro)

BURRO
Ei, não olhe para mim. Eu não convidei 
eles.

PINÓQUIO
Oh, meu Deus, ninguém nos convidou.

SHREK
Que?

PINÓQUIO
Fomos obrigados a vir para cá.

SHREK
(boquiaberto) Por quem?

PEQUENA PIG
Senhor Farquaad. Ele bufou e bufou 
e ele... assinou uma notificação de despejo.


SHREK
(suspiro pesado) Está bem. Quem sabe onde 
esse cara do Farquaad é?

Todos olham em volta, mas ninguém responde.

BURRO
Ah, eu faço. Eu sei onde ele está.

SHREK
Alguém mais sabe onde encontrar 
ele? Alguém?

BURRO
Me! Me!

SHREK
Alguém?

BURRO
Ah! Ah, me escolhe! Ah, eu sei! Eu sei! 
Eu, eu!

SHREK
(suspiro) Ok, tudo bem. Atenção, tudo fada 
coisas de conto. Não fique confortável. 
Sua recepção está oficialmente desgastada. 
Na verdade, eu vou ver esse cara Farquaad 
agora mesmo e tirá-los todos da minha terra 
e de volta de onde você veio! (Pausa. 
Então a multidão vai à loucura.) Ah! (para Burro) 
Você! Você está comin' comigo.

BURRO
Tudo bem, é isso que eu gosto de ouvir, 
homem. Shrek e Burro, dois robustos 
amigos, fora em um turbilhão de cidade grande 
aventura. Eu adoro!

BURRO
(canto) Na estrada de novo. Cante 
comigo, Shrek. Mal posso esperar para chegar 
na estrada novamente.

SHREK
O que eu disse sobre cantar?

BURRO
Posso assobiar?

SHREK
Não.

BURRO
Posso cantarolar?

SHREK
Tudo bem, cantarola.

Burro começa a cantarolar 'On the Road Again'.

DULOC - COZINHA

Um homem mascarado está torturando o Homem do Pão de Gengibre. Ele está continuamente 
mergulhando-o em um copo de leite. Lorde Farquaad entra.

FARQUAAD
É o suficiente. Ele está pronto para conversar.


O Homem do Pão de Gengibre é retirado do leite e derrubado 
em uma folha de biscoito. Farquaad ri enquanto caminha para o 
mesa. No entanto, quando ele chega à mesa, vemos que vai 
até os olhos. Ele limpa a garganta e a mesa é abaixada.


FARQUAAD
(ele pega as pernas do Homem do Gengibre; 
e brinca com eles) Corra, corra, corra, 
o mais rápido possível. Você não pode pegar 
me. Eu sou o homem do pão de gengibre.

HOMEM DO PÃO DE GENGIBRE
Você é um monstro.

FARQUAAD
Eu não sou o monstro aqui. Você é. Você 
e o resto daquele lixo de conto de fadas, 
envenenando meu mundo perfeito. Agora, conte 
me! Onde estão os outros?

HOMEM DO PÃO DE GENGIBRE
Coma-me! (Ele cospe leite na Farquaad 
olho.)

FARQUAAD
Eu tentei ser justo com vocês, criaturas. 
Agora minha paciência chegou ao fim! 
Diga-me ou eu vou... (ele faz como se 
puxe os botões do Homem do Gengibre)


HOMEM DO PÃO DE GENGIBRE
Não, não, não os botões. Não a minha gota de goma 
Botões.

FARQUAAD
Tudo certo então. Quem os esconde?


HOMEM DO PÃO DE GENGIBRE
Ok, vou te contar. Você conhece o 
Homem muffin?

FARQUAAD
O homem muffin?

HOMEM DO PÃO DE GENGIBRE
O homem muffin.

FARQUAAD
Sim, eu conheço o homem muffin, que vive 
em Drury Lane?

HOMEM DO PÃO DE GENGIBRE
Bem, ela é casada com o homem muffin.


FARQUAAD
O homem muffin?

HOMEM DO PÃO DE GENGIBRE
O homem muffin!

FARQUAAD
Ela é casada com o homem muffin.

A porta se abre e o guarda-mor entra.

PROTETOR DE CABEÇA
Meu senhor! Encontramos.

FARQUAAD
Então o que você está esperando? Trazer 
ele em.

Mais guardas entram carregando algo que está coberto por um lençol. 
Desligam o que quer que seja e retiram o lençol. É a Magia 
Espelho.

HOMEM DO PÃO DE GENGIBRE
(em AWE) Ah...

FARQUAAD
Espelho mágico...

HOMEM DO PÃO DE GENGIBRE
Não lhe diga nada! (Farquaad picareta 
ele se levanta e o joga em uma lata de lixo 
com tampa.) Não!

FARQUAAD
Noite. Espelho, espelho na parede. 
Não é este o reino mais perfeito? 
de todas?

ESPELHO
Bem, tecnicamente você não é um rei.


FARQUAAD
Uh, Thelonius. (Thelonius sustenta um 
espelho de mão e esmaga-lo com o seu 
punho.) Você estava dizendo?

ESPELHO
O que quero dizer é que você ainda não é um rei. 
Mas você pode se tornar um. Tudo o que você tem 
fazer é casar com uma princesa.

FARQUAAD
Continue.

ESPELHO
(ri nervosamente) Então, é só sentar 
e relaxa, meu senhor, porque está na hora 
para você conhecer as despedidas de solteira elegíveis de hoje. 
E aqui estão eles! Número de despedida de solteira 
um é um shut-in mentalmente abusado de 
um reino muito, muito distante. Ela gosta de sushi 
e banheira de hidromassagem a qualquer momento. Seus hobbies 
incluem cozinhar e limpar para ela 
duas irmãs más. Por favor, dê as boas-vindas à Cinderela. 
(mostra foto da Cinderela) Bachelorette 
Número dois é uma garota vestindo capa de 
a terra da fantasia. Embora ela viva 
com outros sete homens, ela não é fácil. 
Basta beijá-la morta, lábios congelados e 
Descubra que fio vivo ela é. Vir 
em. Desista da Branca de Neve! (mostra 
foto de Branca de Neve) E por último, mas 
certamente não por último, número de despedida de solteira 
três é uma ruiva ardente de um dragão guardado 
castelo cercado por lava quente fervendo! 
Mas não deixe isso esfriar você. Ela é 
uma pistola carregada que gosta de pina colads 
e ser pego na chuva. Seu 
para o resgate, princesa Fiona! (Espetáculos 
foto da princesa Fiona) Assim será 
Seja despedida de solteira número um, despedida de solteira 
número dois ou despedida de solteira número três?


GUARDAS
Dois! Dois! Três! Três! Dois! Dois! Três!


FARQUAAD
Três? Um? Três?

TELÔNIO
Três! (sustenta 2 dedos) Escolha o número 
três, meu senhor!

FARQUAAD
Ok, ok, uh, número três!

ESPELHO
Senhor Farquaad, você escolheu a princesa 
Fiona.

FARQUAAD
Princesa Fiona. Ela é perfeita. Tudo eu 
tem que fazer é apenas encontrar alguém que 
pode ir...

ESPELHO
Mas eu provavelmente deveria mencionar o pouco 
coisa que acontece à noite.

FARQUAAD
Vou fazer.

ESPELHO
Sim, mas depois do pôr do sol...

FARQUAAD
Silêncio! Eu vou fazer isso princesa Fiona 
minha rainha, e DuLoc finalmente terá 
O Rei Perfeito! Capitão, assemble 
seus melhores homens. Vamos ter 
um torneio. (sorri mal)

Estacionamento DuLoc - Seção Lancelot

Shrek e Burro saem do campo que fica bem ao lado do estacionamento 
lote. O castelo em si tem cerca de 40 andares de altura.

BURRO
Mas é isso. É isso aí. 
Isso é DuLoc. Eu falei que ia encontrar.


SHREK
Então, esse deve ser o castelo de Lord Farquaad.


BURRO
Uh-hein. Esse é o lugar.

SHREK
Você acha que talvez ele esteja compensando? 
para alguma coisa? (Ele ri, mas depois 
geme como Burro não entende a piada. 
Ele continua andando pelo estacionamento 
muito.)

BURRO
Ei, espere. Espere, Shrek.

HOMEM
Pressa, querida. Estamos atrasados. Pressa.


SHREK
Ei, você! (O atendente, que está vestindo 
uma cabeça gigante que se parece com Lord Farquaad, 
grita e começa a correr pelo 
fileiras de corda para chegar ao portão da frente 
para fugir de Shrek.) Aguarde um segundo. 
Olha, eu não vou te comer. Eu apenas 
- - Eu apenas - - (Ele suspira e depois começa 
andando em linha reta pelas filas. O 
atendente bate em muro e cai 
abaixo. Shrek e Burro olham para ele então 
continue na DuLoc.)

DULOC

Eles olham ao redor, mas tudo está quieto.

SHREK
É tranquilo. Muito tranquilo. Onde está todo mundo?


BURRO
Ei, olha isso!

Burro atropela e puxa uma alavanca que está presa a uma caixa 
marcados com a menção «Informação». A música acaba e depois as portas da caixa 
abrir. Há pequenas pessoas de madeira dentro e elas começam 
para cantar.

PESSOAS DE MADEIRA
Bem-vindo à DuLoc uma cidade tão perfeita


Aqui temos algumas regras

Vamos depô-los

Não faça ondas, fique na fila

E vamos nos dar bem

DuLoc é o lugar perfeito

Por favor, mantenha-se longe da grama

Ilumine seus sapatos, limpe... rosto

DuLoc é, DuLoc é

DuLoc é o lugar perfeito.

De repente, uma câmera tira a foto de Burro e Shrek.

BURRO
Uau! Vamos fazer isso de novo! (Faz pronto 
para atropelar e puxar a alavanca novamente)


SHREK
(agarra o rabo de burro e o segura imóvel) 
No. No. No, no, no! No.

Eles ouvem uma fanfarra de trompete e vão até a arena.

FARQUAAD
Bravos cavaleiros. Você é o melhor e 
mais brilhante em toda a terra. Hoje um 
de ti provarás a si mesmo...

Enquanto Shrek e Burro caminham pelo túnel para entrar na arena 
Burro está cantarolando a música-tema do DuLoc.

SHREK
Está bem. Você está indo no caminho certo 
para um fundo batido.

BURRO
Desculpe por isso.

FARQUAAD
Esse campeão terá a honra - 
- não, não - - o privilégio de ir em frente 
e resgatar a adorável princesa Fiona 
da guarda ardente do dragão. Se 
por qualquer motivo, o vencedor não for bem-sucedido, 
o primeiro vice-campeão assumirá seu lugar 
e assim por diante. Alguns de vocês 
pode morrer, mas é um sacrifício que estou disposto 
para fazer. (aplausos) Vamos ao torneio 
começar! (Ele percebe Shrek) Ah! O que é 
Isso? É horrível!

SHREK
(vira para olhar para Burro e depois volta 
em Farquaad) Ah, isso não é muito bom. 
É só um burro.

FARQUAAD
Realmente. Cavaleiros, novo plano! Aquele que 
Mata o Ogro será nomeado campeão! 
Que o faça!

HOMENS
Pega ele!

SHREK
Ah, ei! Agora vamos lá! Espere agora. (solavancos 
em uma mesa onde há canecas de 
cerveja)

MULTIDÃO
Vá em frente! Pega ele!

SHREK
(segura uma caneca de cerveja) Não podemos simplesmente 
resolver isso em cima de uma pinta?

MULTIDÃO
Mata a fera!

SHREK
Não? Tudo certo então. (bebe a cerveja) 
Sem essa!

Ele pega a caneca e quebra a torneira do barril grande 
de cerveja atrás dele. A cerveja vem correndo encharcando o 
outros homens e molhando o chão. É como lama agora. Slides do Shrek 
passa pelos homens e pega uma lança que um dos homens soltou. 
Quando Shrek começa a lutar contra o Burro pula em um dos maiores 
barris de cerveja. Ele se solta das cordas e começa a rolar. 
Burro consegue esmagar dois homens na lama. Há tanta coisa 
Não vou entrar em detalhes. Bastar 
para dizer que Shrek chuta bunda.

BURRO
Ei, Shrek, me marque! Marque-me!

Shrek chega e bate a cabeça de um homem contra burros. Shrek 
levanta-se nas cordas e interage com a multidão.

SHREK
Sim!

Um homem tenta se esgueirar atrás de Shrek, mas Shrek se vira a tempo 
e vê-lo.

MULHER
A cadeira! Dê-lhe a cadeira!

Shrek quebra uma cadeira sobre as costas dos caras. Finalmente todos os homens 
estão em baixa. Burro chuta um deles no capacete, e o burro 
soa o fim da partida. O público vai à loucura.

SHREK
Oh sim! Ah! Ah! Obrigado! Obrigado 
Muito! Estou aqui até quinta-feira. Tentar 
a vitela! O quê, o quê! (risos)

O riso pára quando todos os guardas ligam as armas 
Shrek.

PROTETOR DE CABEÇA
Vou dar a ordem, senhor?

FARQUAAD
Não, tenho uma ideia melhor. Pessoas de 
DuLoc, eu te dou o nosso campeão!

SHREK
Que?

FARQUAAD
Parabéns, ogro. Você ganhou o 
honra de embarcar em um grande e nobre 
busca.

SHREK
Busca? Eu já estou em uma busca, uma busca 
para recuperar meu pântano.

FARQUAAD
Seu pântano?

SHREK
Pois é, meu pântano! Onde você despejou esses 
criaturas de contos de fadas!

FARQUAAD
Realmente. Tudo bem, ogro. Eu vou te fazer 
um negócio. Vá nessa busca por mim, e 
Eu vou te devolver o seu pântano.

SHREK
Exatamente do jeito que foi?

FARQUAAD
Até o último cogumelo coberto de lodo.


SHREK
E os posseiros?

FARQUAAD
Tão bom quanto foi.

SHREK
Que tipo de missão?

Time Lapse - Burro e Shrek agora estão andando pelo campo 
afastando-se da DuLoc. Shrek está mastigando uma cebola.

BURRO
Deixe-me esclarecer isso. Você vai 
vá lutar contra um dragão e resgatar uma princesa 
apenas assim Farquaad lhe devolverá 
um pântano que você só não tem porque 
encheu-a cheia de aberrações na primeira 
lugar. É isso mesmo?

SHREK
Você sabe, talvez haja uma boa razão 
burros não devem falar.

BURRO
Eu não entendo. Por que você não puxa 
algumas dessas coisas de ogro nele? Acelerador 
ele, sitiando a sua fortaleza, tritura 
seus ossos para fazer o seu pão, o todo 
viagem do ogro.

SHREK
Ah, eu sei o quê. Talvez eu pudesse ter 
decapitou uma aldeia inteira e colocou 
suas cabeças em um pique, pegaram uma faca, 
abrir o baço e beber o seu 
Fluidos. Isso soa bem para você?


BURRO
Uh, não, não realmente, não.

SHREK
Para sua informação, há muito 
mais aos ogros do que as pessoas pensam.

BURRO
Exemplo?

SHREK
Exemplo? Ok, hum, os ogros são como cebolas. 
(ele segura a cebola)

BURRO
(cheira a cebola) Eles fedem?

SHREK
Sim - - Não!

BURRO
Eles te fazem chorar?

SHREK
Não!

BURRO
Você os deixa no sol, eles ficam 
tudo marrom, comece brotando pouco branco 
Cabelos.

SHREK
Não! Camadas! As cebolas têm camadas. Ogres 
tem camadas! As cebolas têm camadas. Você 
entendeu? Nós dois temos camadas. (ele amontoa 
um suspiro e depois sai)

BURRO
(seguindo depois de Shrek) Ah, vocês dois 
têm camadas. Ah. {Sniffs} Você sabe 
Nem todo mundo gosta de cebola. Bolo! Todos 
adora bolos! Os bolos têm camadas.

SHREK
Eu não me importo... o que todo mundo gosta. 
Ogres não são como bolos.

BURRO
Sabe o que mais todo mundo gosta? 
Parfaits. Você já conheceu uma pessoa, 
você diz: "Vamos pegar um parfait", eles 
dizer: "Inferno não, eu não gosto de nenhum perfeito"? 
Parfaits são deliciosos.

SHREK
Não! Você denso, irritante, miniatura 
besta de carga! Os ogros são como cebolas! 
E de história. Adeusinho. Te vejo depois.


BURRO
Parfaits pode ser a coisa mais deliciosa 
em todo o maldito planeta.

SHREK
Sabe, acho que preferi o seu cantarolado.


BURRO
Você tem um tecido ou algo assim? Eu sou 
fazendo bagunça. Apenas a palavra parfait 
Faça-me começar a lascar.

Eles vão embora. Há uma montagem de sua jornada. Caminhando 
um campo ao pôr do sol. Dormindo sob uma lua brilhante. Shrek tentando 
apagar a fogueira no dia seguinte e ter um pouco de problema, 
então Burro faz xixi no fogo para apagá-lo.

GUARDA DO DRAGÃO

Shrek e Burro estão caminhando até a torre de menagem que deveria 
casa Princesa Fiona. Parece um vulcão gigante.


BURRO
(farejadores) ah! Shrek! Você fez isso? 
Você tem que avisar alguém antes de você apenas 
racha um fora. Minha boca estava aberta e 
tudo.

SHREK
Acredite, Burro, se fosse eu, você 
estar morto. (farejadores) É enxofre. Nós 
deve estar chegando perto.

BURRO
Pois é, né, enxofre. Não fale 
sobre é o enxofre. Eu sei o que 
Eu sinto o cheiro. Não era enxofre. Ela 
não saiu pedra nenhuma.


Eles sobem o lado do vulcão/guardam e olham para baixo. Ali 
é um pequeno pedaço de rocha bem no centro e é onde 
o castelo é. Está rodeado por lava fervente. Parece muito 
pressentimento.

SHREK
Claro, é grande o suficiente, mas olhe para o 
localização. (risos... aí a risada vira 
em um gemido)

BURRO
Uh, Shrek? Uh, lembre-se quando você disse 
ogros têm camadas?

SHREK
Ah, sim.

BURRO
Bem, eu tenho um pouco de confissão para 
fazer. Burros não têm camadas. Nós 
Use o nosso medo lá fora no nosso 
Mangas.

SHREK
Aguarde um segundo. Burros não têm mangas.


BURRO
Você sabe o que quero dizer.

SHREK
Você não pode me dizer que tem medo de altura.


BURRO
Não, estou um pouco desconfortável 
sobre estar em uma ponte precária sobre 
uma fervura como a lava!

SHREK
Vamos lá, Burro. Estou aqui ao lado 
ya, tudo bem? Para apoio emocional., vamos 
basta enfrentar essa coisa juntos um 
pequeno passo de bebê de cada vez.

BURRO
Realmente?

SHREK
Realmente, realmente.

BURRO
Ok, isso me faz sentir muito melhor.


SHREK
Apenas continue em movimento. E não olhe para baixo.


BURRO
Ok, não olhe para baixo. Não olhe para baixo. 
Não olhe para baixo. Continue em movimento. Não 
Olhe para baixo. (ele passa por um apodrecimento 
e acaba olhando para baixo 
na lava) Shrek! Estou olhando para baixo! 
Oh, Deus, eu não posso fazer isso! Deixe-me apenas 
fora, por favor!

SHREK
Mas você já está no meio do caminho.

BURRO
Mas eu sei que metade é segura!

SHREK
Ok, tudo bem. Não tenho tempo para isso. 
Você volta.

BURRO
Shrek, não! Esperar!

SHREK
Just, Burro - - Vamos dançar 
então, eu vou? (salta e balança o 
ponte)

BURRO
Não faça isso!

SHREK
Ah, me desculpe. Fazer o quê? Ah, isso? (rejeições 
a ponte novamente)

BURRO
Sim, isso!

SHREK
Sim? Sim, faça. Ok. (continua a 
salta e balança enquanto ele apoia o burro 
a ponte)

BURRO
No, Shrek! No! Stop it!

SHREK
Você disse para fazer! Tô doin' isso.

BURRO
Eu vou morrer. Eu vou morrer. Shrek, 
Eu vou morrer. (pisa em terra firme) 
Ah!

SHREK
That'll do, Donkey. That'll do. (walks 
em direção ao castelo)

BURRO
Fresco. Então, onde está essa respiração de fogo? 
dor no pescoço afinal?

SHREK
Lá dentro, esperando a gente resgatá-la. 
(risos)

BURRO
Eu estava falando sobre o dragão, Shrek.


DENTRO DO CASTELO

BURRO
Você tem medo?

SHREK
Não.

BURRO
Mas...

SHREK
Psiu.

BURRO
Ah, bom. Nem eu. (vê um esqueleto 
e suspiros) 'Porque não há nada de errado 
com medo. O medo é sensato 
resposta a uma situação desconhecida. 
Situação perigosa desconhecida, eu poderia 
adicionar. Com um dragão que respira fogo 
e come cavaleiros e respira fogo, 
isso com certeza não significa que você é um covarde 
se você está um pouco assustado. Eu tenho certeza como 
caramba não é covarde. Eu sei disso.


SHREK
Burro, duas coisas, tá? Fechar... em cima. 
Agora vá lá e veja se consegue 
Encontre escadas.

BURRO
Escada? Pensei que estávamos procurando 
a princesa.

SHREK
(colocar um capacete) A princesa vai 
suba as escadas no quarto mais alto 
na torre mais alta.

BURRO
O que faz você pensar que ela estará lá?


SHREK
Li em livro uma vez. (sai)


BURRO
Fresco. Você lida com o dragão. Eu vou lidar com 
as escadas. Vou encontrar essas escadas. 
Vou chicotear a bunda deles também. Aquelas escadas 
não vai saber para que lado eles vão'. 
(sai)

QUARTO VAZIO

Burro ainda está falando consigo mesmo enquanto olha ao redor da sala.


BURRO
Vou tomar medidas drásticas. Chute 
ao meio-fio. Não mexa comigo. Eu sou 
o mestre de escadas. Eu dominei o 
escada. Eu gostaria de ter dado um passo aqui. 
Eu pisaria em cima disso.

ALHURES

Shrek vê uma luz na janela mais alta da torre.

SHREK
Bem, pelo menos sabemos onde a princesa 
é, mas cadê o...

BURRO
(os) Dragon!

Burro suspira e sai correndo enquanto o dragão ruge novamente. 
Shrek consegue tirar Burro do caminho assim como o dragão 
respira fogo.

SHREK
Burro, olha pra fora! (ele consegue 
um segurar a cauda dos dragões e segurar 
em) Entendi!

O dragão se irrita com isso e mexe na cauda e na Shrek 
vai voando pelo ar e cai pelo teto do 
torre mais alta. Fiona acorda com um e olha para ele deitado 
no chão.

BURRO
Ah! Aah! Aah!

Burro fica encurralado quando o Dragão derruba tudo, menos um pequeno 
parte da ponte em que ele está.

BURRO
No. Oh, no, No! (the dragon roars) Oh, 
que dentes grandes você tem. (O Dragão 
rosnados) Refiro-me aos dentes brancos e brilhantes. 
Eu sei que você provavelmente ouve isso o tempo todo 
de sua comida, mas você deve branquear, 
pq esse é um sorriso deslumbrante que você 
chegou lá. Eu detecto um indício de minty 
frescor? E sabe o que mais? Você é 
- - Você é uma menina dragão! Ah, claro! 
Quer dizer, é claro que você é uma menina dragão. 
Você está apenas se recuperando da beleza feminina. 
(O dragão começa a agitar os olhos 
com ele) Qual é o problema com você? 
Você tem algo no olho? ah. 
Ah. Ah. Cara, eu realmente adoraria ficar, 
mas você sabe, eu sou, uh... (O Dragão 
sopra um anel de fumaça na forma de um 
coração bem para ele, e ele tosse) Eu sou 
um asmático, e não sei se seria 
Exercite-se se você vai soprar fumaça 
Anéis. Shrek! (O dragão o escolhe 
levanta com os dentes e o carrega) 
No! Shrek! Shrek! Shrek!

QUARTO DE FIONA

Shrek geme ao se levantar do chão. Ele está de costas para Fiona 
então ela ajeita o vestido e se deita de volta na cama. Ela 
em seguida, rapidamente alcança e tira o buquê de flores 
a mesa lateral. Ela então se deita e parece estar dormindo. 
Shrek se vira e vai até ela. Ele olha para Fiona por 
um momento e ela cutuca os lábios. Shrek a pega pelos ombros 
e a afasta.

FIONA
Ah! Ah!

SHREK
Acordar!

FIONA
Que?

SHREK
Você é a princesa Fiona?

FIONA
Estou, à espera de um cavaleiro tão ousado a ponto de 
Resgate-me.

SHREK
Ah, isso é bom. Agora vamos lá!

FIONA
Mas espere, Sir Knight. Este é o nosso 
primeiro encontro. Se não for uma maravilha, 
momento romântico?

SHREK
Pois é, desculpa, senhora. Não dá tempo.


FIONA
Ei, espere. O que é que está a fazer? Você deve 
varre-me dos pés pela janela 
e desce uma corda sobre o seu valente corcel.


SHREK
Você teve muito tempo para planejar isso, 
Não é?

FIONA
(sorrisos) Mm-hmm.

Shrek quebra a fechadura de sua porta e a puxa para fora e para baixo 
o corredor.

FIONA
Mas temos que saborear esse momento! Você 
poderia recitar um poema épico para mim. Um 
balada? Um soneto! Um limerick? Ou algo assim!


SHREK
Eu não acho.

FIONA
Posso pelo menos saber o nome do meu campeão?


SHREK
Uh, Shrek.

FIONA
Senhor Shrek. (limpa a garganta e segura 
fora um lenço) Eu rezo para que você 
Tome este favor como um sinal de minha gratidão.


SHREK
Obrigado!

De repente, ouvem o rugido do dragão.

FIONA
(surpreso) Você não matou o dragão?


SHREK
Está na minha lista de afazeres. Agora vamos lá! 
(sai correndo e arrasta Fiona para trás 
ele.)

FIONA
Mas isso não está certo! Você foi feito 
para carregar, espada desenhada, bandeira voando. 
Foi o que todos os outros cavaleiros fizeram.


SHREK
Sim, logo antes de irromperem em chamas.


FIONA
Não é esse o ponto. (Shrek de repente 
pára e ela se depara com ele.) Ah! (Shrek 
ignora-a e dirige-se para uma porta de madeira 
para o lado.) Esperar. Onde você está 
Vai? A saída é por aí.

SHREK
Bem, eu tenho que salvar minha bunda.

FIONA
Que tipo de cavaleiro você é?

SHREK
Um de um tipo. (abre a porta para 
a sala do trono)

BURRO
(OS) Vá mais devagar. Devagar, querida, por favor. 
Acredito que é saudável conhecer 
alguém durante um longo período de tempo. 
Basta me chamar de antiquado. (risos) 
preocupado) (vemo-lo de perto e 
de longe, enquanto Shrek entra sorrateiramente 
o quarto) Eu não quero me apressar em 
uma relação física. Não estou emocionalmente 
pronto para um compromisso de, uh, este 
- - Magnitude realmente é a palavra que eu sou 
procurando. Magnitude- - Ei, isso 
é contato físico indesejado. Ei, o que 
você está fazendo? Ok, tudo bem. Vamos apenas 
faça backup um pouco e dê este passo 
de cada vez. Nós realmente deveríamos conhecer 
um ao outro primeiro como amigos ou amigos de caneta. 
Estou muito na estrada, mas adoro 
recebendo cartões - - Eu realmente adoraria 
para ficar, mas - - Não faça isso! Isto é 
meu rabo! Esse é o meu rabo pessoal. Você é 
vai rasgá-lo. Eu não dou permissão 
- - O que você vai fazer com isso? 
Hey, now. No way. No! No! No, no! No. 
No, no, no. No! Oh!

Shrek pega uma corrente que está conectada ao lustre e balança 
em direção ao dragão. Ele erra e volta a balançar. Ele olha 
para cima e vê que o lustre está bem acima da cabeça dos dragões. 
Ele puxa a corrente e ela solta e ele cai e bate 
Burro fora do caminho direito como o dragão está prestes a beijá-lo. 
Em vez disso, o dragão beija a bunda de Shreks. Ela abre os olhos e 
Ruge. Shrek solta a corrente e o lustre cai em cima 
sua cabeça, mas é muito grande e passa por cima de sua cabeça e se forma 
uma espécie de coleira para ela. Ela ruge novamente e Shrek e Burro 
decole correndo. Muito estilo 'Matrix'. Shrek agarra Burro e 
em seguida, agarra a princesa Fiona enquanto ele passa por ela.

BURRO
Oi, princesa!

FIONA
Fala!

SHREK
É, é fazer ele calar a boca que é 
o truque.

Todos eles começam a gritar enquanto o dragão ganha sobre eles. Manchas de Shrek 
um escorregador descendente e pula. Mas infelizmente existe um 
racha na pedra e ela atinge Shrek bem na virilha. Dele 
os olhos se cruzam e quando ele chega ao fundo do escorregador ele tropeça 
e anda levemente.

SHREK
Ah!

Shrek os aproxima da saída e coloca Burro e Fiona.


SHREK
Ok, vocês dois, ouviram pela saída! Eu vou 
Cuide do dragão.

Shrek pega uma espada e volta para o interior do 
castelo. Ele joga a espada entre vários sobrepostos 
elos de cadeia. Os elos da corrente são presos ao lustre que 
ainda está ao redor do pescoço dos dragões.

SHREK
(ecoando) Correr!

Todos decolam correndo para a saída com o dragão em alta 
perseguição. Eles chegam à ponte e atravessam. Os dragões 
respira fogo e a ponte começa a arder. Todos aguentam 
para a vida querida como as cordas que seguram a ponte desmoronam. Eles 
são balançados para o outro lado. Enquanto eles ficam pendurados de cabeça para baixo, eles olham 
no horror como o dragão faz para voar sobre a lava fervente para 
obtê-los. Mas, de repente, o lustre com a corrente sacudiu o 
dragão de volta e ela é incapaz de chegar a eles. Nossa turma sobe 
rapidamente para a segurança como o dragão parece irritado e, em seguida, dá um 
chora triste ao ver Burro ir embora.

FIONA
(deslizando pela colina do 'vulcão') Você 
Conseguiu! Você me resgatou! Você é incrível. 
(atrás de seu burro cai morro abaixo) 
Você é - - Você é maravilhoso. Você é... 
(vira e vê Shrek cair na 
morro e esbarrar em Burro) um pouco 
heterodoxo, admito. Mas a tua ação 
é grande, e teu coração é puro. Eu sou 
eternamente em sua dívida. (Burro limpa 
sua garganta.) E onde estaria um corajoso 
cavaleiro ficar sem o seu nobre corcel?


BURRO
Espero que você tenha ouvido isso. Ela me ligou 
um corcel nobre. Ela acha que eu sou um corcel.


FIONA
A batalha está ganha. Você pode remover seu 
capacete, bom Sir Knight.

SHREK
Uh, não.

FIONA
Por que não?

SHREK
Eu tenho cabelo de capacete.

FIONA
Por favor. Eu olhava para o rosto 
do meu socorrista.

SHREK
Não, não, você não - - 'st.

FIONA
Mas como você vai me beijar?

SHREK
Que? (para Burro) Isso não estava no 
descrição de funções.

BURRO
Talvez seja uma regalia.

FIONA
Não, é o destino. Ah, você deve saber 
como fica. Uma princesa trancada em um 
Torre e acossado por um dragão é resgatado 
por um bravo cavaleiro, e então eles compartilham 
Primeiro beijo do amor verdadeiro.

BURRO
Hmm? Com Shrek? Você pensa- - Espere. 
Esperar. Você acha que Shrek é sua verdade 
amor?

FIONA
Pois é.

Tanto Burro quanto Shrek caíram na gargalhada.

BURRO
Você acha que Shrek é o seu verdadeiro amor!


FIONA
O que é tão engraçado?

SHREK
Digamos que eu não sou do seu tipo, ok? Fiona: 
Claro que sim. Você é meu salvador. 
Agora - - Agora remova seu capacete.

SHREK
Olhar. Eu realmente não acho que isso seja um 
boa ideia.

FIONA
Basta tirar o capacete.

SHREK
Não vou.

FIONA
Retire-o.

SHREK
Não!

FIONA
Agora!

SHREK
Ok! Fácil. Como você manda. Vossa Alteza. 
(tira o capacete)

FIONA
Você- - Você é um- - um ogro.

SHREK
Ah, você estava esperando o Príncipe Encantado.


FIONA
Bem, sim, na verdade. Ah, não. Isso é 
tudo errado. Você não deveria ser 
um ogro.

SHREK
Princesa, eu fui enviada para resgatá-la por 
Senhor Farquaad, tudo bem? Ele é aquele que 
quer casar com você.

FIONA
Então por que ele não veio me resgatar?


SHREK
Boa pergunta. Você deve perguntar a ele que 
quando chegarmos lá.

FIONA
Mas eu tenho que ser resgatado pelo meu verdadeiro 
amor, não por algum ogro e seu- - seu 
animal de estimação.

BURRO
Bem, tanto para o corcel nobre.

SHREK
Você não está facilitando meu trabalho.


FIONA
Sinto muito, mas seu trabalho não é problema meu. 
Você pode dizer ao Senhor Farquaad que se ele 
quer me resgatar direito, eu serei 
esperando por ele aqui mesmo.

SHREK
Ei! Eu não sou mensageiro de ninguém, tudo 
Direita? (ameaçador) Sou entregador. 
(Ele rapidamente a pega e balança 
ela sobre o ombro dele como se fosse uma 
saco de batatas)

FIONA
Você não ousaria. Me bota pra baixo!

SHREK
Ya comin', Burro?

BURRO
Estou logo atrás.

FIONA
Me derrube, ou você sofrerá o 
Consequências! Isso não é digno! 
Me bota pra baixo!

FLORESTA

Um pouco de tempo se passou e Fiona se acalmou. Ela apenas 
fica ali mancando enquanto Shrek a carrega.

BURRO
Ok, então aqui está outra pergunta. Dizer 
tem uma mulher que te cava, né, 
mas você realmente não gosta dela desse jeito. 
Como você a decepciona muito fácil 
seus sentimentos não são feridos, mas você não 
ficar queimado e comido?

FIONA
Você apenas diz a ela que ela não é sua verdadeira 
amor. Todo mundo sabe o que acontece quando 
você encontra o seu... (Shrek a deixa cair 
o chão) Hey! Quanto mais cedo chegarmos a 
DuLoc melhor.

BURRO
Você vai adorar isso aí, princesa. 
É lindo!

FIONA
E o meu futuro noivo? Senhor Farquaad? 
Como ele é?

SHREK
Deixe-me colocar assim, princesa. Homens 
da estatura de Farquaad estão em falta. 
(ele e Burro riem)

Shrek então passa a jogar água em seu rosto para se lavar 
a poeira e a sujeira.

BURRO
Eu não sei. Há quem pense 
pouco dele. (eles riem de novo) Fiona: 
Pare. Parem com isso, vocês dois. Você é 
apenas ciúmes que você nunca pode medir 
a um grande governante como Lord Farquaad.


SHREK
Sim, bem, talvez você esteja certa, princesa. 
Mas vou deixar você fazer a "medição" 
quando o virdes amanhã.

FIONA
(olha o pôr-do-sol) Amanhã? 
Vai demorar tanto? Não deveríamos parar 
para fazer acampamento?

SHREK
Não, isso vai demorar mais. Nós podemos manter 
vai.

FIONA
Mas há ladrões na mata.

BURRO
Uau! Tempo fora, Shrek! Acampamento está começando 
para soar bem.

SHREK
Ei, vamos lá. Eu sou mais assustador do que qualquer coisa 
vamos ver nessa floresta.


FIONA
Preciso encontrar um lugar para acampar agora!


As orelhas de Burro e Shrek baixam à medida que se afastam dela.


PENHASCO DA MONTANHA

Shrek encontrou uma caverna que parece estar em boa ordem. Ele empurra 
uma pedra fora do caminho para revelar a caverna.

SHREK
Ei! Por aqui.

BURRO
Shrek, podemos fazer melhor do que isso. Eu 
não pense que isso é adequado para uma princesa.


FIONA
Não, não, é perfeito. Só precisa 
alguns toques caseiros.

SHREK
Toques caseiros? Gostou do quê? (ele ouve 
um barulho lacrimejante e olha para Fiona 
que arrancou a casca de uma árvore.)


FIONA
Uma porta? Bem, senhores, eu te ofereço 
Boa noite. (entra na caverna e 
coloca a porta da casca atrás dela)


BURRO
Você quer que eu te leia uma história para dormir? 
Eu vou.

FIONA
(OS) Eu disse boa noite!

Shrek olha para Burro por um segundo e depois vai mover o 
pedra de volta na frente da entrada da caverna com Fiona 
ainda dentro.

BURRO
Shrek, O que você está fazendo?

SHREK
(risos) Eu apenas- - Você sabe - - Oh, 
Sem essa. Eu estava apenas brincando.

MAIS TARDE NAQUELA NOITE

Shrek e Burro estão sentados ao redor de uma fogueira. Eles estão olhando 
no céu enquanto Shrek aponta certas constelações de estrelas 
ao Burro.

SHREK
E, uh, aquele, isso é Throwback, 
o único ogro a cuspir mais de três 
campos de trigo.

BURRO
Direita. Sim. Ei, você pode dizer o meu futuro 
dessas estrelas?

SHREK
As estrelas não dizem o futuro, Burro. 
Eles contam histórias. Olha, tem Bloodnut, 
o Flatulento. Você pode adivinhar o que ele é 
famoso por.

BURRO
Eu sei que você está inventando isso.

SHREK
Não, veja. Lá está ele, e há o 
grupo de caçadores fugindo de seu 
fedor.

BURRO
Isso não é nada, mas um monte de pouco 
Pontos.

SHREK
Você sabe, Burro, às vezes as coisas são 
mais do que parecem. Hmm? Esqueça.


BURRO
(arranca um grande suspiro) Ei, Shrek, o que 
Vamos fazer quando chegarmos ao nosso pântano de qualquer maneira?


SHREK
Nosso pântano?

BURRO
Sabe, quando a gente está salvando 
a princesa.

SHREK
Nós? Burro, não existe "nós". Não há 
não "nosso". Só tem eu e meu pântano. 
A primeira coisa que vou fazer é construir 
um muro de dez metros ao redor da minha terra.

BURRO
Você me cortou profundamente, Shrek. Você me cortou de verdade 
Só agora. Sabe o que eu acho? 
Acho que essa coisa toda do paredão é só 
uma forma de manter alguém fora.

SHREK
No, do ya think?

BURRO
Você está escondendo alguma coisa?

SHREK
Não importa, Burro.

BURRO
Ah, essa é mais uma daquelas cebolas 
coisas, não é?

SHREK
Não, este é um daqueles drop-it e 
deixe-o sozinho coisas.

BURRO
Por que você não quer falar sobre isso?


SHREK
Por que você quer falar sobre isso?

BURRO
Por que você está bloqueando?

SHREK
Não estou bloqueando.

BURRO
Ah, sim, você é.

SHREK
Burro, estou te avisando.

BURRO
Quem você tenta manter fora?

SHREK
Todos! Ok?

BURRO
(pausa) Ah, agora estamos chegando em algum lugar. 
(grins)

Neste momento, Fiona puxa a 'porta' para longe da entrada para 
a caverna e os picos para fora. Nenhum dos caras a vê.

SHREK
Ah! Pelo amor de Pete! (levanta-se e 
caminha até a beira do penhasco 
e senta-se)

BURRO
Qual é o seu problema? O que você tem contra 
o mundo inteiro afinal?

SHREK
Olha, não sou eu que estou com o problema, 
Ok? É o mundo que parece ter 
um problema comigo. As pessoas dão uma olhada 
em mim e vá. "Aah! Ajuda! Correr! Um grande, 
Ogro estúpido, feio!" Eles me julgam antes 
eles até me conhecem. É por isso que eu sou melhor 
fora sozinho.

BURRO
Sabe de uma coisa? Quando nos conhecemos, eu não 
acho que você era apenas um grande, estúpido, feio 
ogro.

SHREK
Sim, eu sei.

BURRO
Então, uh, tem algum burro lá em cima?


SHREK
Bem, há, hum, Gabby, o Pequeno 
e Irritante.

BURRO
Ok, ok, eu vejo agora. O grande brilhante 
uma, ali mesmo. Aquele aí?


Fiona coloca a porta de volta.

SHREK
Essa é a lua.

BURRO
Ah, tudo bem.

DuLoc - Quarto de Farquaad

A câmera percorre um monte de coisas de casamento. Reprodução de música suave 
em segundo plano. Farquaad está na cama, observando como a Magia 
Espelho mostra-lhe a princesa Fiona.

FARQUAAD
Mais uma vez, mostre-me novamente. Espelho, espelho, 
mostre-a para mim. Mostre-me a princesa.


ESPELHO
Hmph.

O Espelho rebobina e começa a tocar novamente desde o início.


FARQUAAD
Ah. Perfeito.

Farquaad olha para o peito nu e puxa o lençol para cima 
cobrir-se como se Fiona pudesse vê-lo enquanto ele olha com cara de ovelha 
à sua imagem no espelho.

MANHÃ

Fiona sai da caverna. Ela olha para Shrek e Burro 
que ainda estão dormindo. Ela vaga pela floresta e vem 
através de um pássaro azul. Ela começa a cantar. O pássaro canta junto 
com ela. Ela acerta notas cada vez mais altas e o pássaro luta 
para acompanhá-la. De repente, a pressão da nota é demais 
grande e o pássaro explode. Fiona parece um pouco ovelha, mas 
Ela olha para os ovos que o pássaro deixou para trás. Lapso de tempo, Fiona 
agora está cozinhando os ovos para o café da manhã. Shrek e Burro ainda estão 
Dormir. Shrek acorda e olha para Fiona. Fala de burro 
durante o sono.

BURRO
(tranquilamente) Mmm, sim, você sabe que eu gosto 
É assim. Vamos lá, querida. Eu disse 
Eu gosto disso.

SHREK
Burro, acorde. (sacode-o)

BURRO
Hem? Que?

SHREK
Acordar.

BURRO
Que? (alongamentos e bocejos)

FIONA
Bom dia. Hm, como você gosta do seu 
ovo?

BURRO
Ai, bom dia, princesa!

Fiona se levanta e coloca os ovos na frente deles.

SHREK
Do que se trata tudo isso?

FIONA
Você sabe, nós meio que saímos para um mal 
começar ontem. Eu queria fazer isso 
Depende de você. Quero dizer, afinal, você fez 
Resgate-me.

SHREK
Uh, obrigado.

Burro cheira os ovos e lambe os lábios.

FIONA
Bem, coma-se. Temos um grande dia pela frente 
de nós. (sai)

POSTERIOR

Estão mais uma vez a caminho. Eles estão andando pelo 
floresta. Shrek arrota.

BURRO
Shrek!

SHREK
Que? É um elogio. Melhor 
do que em, eu sempre digo. (risos)

BURRO
Bem, não tem como se comportar na frente 
de uma princesa.

Fiona arrota

FIONA
Obrigado.

BURRO
Ela é tão desagradável quanto você.

SHREK
(risos) Você sabe, você não é exatamente 
o que eu esperava.

FIONA
Bem, talvez você não deva julgar as pessoas 
antes de conhecê-los.

Ela sorri e depois continua andando, cantando baixinho. Repentinamente 
do nada, um homem se balança e empurra Fiona para dentro 
uma árvore.

ROBIN HOOD
Liberdade! Ei!

SHREK
Princesa!

FIONA
(para Robin Hood) O que é que está a fazer?


ROBIN HOOD
Aquiete-se, mon cherie, pois eu sou o seu salvador! 
E eu estou resgatando você desse verde... (beijos 
levanta o braço enquanto Fiona se retira 
nojo)... animal.

SHREK
Ei! Essa é a minha princesa! Vá encontrá-lo 
possuir!

ROBIN HOOD
Por favor, monstro! Você não pode ver que eu sou um 
pouco ocupado aqui?

FIONA
(ficar farto) Olha, amigo, eu não 
Saiba quem você acha que é!

ROBIN HOOD
Ah! É claro! Ah, que grosseria. Por favor 
Deixe-me apresentar-me. Oh, Merry Men. 
(risos)

De repente, uma sanfona começa a tocar e os homens alegres saem 
dos arbustos. Eles começam a cantar a música-tema de Robin.

HOMENS ALEGRES
Ta, respirar, respirar, respirar, whoo.

ROBIN HOOD
Eu roubo dos ricos e dou para os 
carente.

HOMENS ALEGRES
Ele pega uma porcentagem,

ROBIN HOOD
Mas não sou ganancioso. Eu ressarto bonito 
donzelas, cara, eu sou bom.

HOMENS ALEGRES
Que cara, Monsieur Hood.

ROBIN HOOD
Quebrá-lo. Gosto de uma luta honesta 
e uma empregadinha sagaz...

HOMENS ALEGRES
O que ele está basicamente dizendo é que ele gosta 
para obter...

ROBIN HOOD
Pago. Então... Quando um ogro no mato 
agarra uma senhora pelo tush. Isso é ruim.


HOMENS ALEGRES
Isso é ruim.

ROBIN HOOD
Quando uma bela está com uma fera, ela faz 
Eu terrivelmente louco.

HOMENS ALEGRES
Ele é louco, ele é muito, muito louco.


ROBIN HOOD
Vou pegar minha lâmina e passar por ela 
Seu coração, mantenha seus olhos em mim, meninos 
pq estou prestes a começar...

Há um grunhido quando Fiona desce do galho da árvore e 
deixa Robin Hood inconsciente.

FIONA
Cara, isso foi chato!

Shrek olha para ela com admiração.

HOMEM FELIZ
Oh, você pequenininho- - (dispara uma flecha em 
Fiona, mas ela se esquiva do caminho)


A flecha voa em direção ao Burro que pula nos braços de Shrek para 
saia do caminho. A flecha começa a saltar de uma árvore.


Outra sequência de luta começa e Fiona dá um grito de karatê e 
em seguida, passa a bater a porcaria dos Merry Men. Há 
um momento muito interessante de 'Matrix' aqui quando Fiona faz uma pausa 
no ar para arrumar o cabelo. Finalmente todos os Merry Men estão em baixo, 
e Fiona começa a se afastar.

FIONA
Uh, vamos?

SHREK
Aguarde na linha. (solta Burro e começa 
andando depois de Fiona) Ah! Uau, uau, 
Uau. Espere agora. De onde veio isso 
De?

FIONA
Que?

SHREK
Isso! Lá atrás. Isso foi incrível! 
Onde você aprendeu isso?

FIONA
Poço... (risos) quando se mora sozinho, 
uh, a gente tem que aprender essas coisas em 
caso haja um... (suspiros e pontos) 
tem uma flecha no bumbum!

SHREK
Que? (voltas e olhares) Ah, você gostaria 
olha isso? (ele vai retirá-lo 
mas vacila porque é tenro)


FIONA
Ah, não. A culpa é toda minha. Eu sou assim 
Desculpa.

BURRO
(subindo) Por que? Qual é o problema?

FIONA
Shrek está machucado.

BURRO
Shrek está machucado. A dor do Shrek? Ah, não, 
Shrek vai morrer.

SHREK
Burro, estou bem.

BURRO
Você não pode fazer isso comigo, Shrek. Eu sou 
muito jovem para você morrer. Mantenha suas pernas 
elevado. Vire a cabeça e tosse. 
Alguém conhece o Heimlich?

FIONA
Burro! Acalmar. Se você quiser ajudar 
Shrek, corra para a floresta e me encontre 
uma flor azul com espinhos vermelhos.

BURRO
Flor azul, espinhos vermelhos. Ok, estou em 
ela. Flor azul, espinhos vermelhos. Não morra 
Shrek. Se você vir um túnel longo, fique 
longe da luz!

SHREK & FIONA
Burro!

BURRO
Oh sim. Direita. Flor azul, espinhos vermelhos. 
(corre)

SHREK
Para que servem as flores?

FIONA
(como é óbvio) Para se livrar 
de Burro.

SHREK
Ah.

FIONA
Agora você se segura, e eu vou puxar isso 
coisa fora. (dá um pouco a seta 
puxar)

SHREK
(pula para longe) Ow! Ei! Fácil com o 
yankin'.

Enquanto eles continuam a falar, Fiona continua indo atrás da flecha e 
Shrek continua se esquivando de suas mãos.

FIONA
Sinto muito, mas tem que sair.


SHREK
Não, é ternura.

FIONA
Agora, espere.

SHREK
O que você está fazendo é o oposto de 
Ajuda.

FIONA
Não se mexe.

SHREK
Olha, time out.

FIONA
Você gostaria... (grunhe como Shrek coloca o seu 
Passe o rosto para impedi-la de 
chegando na flecha) Ok. O que fazer 
você propõe que façamos?

ALHURES

Burro ainda está à procura da flor especial.

BURRO
Flor azul, espinhos vermelhos. Flor azul, 
espinhos vermelhos. Flor azul, espinhos vermelhos. 
Isso seria muito mais fácil se eu não fosse 
daltônicos! Flor azul, espinhos vermelhos.


SHREK
(OS) Ow!

BURRO
Aguenta, Shrek! Tô comin'! (rasga um 
flor de um arbusto próximo que simplesmente acontece 
ser uma flor azul com espinhos vermelhos)


O CAMINHO DA FLORESTA

SHREK
Ow! Não é bom.

FIONA
Ok. Ok. Quase consigo ver a cabeça. 
(Shrek grunhe enquanto puxa) É só 
sobre...

SHREK
Ow! ah! (ele se empurra e consegue cair 
com Fiona em cima dele)

BURRO
Ahem.

SHREK
(expulsando Fiona dele) Nada 
Aconteceu. Nós éramos apenas, uh - -

BURRO
Olha, se você queria ficar sozinho, tudo 
você tinha que fazer era perguntar. Ok?

SHREK
Ah, vamos lá! Essa é a última coisa em 
minha mente. A princesa aqui era apenas- 
- (Fiona puxa a flecha) Ugh! (ele 
vira-se para olhar para Fiona, que se levanta 
a flecha com um sorriso) Ow!

BURRO
Ei, o que é isso? (riso nervoso) 
Isto é... Isso é sangue?

Burro desmaia. Shrek caminha e o pega enquanto eles continuam 
a caminho.

Há uma montagem de cenas enquanto o grupo volta para DuLoc. 
Shrek rastejando até o topo de uma árvore para fazê-la cair sobre um 
pequeno riacho para que Fiona não se molhe. Shrek então se levanta como 
Burro está prestes a atravessar a árvore e a árvore balança para trás 
em sua posição ereta e Burro voa. Shrek swatting 
e um bando de moscas e mosquitos. Fiona pega uma teia de aranha próxima 
que está em um galho de árvore e corre pelo campo balançando-o 
ao redor para pegar os insetos. Ela então entrega para Shrek, que começa 
comer como se fosse uma guloseima. Enquanto ele sai, ela lambe os dedos. 
Shrek pegando um sapo e explodindo-o como um balão e apresentando 
ele para Fiona. Fiona pegando uma cobra, explodindo-a, modelando 
em um animal balão e apresentando-o a Shrek. O grupo 
chegando a um moinho de vento que fica perto de DuLoc.

MOINHO DE VENTO

SHREK
Aí está, princesa. Seu futuro espera 
você.

FIONA
Isso é DuLoc?

BURRO
Sim, eu sei. Você sabe, Shrek pensa 
Lord Farquaad está compensando algo, 
o que eu acho que significa que ele tem um realmente... (Shrek 
pisa no casco) Ow!

SHREK
Um, I, uh- - I guess we better move 
em.

FIONA
Certo. Mas, Shrek? Estou - - Estou preocupado 
sobre Burro.

SHREK
Que?

FIONA
Quer dizer, olhe para ele. Ele não olha 
Tão bom.

BURRO
Do que você está falando? Estou bem.


FIONA
(ajoelha-se para olhá-lo nos olhos) Isto é 
o que eles sempre dizem, e depois 
Coisa que você sabe, você está de costas. 
(pausa) Morto.

SHREK
Sabe, ela está certa. Você está horrível. 
Quer sentar-se?

FIONA
Uh, você sabe, eu vou fazer um chá para você.


BURRO
Eu não queria dizer não', mas eu 
tenho essa pontada no meu pescoço, e quando 
Eu viro a cabeça assim, olha, (vira 
seu pescoço de uma forma muito afiada até o seu 
cabeça é completamente lateral) Ow! Ver?


SHREK
Quem está com fome? Vou nos encontrar um jantar.


FIONA
Vou pegar a lenha.

BURRO
Ei, para onde você vai'? Oh, cara, eu não posso 
sentir meus dedos dos pés! (olha para baixo e grita) 
Eu não tenho dedos dos pés! Eu acho que eu preciso 
um abraço.

OCASO

Shrek construiu uma fogueira e está cozinhando o resto do jantar enquanto 
Fiona come.

FIONA
Mmm. Isso é bom. Isso é muito bom. 
O que é isto?

SHREK
Uh, rato de erva daninha. Estilo rotisserie.

FIONA
Sem brincadeira. Bem, isso é delicioso.


SHREK
Bem, eles também são ótimos em ensopados. Agora 
Não quero me gabar, mas faço uma maldade 
Caldeirada de Rato de Ervas Daninhas. (risos)

Fiona olha para DuLoc e suspira.

FIONA
Acho que vou jantar um pouco diferente 
amanhã à noite.

SHREK
Talvez você possa vir me visitar no pântano 
algum dia. Vou cozinhar todo tipo de coisa 
Para você. Sopa de sapo do pântano, tartare olho de peixe 
- - você o nomeia.

FIONA
(sorrisos) Eu gostaria disso.

Eles sorriem um para o outro.

SHREK
Hum, princesa?

FIONA
Sim, Shrek?

SHREK
Eu, hum, fiquei me perguntando... é você... (suspiros) 
Vai comer isso?

BURRO
(risos) Cara, isso não é romântico? 
Basta olhar para aquele pôr do sol.

FIONA
(pula para cima) Ocaso? Ah, não! Quer dizer, é 
tarde. I-É muito tarde.

SHREK
Que?

BURRO
Espere um minuto. Eu vejo o que está acontecendo. 
aqui. Você tem medo do escuro, não tem 
você?

FIONA
Sim! Sim, é isso. Estou apavorada. 
Sabe, é melhor eu entrar.

BURRO
Não se sinta mal, princesa. Eu costumava 
Tenha medo do escuro, também, até - 
— Ei, não, espere. Ainda tenho medo de 
o escuro.

Shrek suspira

FIONA
Boa noite.

SHREK
Boa noite.

Fiona entra no moinho de vento e fecha a porta. Aparência de burro 
no Shrek com um novo olhar.

BURRO
ah! Agora eu realmente vejo o que está acontecendo 
aqui.

SHREK
Ah, do que você está falando?

BURRO
Eu nem quero ouvir. Olha, eu sou 
um animal, e eu tenho instintos. E 
Eu sei que vocês dois estavam cavando em cada um 
outro. Eu podia sentir isso.

SHREK
Você é doido. Só estou trazendo ela 
de volta a Farquaad.

BURRO
Ah, vamos lá, Shrek. Acorde e cheire 
os feromônios. Basta continuar e dizer 
ela como você se sente.

SHREK
I- - Não há nada a dizer. Ademais 
mesmo que eu tenha dito a ela que, bem, você 
saber - - e eu não estou dizendo 'eu faço' porque 
Eu não - - ela é uma princesa, e eu sou 
- -

BURRO
Um ogro?

SHREK
Sim. Um ogro.

BURRO
Ei, para onde você vai'?

SHREK
Para obter... mover lenha. (suspiros)

Burro olha para a grande pilha de lenha lá já 
É.

LAPSO DE TEMPO

Burro abre a porta do Moinho de Vento e entra. Fiona é 
em nenhum lugar para ser visto.

BURRO
Princesa? Princesa Fiona? Princesa 
Onde você está? Princesa?

Fiona olha para Burro das sombras, mas não conseguimos vê-la.


BURRO
É muito assustador aqui dentro. Eu não estou jogando 
sem jogos.

De repente, Fiona cai do corrimão. Ela se levanta só que não 
Pareça-se com ela mesma. Ela parece um ogro e Burro começa a surtar 
fora.

BURRO
Aah!

FIONA
Ah, não!

BURRO
Não, socorro!

FIONA
Psiu!

BURRO
Shrek! Shrek! Shrek!

FIONA
Não, está tudo bem. Tudo bem.

BURRO
O que você fez com a princesa?


FIONA
Burro, eu sou a princesa.

BURRO
Aah!

FIONA
Sou eu, neste corpo.

BURRO
Meu Deus! Você comeu a princesa. (para 
seu estômago) Você pode me ouvir?

FIONA
Burro!

BURRO
(ainda apontado para o estômago) Escutar 
Continue respirando! Eu vou te tirar de 
ali!

FIONA
Não!

BURRO
Shrek! Shrek! Shrek!

FIONA
Psiu.

BURRO
Shrek!

FIONA
Eu sou assim.

Burro olha em seus olhos enquanto ela acaricia seu focinho, e ele se acalma 
abaixo.

BURRO
Princesa? O que aconteceu com você? Você é, 
uh, uh, uh, diferente.

FIONA
Eu sou feia, tá?

BURRO
Pois é! Foi algo que você comeu? 
Porque eu disse ao Shrek que aqueles ratos eram um 
má ideia. Você é o que você come, eu disse. 
Agora--

FIONA
Não. I - - Eu sou assim há tanto tempo 
como me lembro.

BURRO
O que você quer dizer? Olha, eu nunca 
Já te vi assim antes.

FIONA
Só acontece quando o sol se põe. 
"De noite de um jeito, de dia de outro. Este 
será a norma... até encontrar 
o primeiro beijo do amor verdadeiro... e depois tomar 
a verdadeira forma do amor".

BURRO
Ah, isso é lindo. Eu não sabia 
você escreveu poesia.

FIONA
É um feitiço. (suspiro) Quando eu era pequeno 
menina, uma bruxa lançou um feitiço em mim. Cada 
noite eu me torno isso. Isso horrível, 
besta feia! Fui colocado em uma torre 
para esperar o dia em que meu verdadeiro amor 
Resgate-me. É por isso que eu tenho que casar 
Senhor Farquaad amanhã antes do sol 
e ele me vê assim. (começa 
chorar)

BURRO
Tudo bem, tudo bem. Acalmar. Olhar 
não é tão ruim assim. Você não é tão feio assim. 
Bem, eu não vou mentir. Você é feio. 
Mas você só fica assim à noite. 
Shrek feio 24-7.

FIONA
Mas Burro, eu sou uma princesa, e isso 
não é como uma princesa deve parecer.


BURRO
Princesa, como 'bout se você não se casar 
Farquaad?

FIONA
Eu tenho que fazer. Só o beijo do meu verdadeiro amor 
pode quebrar o feitiço.

BURRO
Mas, você sabe, hum, você é uma espécie de 
orge, e Shrek - - bem, você tem um 
muito em comum.

FIONA
Shrek?

FORA

Shrek está caminhando em direção ao moinho de vento com um girassol em seu 
mão.

SHREK
(para si mesmo) Princesa, eu - - Uh, como é 
Vai, antes de tudo? Bom? Hum, bom 
para mim também. Estou bem. Eu vi essa flor 
e pensei em você porque é bonito 
e - - bem, eu realmente não gosto disso, 
mas eu pensei que você poderia gostar pq 
Você é bonita. Mas eu gosto de você de qualquer maneira. 
Eu - - uh, uh... (suspiros) Estou com problemas. 
Ok, vamos lá.

Ele caminha até a porta e faz uma pausa do lado de fora quando ouve Burro 
e Fiona conversando.

FIONA
(OS) Eu não posso simplesmente casar com quem eu quiser. 
Olha bem para mim, Burro. Eu quero dizer 
realmente, quem pode amar uma fera assim 
horrível e feio? "Princesa" e "feio" 
não andem juntos. É por isso que eu não posso 
fique aqui com Shrek.

Shrek recua em choque.

FIONA
(OS) Minha única chance de viver feliz 
ever after é casar com o meu verdadeiro amor.


Shrek arranca um suspiro profundo. Ele joga a flor para baixo e caminha 
fora.

DENTRO

FIONA
Você não viu, Burro? É assim que 
tem que ser. É a única maneira de quebrar 
o feitiço.

BURRO
Você pelo menos tem que dizer a verdade a Shrek.


FIONA
Não! Não dá para respirar uma palavra. Ninguém 
deve sempre saber.

BURRO
Qual o sentido de poder falar 
se você tem que guardar segredos?

FIONA
Prometa que você não vai contar. Prometer!

BURRO
Tudo bem, tudo bem. Não vou contar para ele. 
Mas deveria. (vai para fora) Eu apenas 
saiba antes que isso acabe, eu vou 
precisam de muita terapia séria. 
Olha o meu olho contraído'.

Fiona sai pela porta e o observa ir embora. Ela olha 
para baixo e mancha o girassol. Ela pega antes de voltar 
dentro do moinho de vento.

MANHÃ

Burro está dormindo. Shrek está longe de ser visto. Fiona ainda está 
acordado. Ela está arrancando pétalas do girassol.

FIONA
Eu digo a ele, eu digo a ele que não. Eu digo a ele: 
Digo-lhe que não. Eu conto para ele. (ela rapidamente 
corre para a porta e vai para fora) Shrek! 
Shrek, tem uma coisa que eu quero... (Ela 
olha e vê o sol nascente, e como 
o sol aperta o céu ela volta para trás 
em um humano.)

Assim que ela olha para o sol, ela vê Shrek pisando em direção 
dela.

FIONA
Shrek. Você está bem?

SHREK
Perfeito! Nunca esteve tão bem.

FIONA
I - - Eu não - - Há algo 
Eu tenho que te dizer.

SHREK
Você não precisa me dizer nada, 
Princesa. Ouvi o suficiente ontem à noite.


FIONA
Você ouviu o que eu disse?

SHREK
Cada palavra.

FIONA
Achei que você ia entender.

SHREK
Ah, eu entendo. Como você disse: "Quem 
poderia amar uma besta horrível e feia?"


FIONA
Mas eu pensei que isso não importaria 
você.

SHREK
Sim? Pois bem. (Fiona olha para 
ele em choque. Ele olha para ela e 
vê um grupo se aproximando.) Ah, né 
Pontualmente. Princesa, eu te trouxe 
uma coisinha.

Farquaad chegou com um grupo de seus homens. Ele parece muito real 
sentado em seu cavalo. Você nunca imaginaria que ele é apenas 
como 3 metros de altura. Burro acorda com um bocejo enquanto os soldados 
Março por.

BURRO
O que eu perderia? O que eu perderia? (manchas 
os soldados) (abafados) Quem disse isso? 
Não poderia ter sido o burro.

FARQUAAD
Princesa Fiona.

SHREK
Como prometido. Agora entregue-o.

FARQUAAD
Muito bem, ogro. (segura uma peça 
de papel) A escritura para o seu pântano, limpo 
fora, como combinado. Pegue e vá antes 
Mudo de ideia. (Shrek pega o papel) 
Perdoe-me, princesa, por ter surpreendido 
você, mas você me assustou, pois eu tenho 
nunca tinha visto uma beleza tão radiante antes. 
Eu sou Lord Farquaad.

FIONA
Lord Farquaad? Oh, no, no. (Farquaad 
estala os dedos) Perdoe-me, meu senhor, 
pois eu estava apenas dizendo um curto... (Relógios 
quando Farquaad é retirado de seu cavalo 
e pôs-se à sua frente. Ele vem 
até a cintura.) adeus.

FARQUAAD
Ah, isso é tão doce. Você não tem 
desperdiçar boas maneiras no ogro. É 
não como se tivesse sentimentos.

FIONA
Não, você tem razão. Não.

Burro assiste a essa troca com um olhar curioso no rosto.


FARQUAAD
Princesa Fiona, linda, justa, impecável 
Fiona. Peço a sua mão em casamento. 
Você será a noiva perfeita para o 
noivo perfeito?

FIONA
Senhor Farquaad, eu aceito. Nada faria 
fazer--

FARQUAAD
(interrompendo) Excelente! Vou começar 
os planos, para amanhã nos casamos!

FIONA
Não! Quer dizer, uh, por que esperar? Vamos ao que interessa 
casado hoje antes do sol se pôr.


FARQUAAD
Ah, ansioso, tá? Você está certo. 
Quanto antes, melhor. Tem tanta coisa 
para fazer! Tem o bufê, o bolo, 
a banda, a lista de convidados. Capitão, redondo 
até alguns convidados! (um guarda coloca Fiona 
no lombo de seu cavalo)

FIONA
Adeus-te-bem, ogro.

Todo o grupo de Farquaad começa a voltar para DuLoc. Relógios de burro 
eles vão.

BURRO
Shrek, o que você está fazendo? Você está deixando 
ela foge.

SHREK
Sim? E daí?

BURRO
Shrek, há algo sobre ela você 
Não sei. Olha, eu falei com ela por último 
noite, Ela é - -

SHREK
Eu sei que você falou com ela ontem à noite. 
Vocês são ótimos amigos, não é? Agora, se 
vocês dois são tão bons amigos, por que não 
você segue a casa dela?

BURRO
Shrek, eu - - Eu quero ir com você.

SHREK
Eu te falei, né? Você não vem 
casa comigo. Moro sozinha! Meu pântano! 
Me! Mais ninguém! Compreender? Ninguém! 
Especialmente inútil, patético, irritante, 
burros falantes!

BURRO
Mas eu pensei - -

SHREK
Sim. Sabe de uma coisa? Você pensou errado! 
(pisa fora)

BURRO
Shrek.

Montagem de diferentes cenas. Shrek chegando em casa. Fiona 
sendo ajustado para o vestido de noiva. Burro em um córrego correndo 
no dragão. Shrek limpando sua casa. Fiona jantando 
só. Shrek jantando sozinho.

A CASA DE SHREK

Shrek está jantando quando ouve um som do lado de fora. Ele vai 
fora para investigar.

SHREK
Burro? (Burro o ignora e continua 
com o que ele está fazendo.) O que você está 
Fazendo?

BURRO
Eu pensaria, de todas as pessoas, que você 
Reconheça uma parede quando vir uma.


SHREK
Pois é. Mas o muro é suposto 
para dar a volta no meu pântano, não através dele.


BURRO
É em torno da sua metade. Veja que é o seu 
metade, e esta é a minha metade.

SHREK
Ah! Sua metade. Hmm.

BURRO
Sim, minha metade. Ajudei a resgatar a princesa. 
Fiz metade do trabalho. Eu recebo metade do 
espólio. Agora me entregue aquela grande pedra velha, 
aquele que se parece com a sua cabeça.


SHREK
Recue!

BURRO
Não, você recua.

SHREK
Este é o meu pântano!

BURRO
Nosso pântano.

SHREK
(pega o galho da árvore Burro está trabalhando 
com) Solte-se, Burro!

BURRO
Você se soltou.

SHREK
Teimosa jacaré!

BURRO
Ogro fedorento.

SHREK
Multa! (deixa cair o galho da árvore e caminha 
fora)

BURRO
Ei, ei, volte aqui. Eu não estou passando 
com você ainda.

SHREK
Bem, eu acabei com você.

BURRO
Uh-uh. Você sabe, com você é sempre, 
"Eu, eu, eu!" Bem, adivinhem! Agora 
chegou a minha vez! Então você simplesmente cala a boca e 
prestar atenção! Você é maldoso comigo. Você 
insulte-me e você não aprecia nada 
isso eu faço! Você está sempre me empurrando 
ao redor ou me afastando.

SHREK
Oh sim? Bem, se eu te tratei assim 
ruim, como é que você voltou?

BURRO
Porque é isso que os amigos fazem! Eles 
perdoem-se!

SHREK
Oh sim. Você tem razão, Burro. Eu perdoo 
você... por me apunhalar pelas costas! 
(entra no exterior e bate o 
porta)

BURRO
ah! Você está tão embrulhado em camadas, 
Menino Cebola, você tem medo do seu 
Sentimentos.

SHREK
(os) Go away!

BURRO
Lá está, fazendo de novo apenas 
como você fez com a Fiona. Tudo o que ela sempre 
fazer era como você, talvez até te amar.


SHREK
(os) Love me? She said I was ugly, a 
criatura horrível. Ouvi os dois de 
você falando.

BURRO
Ela não estava falando de você. Ela foi 
falando, uh, outra pessoa.


SHREK
(abre a porta e sai) Ela não estava 
falando de mim? Bem, então quem foi 
ela falando?

BURRO
Uh-uh, de jeito nenhum. Não estou dizendo nada. 
Você não quer me ouvir. Direita? 
Direita?

SHREK
Burro!

BURRO
Não!

SHREK
Tá bom, olha. Me desculpe, tudo bem? (suspiro) 
Desculpa. Eu acho que eu sou apenas um grande, 
Ogro estúpido, feio. Você pode me perdoar?


BURRO
Ei, é para isso que servem os amigos, certo?


SHREK
Direita. Amigos?

BURRO
Amigos.

SHREK
Então, hum, o que a Fiona falou de mim?


BURRO
O que você está me pedindo? Por que não 
você só vai perguntar a ela?

SHREK
O casamento! Nós nunca vamos conseguir 
Hora.

BURRO
Ha-ha-ha! Nunca tenha medo, por onde, há 
uma vontade, há um caminho e eu tenho um caminho. 
(apitos)

De repente, o dragão chega por cima e voa baixo o suficiente para 
eles podem subir.

SHREK
Burro?

BURRO
Acho que é apenas o meu magnetismo animal.


Os dois riem.

SHREK
Ah, vem cá, você. (dá a Burro um 
Noogie)

BURRO
Tudo bem, tudo bem. Não pegue tudo 
Slobbery. Ninguém gosta de beijo na bunda. Todo 
Certo, suba e segure firme. Fui para 
teve a chance de instalar os cintos de segurança 
ainda.

Eles sobem a bordo do dragão e ela decola para DuLoc.

DULOC - IGREJA

Fiona e Farquaad vão se casar. A cidade inteira está lá. 
O cara do cartão do prompter segura um cartão que diz 'Silêncio Reverenciado'.


SACERDOTE
Pessoas da DuLoc, nós nos reunimos aqui hoje 
para testemunhar a união...

FIONA
(de olho no sol poente) Micrômetro-

SACERDOTE
... do nosso novo rei...

FIONA
Com licença. Poderíamos simplesmente pular na frente 
ao "eu faço"?

FARQUAAD
(risos e depois moções para o sacerdote 
para se entregar a Fiona) Vá em frente.

PÁTIO

Alguns guardas estão se mexendo. De repente, o dragão pousa com 
um boom. Os guardas todos saem correndo.

BURRO
(para Dragão) Vá em frente, DIVIRTA-SE. 
Se precisarmos de você, eu apito. Que tal 
Isso? (ela acena e vai atrás dos guardas) 
Shrek, espere, espere! Espere um minuto! Você 
Quer fazer isso direito, não é?

SHREK
(à porta da Igreja) O que você está falando 
sobre?

BURRO
Há uma fila que você tem que esperar. O 
pregador vai dizer: "Fale agora ou 
guardai para sempre a vossa paz". É quando 
você diz: "Eu me oponho!"

SHREK
Não tenho tempo para isso!

BURRO
Ei, espere. O que é que está a fazer? Escutar 
Para mim! Olha, você ama essa mulher, não 
você?

SHREK
Sim.

BURRO
Você quer segurá-la?

SHREK
Sim.

BURRO
Por favor, ela?

SHREK
Sim!

BURRO
(cantando estilo James Brown) Então você 
cheguei, tenho que tentar um pouco de ternura. 
(normal) Os pintinhos adoram esse romântico 
porcaria!

SHREK
Está bem! Corte-o. Quando isso acontece 
cara dizer a linha?

BURRO
Temos que conferir.

DENTRO DA IGREJA

Enquanto o padre fala, vemos a sombra do Burro através de um dos 
Shrek o joga para cima para que ele possa ver.

SACERDOTE
E assim, pelo poder que me foi conferido...


Fora

SHREK
O que você vê?

BURRO
A cidade inteira está lá.

Dentro

SACERDOTE
Eu agora te pronuncio marido e mulher...


Fora

BURRO
Eles estão no altar.

Dentro

SACERDOTE
... rei e rainha.

Fora

BURRO
Mãe Fletcher! Ele já disse isso.


SHREK
Ah, pelo amor do Pete!

Ele corre para dentro sem pegar Burro, que bate forte no chão.


DENTRO DA IGREJA

SHREK
(correndo em direção ao alter) Eu me oponho!


FIONA
Shrek?

Toda a congregação suspira ao ver Shrek.

FARQUAAD
Ah, agora o que ele quer?

SHREK
(à congregação quando ele chega à frente 
da Igreja) Olá, pessoal. Havin' 
Um bom momento, não é? Eu amo DuLoc, primeiro 
de todos. Muito limpo.

FIONA
O que você está fazendo aqui?

SHREK
Realmente, é rude o suficiente estar vivo 
quando ninguém te quer, mas aparecendo 
não convidado para um casamento...

SHREK
Fiona! Preciso falar com você.

FIONA
Ah, agora quer conversar? É um pouco 
tarde para isso, então se você me desculpar 
- -

SHREK
Mas você não pode se casar com ele.

FIONA
E por que não?

SHREK
Porque- - Porque ele está apenas martelando 
você para que ele possa ser rei.

FARQUAAD
Ultrajante! Fiona, não o escute.


SHREK
Ele não é o seu verdadeiro amor.

FIONA
E o que você sabe sobre o amor verdadeiro?


SHREK
Bem, eu - - Uh - - Eu quero dizer - -

FARQUAAD
Ah, isso é precioso. O ogee caiu 
apaixonada pela princesa! Ah, bom 
Senhor. (risos)

O cara do cartão segura um cartão que diz 'Rir'. O 
Toda a congregação ri.

FARQUAAD
Um ogro e uma princesa!

FIONA
Shrek, isso é verdade?

FARQUAAD
Quem se importa? É um absurdo! Fiona 
meu amor, estamos a apenas um beijo de distância de 
o nosso "felizes para sempre". Agora me beija! 
(cutuca os lábios e se inclina em direção a ela, 
mas ela recua.)

FIONA
(olhando para o sol poente) "À noite 
de um jeito, de dia de outro". (para Shrek) 
Eu queria te mostrar antes.

Ela recua e, à medida que o sol se põe, ela se transforma em seu eu ogro. 
Ela dá a Shrek um sorriso de ovelha.

SHREK
Bem, uh, isso explica muita coisa. (Fiona; 
sorrisos)

FARQUAAD
Ugh! É nojento! Guardas! Guardas! 
Eu ordeno que você tire isso da minha vista 
agora! Obtenha-os! Adquira os dois!

Os guardas correm e separam Fiona e Shrek. Shrek luta 
eles.

SHREK
Não, não!

FIONA
Shrek!

FARQUAAD
Este hocus-pocus não altera nada. Este 
O casamento é obrigatório, e isso faz com que 
Eu rei! Ver? Ver?

FIONA
No, let go of me! Shrek!

SHREK
Não!

FARQUAAD
Não fiquem parados, seus idiotas.


SHREK
Saia do meu caminho! Fiona! Arrgh!

FARQUAAD
Vou fazer você se arrepender do dia em que nos conhecemos. 
Vou ver você desenhado e esquartejado! Você vai 
implore pela morte para salvá-lo!

FIONA
Não, Shrek!

FARQUAAD
(segure um punhal na garganta de Fiona) E 
Quanto a você, minha esposa...

SHREK
Fiona!

FARQUAAD
Vou mandar trancar você nessa torre 
para o resto dos seus dias! Eu sou rei!


Shrek consegue ficar com a mão livre e assobia.

FARQUAAD
Vou ter ordem! Terei perfeição! 
Eu terei - - (Burro e o dragão 
apareça e o dragão se incline e 
come Farquaad) Aaaah! Aah!

BURRO
Está bem. Ninguém se mexe. Eu tenho um dragão 
aqui, e eu não tenho medo de usá-lo. 
(O dragão ruge.) Eu sou um burro em 
a borda!

O dragão arrota e a coroa de Farquaad voa para fora de sua boca 
e cai no chão.

BURRO
Casamentos de celebridades. Eles nunca duram, 
será que sim?

A congregação aplaude.

BURRO
Vá em frente, Shrek.

SHREK
Uh, Fiona?

FIONA
Sim, Shrek?

SHREK
Eu - - Eu te amo.

FIONA
Realmente?

SHREK
Realmente, realmente.

FIONA
(sorrisos) Eu também te amo.

Shrek e Fiona se beijam. Thelonius pega uma das cartas e escreve 
'aw' nas costas e depois mostra para a congregação.


CONGREGAÇÃO
Aawww!

De repente, a magia do feitiço afasta Fiona. Ela está levantada 
no ar e ela paira lá enquanto a magia funciona 
dela.

SUSSURROS
"Até encontrar o primeiro beijo do amor verdadeiro 
e então tomar a verdadeira forma do amor. Tomar 
a verdadeira forma do amor. Assuma a verdadeira forma do amor".


De repente, os olhos de Fiona se arregalam. Ela é consumida pelo feitiço 
e depois é lentamente abaixado ao chão.

SHREK
(passando para ela) Fiona? Fiona. Are 
vc tudo bem?

FIONA
(de pé, ela ainda é um ogro) Poço 
Sim. Mas eu não entendo. Eu sou suposto 
para ser bonita.

SHREK
Mas você é linda.

Eles sorriem um para o outro.

BURRO
(risos) Eu esperava que fosse 
um final feliz.

Shrek e Fiona se beijam... e o beijo desvanece-se...

O Pântano

... o beijo de casamento. Shrek e Fiona agora estão casados. "Eu sou 
a Believer' de Smashmouth é jogado ao fundo. Shrek 
e Fiona se separa e corre através da multidão para sua espera 
carruagem. Que é feito de uma cebola gigante. Fiona joga seu buquê 
que tanto Cinderela quanto Branca de Neve tentam pegar. Mas acabam 
até entrar em uma briga de gato e assim o dragão pega o buquê 
em vez de. O homem do pão de gengibre foi consertado um pouco e agora 
tem uma perna e anda com uma bengala. Shrek e Fiona 
saia enquanto o resto dos convidados festejam e o Burro assume o controle 
cantando a música.

HOMEM DO PÃO DE GENGIBRE
Deus nos abençoe, a todos.

BURRO
(como ele fez de cantar e nós desvanecemos para 
Preto) Ah, isso é engraçado. Ah. Ah. Não posso 
respirar. Não consigo respirar.


THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)