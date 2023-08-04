import { Logo } from "../../../shared/components/logo/logo.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { TERMS_OF_USE } from "../../../shared/constants/terms-of-use";

import {
  Content,
  Title,
  TitleSection,
  Text,
  ContainerTerms,
  Scroll,
} from "./terms-of-use.styles";

const TermsOfUse: React.FC = () => {
  return (
    <DefaultBackgorund>
      <Scroll>
        <Content>
          <Logo notLogo isOnBack />
          <Title type="H2">
            Termos de Uso e Política de Privacidade do Aplicativo "With US"
          </Title>

          <ContainerTerms>
            <TitleSection type="H3">1. Introdução</TitleSection>
            <Text type="P1">
              Bem-vindo ao aplicativo "With US", uma rede social com o objetivo
              de ajudar as pessoas a desabafarem. O Aplicativo é fornecido pela
              MoraesDev, e ao acessá-lo e utilizá-lo, você concorda com os
              termos e condições estabelecidos neste Termo de Uso.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">2. Uso do Aplicativo</TitleSection>
            <Text type="P1">
              a. Uso autorizado: O Aplicativo pode ser usado apenas para fins
              legais e de acordo com este Termo. Ao acessar e utilizar o
              Aplicativo, você garante que tem idade legal para celebrar
              contratos e concorda em cumprir todas as leis e regulamentações
              aplicáveis.{"\n"}
              {"\n"}b. EULA: O uso do Aplicativo está sujeito à aceitação da
              End-User License Agreement ("EULA"). A EULA regula o uso do
              Aplicativo e estabelece os termos e condições específicos que se
              aplicam ao uso do mesmo.{"\n"}
              {"\n"}c. Contas: Para utilizar o Aplicativo, você precisará criar
              uma conta. Você é responsável por manter a confidencialidade de
              suas credenciais de login e é totalmente responsável por todas as
              atividades que ocorrem em sua conta. A Empresa não será
              responsável por quaisquer perdas ou danos resultantes do uso não
              autorizado de sua conta.{"\n"}
              {"\n"}d. Posts e comentários: Ao utilizar o Aplicativo, você
              concorda em não publicar, transmitir ou compartilhar qualquer
              conteúdo que possa ser considerado difamatório, obsceno, abusivo,
              ofensivo, discriminatório, ilegal ou que viole os direitos de
              terceiros. A Empresa se reserva o direito de remover qualquer
              conteúdo que viole este Termo, a critério exclusivo da Empresa.
              Além disso, você concorda em não usar o Aplicativo para qualquer
              finalidade ilegal, incluindo, mas não se limitando a, invadir a
              privacidade de terceiros, disseminar malware ou outras ameaças de
              segurança, e enviar spam ou qualquer outra forma de mensagem não
              solicitada.
              {"\n"}
              {"\n"}e. Propriedade intelectual: Todos os direitos de propriedade
              intelectual relacionados ao Aplicativo, incluindo, mas não se
              limitando a, marcas comerciais, direitos autorais e patentes,
              pertencem exclusivamente à Empresa. Você concorda em não
              reproduzir, distribuir, modificar ou criar obras derivadas do
              Aplicativo sem a permissão expressa da Empresa.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">
              3. Limitação de responsabilidade
            </TitleSection>
            <Text type="P1">
              A Empresa não será responsável por qualquer dano ou prejuízo
              decorrente do uso do Aplicativo, incluindo, mas não se limitando
              a, perda de lucros, danos indiretos, especiais, incidentais ou
              consequentes. Além disso, a Empresa não garante que o Aplicativo
              será livre de erros, interrupções, vírus ou outros componentes
              prejudiciais, e não será responsável por quaisquer danos ou
              prejuízos resultantes de tais eventos.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">4. Restrições de Uso</TitleSection>
            <Text type="P1">
              a. O usuário concorda em utilizar o Aplicativo somente para fins
              pessoais e não comerciais.{"\n"}
              {"\n"}b. O usuário concorda em não utilizar o Aplicativo para
              enviar spam ou outras formas de comunicação não solicitadas.{"\n"}
              {"\n"}c. O usuário concorda em não utilizar o Aplicativo para
              postar ou transmitir qualquer conteúdo ilegal, prejudicial,
              ameaçador, abusivo, ofensivo, difamatório, vulgar, obsceno,
              sexualmente explícito ou censurável.{"\n"}
              {"\n"}d. O usuário concorda em não utilizar o Aplicativo para
              postar ou transmitir qualquer conteúdo que infrinja os direitos
              autorais, marcas registradas, patentes ou outros direitos de
              propriedade intelectual de terceiros.{"\n"}
              {"\n"}e. O usuário concorda em não utilizar o Aplicativo para
              postar ou transmitir qualquer vírus, spyware, malware ou outro
              código malicioso.{"\n"}
              {"\n"}f. O usuário concorda em não utilizar o Aplicativo para
              violar qualquer lei ou regulamento aplicável.{"\n"}
              {"\n"}g. A Empresa se reserva o direito de remover qualquer
              conteúdo que viole os termos deste Acordo, a seu critério
              exclusivo.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">5. Moderação de Conteúdo</TitleSection>
            <Text type="P1">
              a. A Empresa se reserva o direito de moderar e remover qualquer
              conteúdo publicado pelos usuários que violem este Termo ou a
              legislação aplicável. A Empresa não será responsável por quaisquer
              danos ou prejuízos decorrentes da remoção de conteúdo considerado
              ofensivo ou ilegal.{"\n"}
              {"\n"}b. A Empresa se reserva o direito de suspender ou encerrar a
              conta de qualquer usuário que viole este Termo ou a legislação
              aplicável, sem aviso prévio.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">6. Privacidade</TitleSection>
            <Text type="P1">
              a. A privacidade dos usuários é extremamente importante para a
              Empresa. Por isso, a Empresa coleta, usa e protege as informações
              pessoais dos usuários de acordo com as leis de proteção de dados
              aplicáveis. A Política de Privacidade do Aplicativo descreve como
              a Empresa coleta, usa, armazena e protege as informações pessoais
              dos usuários, incluindo informações sobre o nome, e-mail e foto de
              perfil do usuário.{"\n"}
              {"\n"}b. A Empresa coleta o nome e e-mail do usuário ao criar uma
              conta para identificar e contatar o usuário. A Empresa também dá a
              opção do usuário escolher uma foto de sua galeria para deixar como
              foto de perfil.{"\n"}
              {"\n"}c. O usuário pode, a qualquer momento, excluir a sua conta
              no Aplicativo, juntamente com todas as informações pessoais que
              foram coletadas.{"\n"}
              {"\n"}d. Além disso, a Empresa coleta informações técnicas sobre o
              dispositivo do usuário, como o tipo de dispositivo e o ID do
              dispositivo, para permitir a entrega de notificações push e
              melhorar a experiência do usuário.{"\n"}
              {"\n"}e. Ao utilizar o Aplicativo, o usuário concorda com os
              termos da Política de Privacidade da Empresa. Se o usuário não
              concordar com a Política de Privacidade, ele não deve utilizar o
              Aplicativo.{"\n"}
              {"\n"}f. Para mais informações sobre a coleta, uso e proteção de
              informações pessoais dos usuários, consulte a Política de
              Privacidade do Aplicativo.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">7. Isenção de Garantias</TitleSection>
            <Text type="P1">
              O Aplicativo é fornecido "no estado em que se encontra" e sem
              garantias de qualquer tipo, expressas ou implícitas, incluindo,
              mas não se limitando a, garantias de comerciabilidade, adequação a
              uma finalidade específica e não violação. A Empresa não garante
              que o Aplicativo atenderá aos seus requisitos ou que o uso do
              Aplicativo será ininterrupto, seguro ou livre de erros.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">8. Lei Aplicável</TitleSection>
            <Text type="P1">
              Este Termo será regido e interpretado de acordo com as leis do
              país em que a Empresa está sediada, sem considerar os princípios
              de conflito de leis. Qualquer disputa decorrente deste Termo será
              submetida à jurisdição exclusiva dos tribunais competentes desse
              país.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">9. Disposições Gerais</TitleSection>
            <Text type="P1">
              a. Este Termo de Uso representa o acordo integral entre o usuário
              e a Empresa com relação ao uso do Aplicativo e substitui todos os
              acordos anteriores e contemporâneos e comunicações, sejam verbais
              ou escritas, entre o usuário e a Empresa.{"\n"}
              {"\n"}b. Este Termo de Uso será regido e interpretado de acordo
              com as leis do país onde a Empresa está sediada, sem levar em
              conta as disposições relativas a conflitos de leis. Qualquer ação
              legal ou processo relacionado a este Acordo será submetido à
              jurisdição exclusiva dos tribunais competentes localizados na
              jurisdição da Empresa.{"\n"}
              {"\n"}c. A Empresa não será responsável por falhas ou atrasos no
              desempenho resultantes de circunstâncias fora do controle razoável
              da Empresa, incluindo, mas não se limitando a, atos de Deus,
              incêndios, inundações, terremotos, tumultos, atos de terrorismo,
              guerras, embargos, bloqueios, greves, interrupções de fornecimento
              de energia, falhas de rede ou de servidor, ou outras interrupções
              de serviços de terceiros.{"\n"}
              {"\n"}d. A falha da Empresa em fazer cumprir qualquer direito ou
              disposição deste Acordo não constituirá uma renúncia a tal direito
              ou disposição.{"\n"}
              {"\n"}e. Se qualquer disposição deste Acordo for considerada
              inválida ou inexequível, tal disposição será limitada ou eliminada
              na medida mínima necessária, e as disposições restantes deste
              Acordo permanecerão em pleno vigor e efeito.{"\n"}
              {"\n"}f. O usuário não poderá ceder ou transferir seus direitos ou
              obrigações sob este Acordo sem o consentimento prévio por escrito
              da Empresa.{"\n"}
              {"\n"}g. A Empresa se reserva o direito de modificar este Acordo a
              qualquer momento, a seu critério exclusivo. As modificações
              entrarão em vigor imediatamente após a publicação no Aplicativo. O
              uso continuado do Aplicativo após tais modificações constituirá a
              aceitação do usuário a tais modificações.
            </Text>
          </ContainerTerms>

          <ContainerTerms>
            <TitleSection type="H3">10. Aceitação dos Termos</TitleSection>
            <Text type="P1">
              Ao utilizar o Aplicativo, você reconhece que leu e compreendeu
              este Termo de Uso e concorda em cumprir todos os seus termos e
              condições. Se você não concordar com este Termo, não utilize o
              Aplicativo.
            </Text>
          </ContainerTerms>
        </Content>
      </Scroll>
    </DefaultBackgorund>
  );
};

export { TermsOfUse };
