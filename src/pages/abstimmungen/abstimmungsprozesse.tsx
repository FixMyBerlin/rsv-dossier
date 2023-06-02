import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { TextWithImage } from '~/components/Layout/ContentSection';
import { ButtonLink } from '~/components/Links/ButtonLink';

const ResearchWorkPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo
        title="Abstimmungsprozesse"
        description="Studienarbeit – Verbesserung von internen Abstimmungsprozessen bei RSV-Planungen."
      />
      <TextWithImage
        imageCredits=""
        title="Verbesserung von internen Abstimmungsprozessen bei
            RSV-Planungen"
        caption="Studienarbeit"
        image={
          <StaticImage
            src="./../index/fahrrad.jpg"
            alt="Zeigt eine Karte mit einer Planung"
            className="h-96 object-contain lg:h-full"
          />
        }
      >
        <>
          <p>
            <strong>Autorinnen: Kuß, Noemi und Wening, Clara</strong>
          </p>
          <br />
          <p>
            <i>Communication is key</i> – doch im Gegensatz zum Thema der
            zivilgesellschaftlichen Kommunikation stehen interne
            Kommunikationsprozesse zwischen den verschiedenen
            Planungsakteur:innen bisher selten und oftmals nur oberflächlich im
            Fokus wissenschaftlicher Diskurse. Dabei stellt Kommunikation
            insbesondere im Kontext komplexer Verkehrsplanungsvorhaben aufgrund
            der Vielzahl und Diversität der involvierten Akteur:innen sowie
            wachsender Anforderungen an ihre interdisziplinäre und räumlich
            übergreifende Zusammenarbeit eine essentielle Voraussetzung der
            Planung dar. Als wesentliches Instrumentarium des
            Akteur:innenzusammenspiels werden im Rahmen der Arbeit
            Abstimmungsprozesse identifiziert, die im Kontext des derzeit
            bundesweit präsenten Vorhabens der Errichtung von
            Radschnellverbindungen beleuchtet werden. Dieses ist aufgrund der
            Neuartigkeit und Komplexität der Infrastruktur mit einem
            umfangreichen Planungsprozess verbunden, der besonders viele
            Akteur:innen involviert und folglich einen erheblichen
            Kommunikations- und Abstimmungsaufwand erfordert. Mit Fokus auf die
            Berliner RSV-Planungspraxis untersuchen die Autor:innen auf
            Grundlage qualitativer Expert:inneninterviews das Zusammenwirken des
            planungsinternen Akteur:innenspektrums im Rahmen einer
            Akteur:innenanalyse, um schließlich Erkenntnisse zur Verbesserung
            diesbezüglicher Abstimmungsprozesse abzuleiten. Dabei legt die
            Analyse neben einer Betrachtung von Handlungsmustern und
            Wirkungsfeldern auch spezifische Rahmenbedingungen, die das Handeln
            der Akteur:innen beeinflussen, dar. So werden zum Beispiel die
            Auswirkungen von planerischen, gesellschaftlichen oder politischen
            Leitvorstellungen sowie weiteren dynamischen Einflussfaktoren wie
            zeitliche und personelle Ressourcen auf die Qualität der
            Abstimmungen sichtbar. Wenn zwar insgesamt die hohe Bedeutung von
            Kommunikation im Rahmen der Analyse bestätigt wird, wird
            gleichermaßen deutlich, dass die kommunikative Konzeption und
            Ausgestaltung der Berücksichtigung wesentlicher Anforderungen
            bedarf, um eine qualitativ hochwertige Kommunikation zu
            gewährleisten. So ist beispielsweise eine flexible
            Kommunikationsstrategie, die auf sich wandelnde Rahmenbedingungen
            frühzeitig und bedarfsgerecht reagieren kann, unabdingbar. Eine
            Synergie aus Theorie und Praxis ermöglicht abschließend die
            kontextualisierte Überprüfung der zuvor aufgestellten Anforderungen
            an einen gelungenen Kommunikationsprozess im Rahmen der Abstimmung
            und bietet somit Anknüpfungspunkte für die kommunikative Gestaltung
            ähnlicher Vorhaben.
          </p>
          <br />
          <ButtonLink to="../Abstimmung_Radschnellverbindungen_Schwerpunktarbeit_Kuss_Wening.pdf">
            Download
          </ButtonLink>
        </>
      </TextWithImage>
    </Layout>
  );
};
export default ResearchWorkPage;
