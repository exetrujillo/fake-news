// src/lib/data.tsx
import React from 'react';
import ConceptualizationDiagram from '@/components/visuals/ConceptualizationDiagram';
import KeyFeatures from '@/components/visuals/KeyFeatures';
import CausesEcosystem from '@/components/visuals/CausesEcosystem';
import InfluenceMechanisms from '@/components/visuals/InfluenceMechanisms';
import MainActorsFlow from '@/components/visuals/MainActorsFlow';
import OtherActorsGrid from '@/components/visuals/OtherActorsGrid';
import EffectsImpact from '@/components/visuals/EffectsImpact';
import SocialRelevance from '@/components/visuals/SocialRelevance';

export const teoriaData = [
  {
    id: "conceptualizacion",
    title: "Conceptualización",
    content: (
      <>
        <ConceptualizationDiagram />
        <p className="mb-4">
          Las fake news (del inglés “noticias falsas”), son un concepto relativamente nuevo, de hecho es difícil encontrar muchas noticias que mencionen este término antes de 2016, tiempo en el que Trump se encontraba en campaña política y al cual se le atribuye la popularización del término. Fake new se suele tomar como un concepto indistinguible de desinformación, o de misinformation (del inglés “información errónea”).
        </p>
        <p className="mb-4">
          La misinformation refiere a la difusión de información falsa sin una intencionalidad de engañar, una información “meramente falsa pero [que] no pretende perjudicar” (Greifeneder et al., 2020. p. 2). Por su parte, “Los contenidos falsos y con intención de perjudicar se consideran desinformación e incluyen mentiras malintencionadas, contenidos inventados y campañas de manipulación.” (Wardle, 2018, p. 954). Finalmente, las fake news serían una forma específica de desinformación que se intenta presentar en el formato de una noticia genuina. Autores como Allcott y Gentzkow (2017) las caracterizan como “artículos periodísticos que son intencionada y verificablemente falsos, y que podrían inducir a error a los lectores.” (p. 213).
        </p>
        <KeyFeatures />
        <p className="mb-4">
          En suma, hay ciertos rasgos característicos de las fake news que son remarcables: su propósito definido de engañar y una apariencia de legitimidad. En este sentido, estas “noticias” no son solo un problema relativo a la veracidad o no de la información, sino que también son un medio para influir sobre individuos y grupos sociales. La influencia social y la susceptibilidad son estudiados por la psicología social, por ejemplo, Jorge Mendoza García (2013) desarrolla los conceptos de “influencia de la mayoría” (donde los individuos ajustan sus comportamientos para “encajar” con el grupo mayoritario) y el de “influencia de la minoría” (que puede llevar a cambios más profundos, tiende a ser más indirecta y puede generar cambios a más largo plazo).
        </p>
      </>
    ),
  },
  {
    id: "causas",
    title: "Causas",
    content: (
      <>
        <p className="mb-4">
          Las causas detrás de la propagación y aceptación de estas noticias falsas son tanto y más complejas que los motivos por los cuales un individuo o grupo social comienza a reproducirlas inicialmente. Además, podríamos decir que existen condiciones que no necesariamente son causas directas de la propagación de las fake news, pero que sí favorecen su extensión, tales como el desarrollo de las plataformas digitales, las Tecnologías de la Información y las Comunicaciones (TIC) y los algoritmos de las redes sociales, que se pueden considerar como un “caldo de cultivo” o un ecosistema propicio para la propagación (Sun, 2023; Theodorakopoulos, 2025).
        </p>
        <CausesEcosystem />

        <p className="mb-4">
          Entre las causas y condicionantes de este fenómeno podemos enumerar distintos mecanismos de influencia social: la influencia mayoritaria o conformidad (Ferreira & Matoso, 2022), que puede llevar a gente a compartir noticias falsas solo porque son ampliamente difundidas; la explotación de las rutas periféricas de la persuasión (Petty & Cacioppo, 1981), apelando a emociones fuertes, jugando con el sentido de urgencia y buscando el compromiso de un individuo o grupo social para reforzar su creencia; sesgos cognitivos (Blanco-Alfonso et al., 2024) como el sesgo de confirmación o el sesgo de “heurística de disponibilidad”, el de anclaje, el de error fundamental de atribución, el efecto Dunning-Kruger o la ilusión de verdad; además podemos mencionar causas asociadas a la influencia grupal y a la identidad social, con una tendencia a favorecer la información que refuerza la imagen de los grupos sociales a los que pertenecemos o con los que nos identificamos (y a denigrar la de otros), las llamadas “cámaras de eco” (Del Vicario et al., 2016) y las burbujas de filtro en redes sociales (Maia et al., 2021).
        </p>
        <InfluenceMechanisms />
      </>
    ),
  },
  {
    id: "actores",
    title: "Actores",
    content: (
      <>
        <p className="mb-4">
          Podemos mencionar 3 grupos de actores principales en el fenómeno de las fake news. En primer lugar los creadores de estas, quienes por diversos motivos (políticos, económicos, ideológicos, etc.) generan información falsa deliberadamente, a menudo con el objetivo de ejercer influencia social sobre individuos y grupos. Luego los diseminadores o divulgadores, quienes propagan las fake news (desde las plataformas digitales con sus algoritalos, pasando por bots, hasta individuos y colectivos), actuando como fuentes o canales de esta influencia. Finalmente los consumidores de estas noticias falsas, que reciben la información y pueden ser más o menos susceptibles a ser influenciados según sus contextos.
        </p>
        <MainActorsFlow />

        <p className="mb-4">
          Además de estos tres grandes grupos se pueden considerar los “verificadores” como Fact Check, los medios de comunicación tradicionales (que a veces también se ven envueltos en la propagación), académicos o investigadores, gobiernos y quienes regulan las políticas públicas.
        </p>
        <OtherActorsGrid />
      </>
    )
  },
  {
    id: "efectos",
    title: "Efectos",
    content: (
        <>
            <p className="mb-4">
              A nivel individual, hay varios efectos psicosociales que pueden surgir por el consumo de fake news, desde impactos emocionales (como miedo, ira o ansiedad) hasta la modificación de creencias y actitudes hacia diversos temas de opinión pública o hacia otros grupos sociales. Además se pueden presentar falsos recuerdos y alterar comportamientos.
            </p>
            <p className="mb-4">
              Las fake news no sólo son más aceptadas por influencia de orientaciones políticas concretas (Gupta et al. 2023) sino que también, a nivel societal o estructural, influyen en los resultados electorales (Traberg, 2024), además de la opinión pública, en el aumento de la agresión comunicativa y son un factor importante de polarización social (Gjerazi & Skana, 2023). Además, múltiples estudios muestran los impactos perjudiciales en el plano mental/emocional y en la salud pública, con varios ejemplos enmarcados en la pandemia del Covid-19 (Apuke, 2021; Chen, 2021; Hossain, 2023; Wang, 2022). Finalmente, es importante notar que con una constante exposición a información falsa, y por tanto contradictoria con otra información verídica, se genera a su vez una constante dificultad para poder discernir socialmente sobre lo que es verdad y lo que es falso, lo que puede consecuentemente llevar a una especie de nihilismo cognoscitivo social.
            </p>
            <EffectsImpact />
        </>
    )
  },
  {
    id: "relevancia",
    title: "Relevancia Social",
    content: (
        <>
            <p className="mb-4">
              Cuanto más crecen las plataformas digitales, cuanto más necesarias se hacen las redes sociales digitales en nuestra vida cotidiana, cuanto más se integran como dinámicas obligatorias en ámbitos como el trabajo y la educación, tanto más relevante se hace el problema de las fake news en la sociedad actual.
            </p>
            <p className="mb-4">
              En particular, en el contexto de la psicología social, podemos comprender el origen, la propagación y efectos de las fake news en las personas mediante el concepto de influencia social. Este fenómeno social es de suma relevancia para la capacidad de las personas de tomar decisiones informadas, mantener una opinión pública democrática y la cohesión social, desarrollando estrategias de mitigación efectivas de la desinformación en nuestras sociedades.
            </p>
            <SocialRelevance />
        </>
    )
  },
  {
    id: "referencias",
    title: "Referencias",
    content: (
      <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
        <li>
          Allcott, H., & Gentzkow, M. (2017). Social Media and Fake News in the 2016 Election. <i>Journal of Economic Perspectives, 31(2)</i>, 211–236. <a href="https://doi.org/10.1257/jep.31.2.211" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1257/jep.31.2.211</a>
        </li>
        <li>
          Apuke, O., & Omar, B. (2021). Fake news and COVID-19: Modelling the predictors of fake news sharing among social media users. <i>Telematics and Informatics, 56</i>, 101475. <a href="https://doi.org/10.1016/j.tele.2020.101475" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.tele.2020.101475</a>
        </li>
        <li>
          Blanco-Alfonso I., Solano-Altaba M. y Rodríguez-Luque C. (2024). Actitudes, sesgos cognitivos y sentimientos ante la desinformación a través de redes sociales. <i>Estudios sobre el Mensaje Periodístico, 30(3)</i>, 467-475. <a href="https://doi.org/10.5209/emp.96800" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.5209/emp.96800</a>
        </li>
        <li>
          Chen, Q., Zhang, Y., Evans, R., & Min, C. (2021). Why Do Citizens Share COVID-19 Fact-Checks Posted by Chinese Government Social Media Accounts? The Elaboration Likelihood Model. <i>International Journal of Environmental Research and Public Health, 18(19)</i>, 10058. <a href="https://doi.org/10.3390/ijerph181910058" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.3390/ijerph181910058</a>
        </li>
        <li>
          Del Vicario, M., Vivaldo, G., Bessi, A., Zollo, F., Scala, A., Caldarelli, G., & Quattrociocchi, W. (2016). Echo chambers: Emotional contagion and group polarization on Facebook. <i>Scientific Reports, 6</i>. <a href="https://doi.org/10.48550/arXiv.1607.01032" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.48550/arXiv.1607.01032</a>
        </li>
        <li>
          Ferreira, M. C., & Matoso, M. C. (2022). Fake news and her behavior: the social influence for the acceptability of false content. <i>Research, Society and Development, 11(5)</i>, e55311528132. <a href="https://doi.org/10.33448/rsd-v11i5.28132" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.33448/rsd-v11i5.28132</a>
        </li>
        <li>
          Garrett, R. K. (2017). The “echo chamber” distraction: Disinformation campaigns are the problem, not audience fragmentation. <i>Journal of Applied Research in Memory and Cognition, 6(4)</i>, 370–376. <a href="https://doi.org/10.1016/j.jarmac.2017.09.011" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.jarmac.2017.09.011</a>
        </li>
        <li>
          Gjerazi, B., & Skana, P. (2023). Impact of politically motivated fake news on public opinion: A case study of deliberate dissemination of disinformation. <i>Balkan Social Science Review, 22(22)</i>, 365-382. <a href="https://doi.org/10.46763/BSSR232222365g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.46763/BSSR232222365g</a>
        </li>
        <li>
          Greifeneder, R., Jaffe, M., Newman, E., & Schwarz, N. (Eds.). (2020). <i>The Psychology of Fake News: Accepting, Sharing, and Correcting Misinformation (1st ed.)</i>. Routledge. <a href="https://doi.org/10.4324/9780429295379" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.4324/9780429295379</a>
        </li>
        <li>
          Gupta, M., Dennehy, D., Parra, C. M., Mäntymäki, M., & Dwivedi, Y. K. (2023). Fake news believability: The effects of political beliefs and espoused cultural values. <i>Information and Management, 60(2)</i>. <a href="https://doi.org/10.1016/j.im.2022.103745" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.im.2022.103745</a>
        </li>
        <li>
          Hossain, I. & Haque, A. (2023). A Case Study on the Spread of Fake News by Social Media in the COVID-19 Era in Bangladesh. <a href="https://doi.org/10.21203/rs.3.rs-2474926/v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.21203/rs.3.rs-2474926/v1</a>
        </li>
        <li>
          Maia, H., Ferreira, S., & Martins, M. (2021). Adaptive network approach for emergence of societal bubbles. <i>Physica A: Statistical Mechanics and Its Applications, 572</i>. <a href="https://doi.org/10.1016/j.physa.2020.125588" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.physa.2020.125588</a>
        </li>
        <li>
          Mendoza, J. (2013) Influencia Social. En <i>Introducción a la Psicología Social</i> (pp. 109-135). Paidós.
        </li>
        <li>
          Petty, R. & Cacioppo, J. (1981). <i>Attitudes and Persuasion: Classic and Contemporary Approaches</i> (pp. 251-292). W.C. Brown Co. Publishers.
        </li>
        <li>
          Sun, H. (2023). Regulating Algorithmic Disinformation. <i>The Columbia Journal of Law & the Arts, 46</i>. <a href="https://doi.org/10.52214/jla.v46i3.11237" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.52214/jla.v46i3.11237</a>
        </li>
        <li>
          Theodorakopoulos, L., Theodoropoulou, A., & Klavdianos, C. (2025). Interactive Viral Marketing Through Big Data Analytics, Influencer Networks, AI Integration, and Ethical Dimensions. <i>Journal of Theoretical and Applied Electronic Commerce Research, 20(2)</i>, 115. <a href="https://doi.org/10.3390/jtaer20020115" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.3390/jtaer20020115</a>
        </li>
        <li>
          Traberg, C., Harjani, T., Roozenbeek, J. & van der Linden, S. (2024). The persuasive effects of social cues and source effects on misinformation susceptibility. <i>Scientific Reports, 14</i>. <a href="https://doi.org/10.1038/s41598-024-54030-y" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1038/s41598-024-54030-y</a>
        </li>
        <li>
          Wang, X., Chao, F., Yu, G., & Zhang, K. (2022). Factors influencing fake news rebuttal acceptance during the COVID-19 pandemic and the moderating effect of cognitive ability. <i>Computers in human behavior, 130</i>, 107174. <a href="https://doi.org/10.1016/j.chb.2021.107174" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.chb.2021.107174</a>
        </li>
        <li>
          Wardle, C. (2018). The Need for Smarter Definitions and Practical, Timely Empirical Research on Information Disorder. <i>Digital Journalism, 6(8)</i>, 951–963. <a href="https://doi.org/10.1080/21670811.2018.1502047" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1080/21670811.2018.1502047</a>
        </li>
      </ol>
    ),
  },
];