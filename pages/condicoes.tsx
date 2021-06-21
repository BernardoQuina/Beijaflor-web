import { NextPage } from 'next'
import Link from 'next/link'
import router from 'next/router'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'

interface condiçõesProps {}

const condições: NextPage<condiçõesProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Condições gerais | Florista Beijaflor' />
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <button className='flex p-1' onClick={() => router.back()}>
          <ArrowDown
            tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
            strokeWidth={3}
          />
          <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
            voltar
          </h6>
        </button>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          Condições gerais
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          1. Condições gerais de utilização do site floristabeijaflor.com
        </h4>
        <p className='ml-4'>
          1.1. As presentes condições gerais regulam a utilização da página web
          floristabeijaflor.com ("site"), que Alice Mendes ("proprietária"), empresária
          indivídual, coloca à disposição dos utilizadores da internet, bem como os serviços de entrega.
        </p>
        <p className='ml-4 mt-3'>
          1.2. A utilização do site confere a quem o faça, a condição de
          Utilizador, doravante “Utilizador”.
        </p>
        <p className='ml-4 mt-3'>
          1.3 O acesso ou a utilização do site implica a aceitação plena e sem
          reservas pelo Utilizador das presentes condições gerais.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>2. Objeto</h4>
        <p className='ml-4'>
          2.1. Através do site, a proprietária proporciona aos Utilizadores o
          acesso e a utilização de diversos serviços e conteúdos, sendo estes
          colocados à disposição dos Utilizadores pela proprietária ou por
          terceiros Utilizadores do site e/ou terceiros fornecedores de serviços
          e/ou conteúdos.
        </p>
        <p className='ml-4 mt-3'>
          2.2. A proprietária reserva-se o direito de alterar unilateralmente,
          em qualquer momento e sem aviso prévio, a apresentação e configuração
          do site, assim como as presentes condições gerais. As alterações
          surtirão efeito a partir do momento em que são publicadas no site.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          3. Condições de acesso aos serviços
        </h4>
        <p className='ml-4'>
          3.1. A prestação do serviço do site não implica custos para os
          Utilizadores e não exige o seu registo prévio.
        </p>
        <p className='ml-4 mt-3'>
          3.2. No entanto, a proprietária reserva os serviços de encomenda,
          através do site e a consequente entrega, aos Utilizadores registados.
          O registo no site é feito mediante o preenchimento de um formulário ou
          através de Oauth via google ou facebook, os quais funcionam como
          identificação do Utilizador.
        </p>
        <p className='ml-4 mt-3'>
          3.3. A conta e a password de acesso ao site são apenas para uso
          exclusivo do Utilizador, sendo a confidencialidade e uso adequado da
          exclusiva responsabilidade do mesmo. As passwords dos utilizadores são
          encriptadas no momento de criação e o "hash" resultante é guardado na
          base de dados, não a password, sendo esse "hash" sempre comparado com
          outro criado também no momento de login. A proprietária não será
          responsável por qualquer dano ou prejuízo sofrido pelo Utilizador ou
          por terceiros, como resultado do uso da password por terceiros, seja
          com ou sem o seu conhecimento. Os Utilizadores registados em seu
          próprio nome não devem fornecer ou tornar públicos o nome da conta, ID
          ou password para outras pessoas, evitando assim qualquer uso não
          autorizado.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          4. Condições de utilização dos serviços
        </h4>
        <p className='ml-4'>
          4.1. O Utilizador compromete-se a utilizar o site e os seus conteúdos
          de forma diligente, legal, correta e ética, em conformidade com as
          presentes Condições Gerais, com as práticas normais e os bons
          costumes, e respeitando a ordem pública.
        </p>
        <p className='ml-4 mt-3'>
          4.2. Nestes termos, o Utilizador obriga-se, a título meramente
          indicativo e não exaustivo, a abster-se de:
        </p>
        <p className='ml-8 mt-2'>
          a) utilizar o site com fins ou efeitos ilícitos, contrários ao
          estabelecido nas presentes Condições Gerais, lesivos dos direitos e
          interesses de terceiros ou que de qualquer forma possam danificar,
          inutilizar, sobrecarregar ou deteriorar o site ou impedir a sua normal
          utilização por parte de outros Utilizadores;
          <br />
          <br />
          b) obter e de tentar obter informações, mensagens, gráficos, desenhos,
          arquivos de som e/ou imagem, fotografias, gravações, software e, em
          geral, qualquer tipo de material acessível através do site, empregando
          para o efeito meios ou procedimentos distintos daqueles que tenham
          sido postos à sua disposição;
          <br />
          <br />
          c) realizar, ou tentar realizar, atividades ilegais que atentem contra
          os direitos da proprietária, dos Utilizadores do site, dos restantes
          Utilizadores da Internet ou de quaisquer terceiros não discriminados
          anteriormente;
          <br />
          <br />
          d) praticar atos continuados e persistentes de provocação dirigidos a
          terceiros, tendo sido solicitada a sua interrupção, por estes ou pela
          proprietária;
          <br />
          <br />
          e) disponibilizar, transmitir, enviar, produzir ou reproduzir qualquer
          conteúdo que não tenha o direito de utilizar (incluindo, sem exclusão
          de quaisquer outros, informação confidencial obtida em função do seu
          cargo ou posto de trabalho);
          <br />
          <br />
          f) disponibilizar, transmitir, enviar, produzir ou reproduzir
          quaisquer conteúdos que infrinjam qualquer registo de patente, marca,
          segredo industrial, ou qualquer tipo de direito de autor de qualquer
          pessoa, entidade ou instituição;
          <br />
          <br />
          g) disponibilizar, transmitir, enviar, produzir ou reproduzir
          quaisquer conteúdos não solicitados incluindo, sem exclusão de
          quaisquer outros, material promocional, “junk mail”, “spamming”,
          “chain letters”, “pyramid schemes”;
          <br />
          <br />
          h) disponibilizar, transmitir, enviar, produzir ou reproduzir,
          propositada ou acidentalmente, qualquer material que contenha vírus de
          software ou qualquer outro código informático, ficheiros ou programas
          cujo objetivo, mesmo não atingido, seja o de interromper, destruir ou
          limitar a funcionalidade de qualquer computador ou sistema informático
          (hardware ou software) ou equipamento de telecomunicações;
          <br />
          <br />
          i) recolher, armazenar, disponibilizar, transmitir, enviar, produzir
          ou reproduzir sob qualquer formato, informações pessoais de terceiros;
          <br />
          <br />
          j) ainda que de uma forma meramente tentada, atacar a rede ou os
          sistemas da proprietária ou de terceiros, por meios que incluam, entre
          outros, mail bombing, hacking, obtenção de acesso root, tsunami, flood
          bots, nuke, flash, packet sniffers e flood pings ou outros tipos de
          atividades que provoquem quaisquer danos à proprietária ou a
          terceiros.
        </p>
        <p className='ml-4 mt-3'>
          4.3. Os Utilizadores e, em geral, as pessoas que se proponham a
          estabelecer um link que permita o acesso ao site a partir da sua
          página web deverão cumprir as seguintes condições:
        </p>
        <p className='ml-8 mt-2'>
          a) o link permitirá unicamente o acesso ao site mas não o poderá
          reproduzir por qualquer forma;
          <br />
          <br />
          b) não se criará um browser nem um border environment sobre as páginas
          do site;
          <br />
          <br />
          c) excetuando os sinais que façam parte do mesmo link, a página web em
          que se inclua o link não conterá nenhuma marca, nome comercial,
          denominação, logótipo, slogan ou outros sinais distintivos
          pertencentes à proprietária;
          <br />
          <br />
          d) a página web em que se estabeleça o link não conterá informações ou
          conteúdos ilícitos, contrários à moral e aos bons costumes geralmente
          aceites e à ordem pública, bem como conteúdos contrários a direitos de
          terceiros;
        </p>
        <p className='ml-4 mt-3'>
          4.4. O Utilizador ao efetuar uma encomenda, com destinatário certo, no
          site declara e aceita que:
        </p>
        <p className='ml-8 mt-2'>
          a) será preparado e entregue pela proprietária ou colaboradores
          produtos florais e/ou plantas bem como outros bem relacionados;
          <br />
          <br />
          b) se encontra capacitado para receber a entrega nos termos
          previamente definidos, sujeita a alteração pela proprietária e
          colaboradores;
          <br />
          <br />
          c) conhece o facto dos produtos vendidos no site poderem variar em
          termos de estrutura, conteúdo e cores utilizadas para a sua
          composição, variações que se devem à existência de flores / plantas de
          época, bem como à forma de arranjo mais indicada para cada caso;
          <br />
          <br />
          d) verificou que as informações de morada de entrega estão corretas e
          suficientes para a boa execução da entrega (incluindo código postal,
          telefone e nome de destinatário). Na falta destas informações o
          utilizador não poderá exigir responsabilidades nem à proprietária nem
          a colaboradores envolvidos pela não entrega da encomenda em
          conformidade com o pedido;
          <br />
          <br />
          e) deverá na data e hora de entrega, o destinatário ou uma pessoa que
          o represente, estar disponível para receber a encomenda;
          <br />
          <br />
          f) em caso de ausência ou impossibilidade de entrega na morada
          indicada, o responsável pela entrega poderá imediatamente utilizar o
          número de telefone do destinatário para garantir a entrega e, não
          sendo possível entrar em contacto com o destinatário, deixar uma
          mensagem no seu correio de voz ou enviar-lhe um SMS;
          <br />
          <br />
          g) se o destinatário recusar receber o produto floral, a encomenda é
          para todos os efeitos considerada entregue, não havendo lugar a
          qualquer devolução ao cliente, que será informado deste facto através
          do número de telefone que tenha indicado;
          <br />
          <br />
          h) para entregas em hospitais, hotéis, capelas funerárias, organismos
          públicos e locais com restrições de acesso ao público, o cliente
          deverá assegurar, antes de qualquer pedido, de que não existirão
          dificuldades especiais, uma vez que a recusa da entrega será para
          todos os efeitos considerada uma entrega realizada. Adicionalmente, a
          entrega da encomenda na receção destes locais terá sempre o valor de
          entrega ao próprio destinatário;
          <br />
          <br />
          j) no caso de um funeral ou de uma entrega em local público, conforme
          as circunstâncias (hospital, clínica, instalações funerárias, Igrejas,
          etc.), poderá não ser possível obter a assinatura do destinatário;
          <br />
          <br />
          k) no caso de um funeral, poderão ser alteradas, a pedido da família
          presente no local, a data e/ou o lugar de entrega do produto floral,
          caso em que não se poderá então considerar uma reclamação relativa a
          estas modificações. O mesmo será válido para qualquer modificação
          solicitada pela família do destinatário;
          <br />
          <br />
          l) após a entrega, o cliente dispõe de 14 dias para apresentar
          reclamações relativas à mesma;
          <br />
          <br />
          m) se o motivo da reclamação se referir à qualidade do produto ou à
          composição do mesmo, poderá apenas apresentar reclamação nas 24 horas
          seguintes à entrega, uma vez que, por se tratar de um produto
          perecível, a apresentação de reclamação em momento ulterior impede a
          verificação da qualidade ou da preparação original do produto floral
          em causa.;
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          5. Responsabilidade do utilizador
        </h4>
        <p className='ml-4'>
          5.1. As atividades descritas no ponto 4.2. supra são absoluta e
          completamente interditas ao Utilizador e constituem motivo para
          imediata suspensão ou cessação, parcial ou definitiva, temporária ou
          permanente, da utilização do site bem como, nos casos em que se
          aplicar, a eliminação de quaisquer registos ou ficheiros
          correspondentes ao respetivo Utilizador, sem qualquer aviso prévio e
          com efeito imediato.
        </p>
        <p className='ml-4 mt-3'>
          5.2. O Utilizador responderá por todos os danos e prejuízos, de
          qualquer natureza, que a proprietária possa sofrer, direta ou
          indiretamente, como consequência do incumprimento de qualquer uma das
          obrigações previstas nestas Condições Gerais ou na lei pela utilização
          do site.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          6. Responsabilidade da proprietária
        </h4>
        <p className='ml-4'>
          6.1. O site floristabeijaflor.com foi elaborado para a proprietária
          com informação proveniente de fontes internas e externas e é
          disponibilizado aos Utilizadores no seu estado atual, podendo conter
          imprecisões ou erros.
        </p>
        <p className='ml-4 mt-3'>
          6.2. A proprietária apenas se responsabilizam por danos que o
          Utilizador possa sofrer como consequência da utilização do site quando
          tais danos lhe possam ser imputáveis como resultado de uma sua atuação
          dolosa.
        </p>
        <p className='ml-4 mt-3'>
          6.3. A proprietária não se responsabiliza pelos danos ou prejuízos de
          qualquer índole que possam resultar, com carácter meramente
          enunciativo e não limitativo, de:
        </p>
        <p className='ml-8 mt-2'>
          a) Interferências, omissões, interrupções, vírus informáticos, avarias
          telefónicas e/ou desconexões de funcionamento operacional do sistema
          eletrónico, nos conteúdos ou em serviços prestados por terceiros,
          motivadas por causas alheias à proprietária, e que possam determinar a
          falta de disponibilidade ou de continuidade no funcionamento do site
          ou produzir alterações no sistema informático, em documentos
          eletrónicos ou ficheiros dos Utilizadores;
          <br />
          <br />
          b) Atrasos ou bloqueios no uso causados por deficiências ou
          sobrecargas de Internet ou em outros sistemas eletrónicos,
          designadamente, falhas no acesso a páginas web através do site ou dos
          serviços que lhe estão associados;
          <br />
          <br />
          c) Atuação de terceiros mediante intromissões ilegítimas fora do
          controlo do site e que não sejam atribuíveis à proprietária, incluindo
          intromissões provocadas pelo conhecimento que terceiros não
          autorizados possam vir a ter das condições, características e
          circunstâncias do uso que os Utilizadores fazem do site;
          <br />
          <br />
          d) Divergências de informação, documentação e/ou demais conteúdo do
          site, que possam existir entre a versão eletrónica e a versão
          impressa, e bem assim, defraudação da expectativa de utilidade que os
          Utilizadores pudessem ter atribuído ao site;
          <br />
          <br />
          e) Falta de veracidade, atualização e precisão dos conteúdos, dados ou
          informações de qualquer natureza, incluindo os relativos a ofertas,
          produtos ou serviços, preços, características e quaisquer outros dados
          e informações relevantes, relativos a produtos e serviços oferecidos
          através do site por terceiros fornecedores de produtos ou serviços,
          nem a respeito dos conteúdos, dados ou informações que sejam
          proporcionados a partir das páginas web dos referidos terceiros;
          <br />
          <br />
          f) Transmissão, difusão, armazenamento, disponibilização, receção,
          obtenção ou acesso aos conteúdos;
          <br />
          <br />
          g) Possíveis erros ou deficiências de segurança que possam produzir-se
          pela utilização, por parte do Utilizador, de um browser de uma versão
          desatualizada ou insegura, assim como pela ativação dos dispositivos
          de conservação de passwords ou códigos de identificação do Utilizador
          no browser, ou pelos danos, erros ou inexatidões que possam resultar
          do mau funcionamento do mesmo;
          <br />
          <br />
          h) Funcionamento, disponibilidade e acessibilidade dos sites para que
          remete através de links, continuidade de informação, conteúdos e
          serviços existentes nesses sites, qualidade, licitude, fiabilidade e
          utilidade da informação, conteúdos e serviços existentes nesses sites.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          7. Propriedade intelectual e industrial
        </h4>
        <p className='ml-4'>
          7.1. Todos os conteúdos deste site (incluindo, sem carácter
          limitativo, textos, gráficos, logótipos, ícones, bases de dados,
          imagens, arquivos de texto, áudio, vídeo e software), bem como o
          software utilizado no site são propriedade da proprietária, bem como
          dos seus fornecedores de conteúdos e softwares.
        </p>
        <p className='ml-4 mt-3'>
          7.2. Toda a informação, conteúdos, software e materiais incluídos no
          site e/ou nos serviços estão protegidos pelas normas nacionais e
          internacionais de propriedade industrial e intelectual. Os
          Utilizadores não podem copiar ou distribuir estes materiais sem o
          consentimento do proprietário desses direitos. Os Utilizadores podem
          utilizar estes materiais para uso pessoal, desde que não modifiquem os
          materiais e não eliminem a informação sobre os direitos de autor e
          outros direitos de propriedade aplicáveis, assumindo plena
          responsabilidade pela utilização e armazenamento das informações por
          si recebidas.
        </p>
        <p className='ml-4 mt-3'>
          7.3. A reprodução, alteração, cópia, uso, distribuição,
          comercialização, comunicação pública ou qualquer outra utilização da
          informação contida no site (incluindo o seu próprio desenho,
          configuração e forma de apresentação do site) que se realize sem
          autorização da proprietária, constitui uma infração da legislação
          vigente em matéria de propriedade intelectual.
        </p>
        <p className='ml-4 mt-3'>
          7.4. Em nenhum caso se deverá entender que se concede licença ou se
          renuncia, transmite ou cede, total ou parcialmente, os supra referidos
          direitos, sem a prévia autorização expressa da proprietária ou dos
          respetivos titulares.
        </p>
        <p className='ml-4 mt-3'>
          7.5. Por outro lado, em nenhum caso se deverá entender que se confere
          algum direito, e, em especial, algum direito de alteração, exploração,
          reprodução, distribuição ou comunicação pública sobre os ditos
          conteúdos sem a prévia autorização expressa da proprietária ou dos
          respetivos titulares.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          8. Dados pessoais e política de privacidade
        </h4>
        <p className='ml-4'>
          Quanto ao tratamento de dados pessoais e à política de privacidade na
          utilização do site e dos serviços de encomenda, aplica-se o presente
          na seguinte pagina do site:
          <Link href='/privacidade'>
            <a className='ml-8 text-green-medium underline'>
              floristabeijaflor.com/privacidade
            </a>
          </Link>
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>9. Cookies</h4>
        <p className='ml-4'>
          O site e algumas páginas web acessíveis através do site utilizam
          cookies. Saiba mais:
          <Link href='/cookies'>
            <a className='ml-8 text-green-medium underline'>
              floristabeijaflor.com/cookies
            </a>
          </Link>
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          10. Ligações a páginas web de terceiros
        </h4>
        <p className='ml-4'>
          A proprietária disponibiliza no site ligações a páginas web de
          terceiros que podem ter interesse para os Utilizadores. A proprietária
          não tem, neste caso, qualquer controlo ou responsabilidade sobre a
          disponibilidade ou os conteúdos dessas páginas web. É da
          responsabilidade dos Utilizadores tomar conhecimento da política de
          privacidade e dos termos e condições de utilização das referidas
          páginas web.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>11. Duração e cessação</h4>
        <p className='ml-4'>
          A prestação do site terá, em princípio, uma duração indeterminada. A
          proprietária poderá terminar ou suspender a prestação do site, a todo
          o momento. Sempre que possível, a proprietária comunicará a cessação
          ou suspensão da prestação do site.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4'>
          11. Lei aplicável e jurisdição
        </h4>
        <p className='ml-4'>
          As presentes condições gerais regem-se pela Lei portuguesa. Para a
          resolução de quaisquer conflitos emergentes das prestações de serviços
          objeto das presentes Condições Gerais será competente o foro da
          comarca de Lisboa, com expressa renúncia a qualquer outro.
        </p>
      </div>
    </Layout>
  )
}

export default condições
