// tslint:disable: max-line-length
import { Skripta } from '@app/models/skripta.model';

export const SadrzajSripte: Skripta = {
  naslov: 'E-SKRIPTA',
  podnaslov: 'iz predmeta Opšta ekologija životinja i Populaciona ekologija životinja',
  opis_ukratko:
    'Kratki opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  opis:
    'Opširan opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  predmeti: [
    {
      id: 'I',
      naziv: 'Opšta ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'opsta-ekologija-zivotinja',
      URL_slike: '',
      oblasti: [
        {
          id: 'I_1',
          naziv: 'Demografija',
          opis: 'opis oblasti',
          link: 'demografija',
          URL_slike: '',
          programske_celine: [
            {
              id: 'I_1_1',
              naziv: 'Uvod',
              link: 'uvod',
              URL_slike: '',
              tekst: `<p>Demografija obuhvata skup metoda i tehnika kojima se vrši kvantitativno opisivanje populacije. To je mlada nauka koja je intenzivno počela da se razvija krajem XVIII veka sa izdanjem knjige <i>An Essay on the Principle of Population</i> (<i>Есеј о принципима становништва</i>) (1789) Tomasa Maltusa. Demografija је interdisciplinarna nauka i usko je povezana sa matematikom, statistikom, ekonomijom, sociologijom, medicinom, ekologijom itd. </p>
              <p>Kao osnovno „oruđe za rad“ u demografiji se koriste tablice života (demografske tablice) koje kroz podatke o preživljavanju i reprodukciji daju kompletnu sliku populacione dinamike.</p>
              <p>Prve tablice života konstruisane su od strane humanih demografa koji su radili za osiguravajuća društva i kojima je od velike važnosti bilo da znaju očekivani životni vek određenih grupacija ljudi. Iz tog razloga literatura koja se odnosi na životne tablice ljudske populacije je veoma obimna.</p>
              <p>Iako se humane tablice života koriste još od XVII veka, u ekologiji se koriste od početka XX, tačnije od 1921. godine kada ih prvi put konstruisao američki populacioni ekolog Rejmond Perl (Raymond Pearl) za populaciju voćnih mušica (Pearl and Parker, 1921). </p>
              <p>Konstruisanje tablica života zavisi od načina prikupljanja podataka. Prema tome razlikujemo dva osnovna tipa demografskih tablica: <strong>Horizontalne (kohortne) </strong>odnosno <strong>vertikalne (statične)</strong> tablice. Ova dva tipa tablica se razlikuju u formi osim u izuzetnim situacijama. Kod horizontalnih tablica života podaci se dobijaju praćenjem jedne kohorte (jedinke iste uzrasne klase u populaciji) od rođenja prve do smrti poslednje jedinke. Budući da se prati samo jedna kohorta, nema preklapanja generacija. (naći neki primer iz radova ima u krebsu). Kod vertikalnih tablica života podaci se dobijaju na osnovu preseka stanja populacije u određenom trenutku. Budući da se beleže sve jedinke u populaciji u datom momentu, postoji preklapanje generacija. (sa primerom zavoda za statistiku)</p>
              <p>Ova dva tipa tablica bi bila identična samo u slučaju kada je sredina nepromenljiva u vremenu a populacija u ekvilibrijumu. Ipak, u prirodi stope rasta i umiranja variraju u vremenu i zato postoje razlike u ova dva tipa tablica. Razlike se mogu prikazati najlakše na primeru ljudske populacije: vertikalna tablica za ljude rođene 1900. godine u SAD bi predstavila krivu preživljavanja kakva bi bila da populacija nastavi preživljavanje u stopi koja je postojala 1900. godine. U međuvremenu, kontinuirani napredak u medicini u poslednjih 100 godina je povećao stopu preživljavanja  i očekivanu dužinu života za oko 15 godina, i ljudi rođeni 1900. godine su imali krivu preživljavanja drugačiju od one koja je konstruisana na osnovu podataka iz vremena kada su bili rođeni. krebs</p>
              
              
              
              <p>Konstruisanje demografske tablice</p>
              <p>Kako bi konstruisali tablicu života potrebno je da definbišemo starosni interval u okviru kog grupišemo podatke U demografskim tablicama starost se obeležava sa „X“ i predstavlja početnu kolonu u tablici. Varijabla „x“ može da predstavlja realnu starost u danima, mesecima ili godinama u zavisnosti od dužine života organizma ali češće predstavlja uzrasnu kategoriju koja obuhvata jedinke približne starosti (npr. 0-2 godine, 8-12 meseci, 2-4 nedelje itd.). Za dugoživeće organizme poput afričkog slona, grenlandskog kita ili šimpanze interval može biti 5 ili 10 godina, za srnu ili jazavca 1-2 godine a za poljskog miša ili rovčicu mesec dana. Što kraće intervale koristimo u više kategorija podaci će biti detaljniji i precizniji ali to zahteva i više resursa. U najjednostavnijoj postavci imali bi smo samo 2 uzrasne kategorije (prereproduktivnu i reproduktivnu) za semelparne organizme i 3 za iteroparne (prereproduktivnu, reproduktivnu i postreproduktivnu). Uzrasne kategorije ne moraju biti jednakog trajanja kada korespondiraju sa stadijummom životnog ciklusa.</p>
              
              
              <p>                               1                         2                        3                     Uzrasna klasa – „Time specific“</p>
              
              <p>                          0                       1                         2                       3       Starost – „Age specific“</p>
              <p>Prema konvenciji, novorođene jedinke imaju starost 0 (a ne 1). Prvu uzrasnu kategoriju čine sve jedinke o rođenja do uzrasta 1, drugu uzrasnu kategoriju čine sve jedinke od uzrasta 1 do uzrasta 2 itd. Usled velike raznovrsnosti životnih formi i životnih strategija životinja nije uvek jednostavno odlučiti gde se nalazi početak životnog cilklusa. Stoga se može javiti problem u definisanju početka životnog ciklusa. Postavlja se pitanje da li je to oplođena jajna ćelija? Položeno jaje ili ptić koji se izlegao? U zavisnosti od grupe životinja, životne forme, aplikativnih potreba, metodologije uzorkovanja i preovlađujućih istraživačkih pitanja u oblasti koja tretira tu grupu životinja početak životnog ciklusa se drugačije definiše. Za komercijalno značajne vrste istraživačka praksa je pokazala da su neke uzrasne kategorije i stadijumi od većeg značaja u komercijalnoj upotrebi te su demografske analize za takve vrste prilagođene potrebama čoveka. Na primer u ribarstvu se za prvu kategoriju uzimaju larve i nije važan broj položenih jaja dok u entomologiji za proučavanje parazitskih osa, broj položenih jaja predstavlja važan faktor. Kod vrsta kojima se aktivno upravlja (posebno kod harizmatične megafaune koja najčešće uključuje krupne sisare i ptice) veoma je važan broj položenih jaja i izlegnutih mladunaca. Kod zaštićenih vrsta koje neretko zahtevaju asistiranu reprodukciju demografske analize uključuju i prenatalnu dijagnostiku poput praćenja broja embriona, realizovanih trudnoća i sl. </p>
              <p>Postoji nekoliko načina na koji se može konstruisati tablica mortaliteta. Na ovom kuru biće obrađene dve metode dok se preostalih četiri može naći u fajlu <i><strong>Fajl_Konstrukcija tablice smrtnosti1.doc</i></strong>: </p>
              <p><u>Posmatranje uzrasta umiranja</u> – Broj jedinki koje uginu u sukcesivnim vremenskim intervalima se prati za grupu jedinki rođenih u istom pulsu rađanja (kohorta). Te vrednosti  su proporcionalne dx režimu, koji se dobija deljenjem sa ukupnom brojnošću kohorte. Koristi se za prirodne populacije koje se intenzivno istražuju i za populacije u zarobljeništvu. Populacija je markirana.Ovakvo sakupljanje podataka je sproveo Adolph Murie tokom 1939-1941 na Aljasci sakupljajući lobanje sa rogovima vrste <i>Ovis dalli</i>. Sakupio je 608 lobanja i zatim uz pomoć rogova (broj prstenova na rogovima je starost u godinama) procenio koliko je bila svaka jedinka stara kada je uginula. Na isti način Sinclair je 1977. godine u istočnoj Africi sakupljao lobanje afričkog bufala Syncerus caffer. Sakupio je 584 lobanja i klasifikovao ih po polu i starosti. Postupak ove metode je dat u tabeli:</p>
              <p>Način proračuna:</p>
              <p>Kolona						Simbol	           Račun</p>
              <p>Uzrast				 	                         x</p>
              <p>Broj jedinki uginulih od x do x+1			   f'x		Ulazni podaci</p>
              <p>Verovatnoća umiranja od x do x+1		              dx		f'x/Σ f'x</p>
              <p>Verovatnoća preživljavanja od rođenja do x	              lx		1-Σdx</p>
              <p>Stopa mortaliteta					   qx		dx/lx</p>
              <p>Stopa preživljavanja					   px		1-qx</p>
              
              <p><u>Direktno posmatranje preživljavanja</u> – Brojnost jedink kohorte se prati u sukcesivnim vremenskim intervalima tj. koliko jedinki iz x uzrasne kategorije će preživeti do x+1. Te vrednosti su proporcionalne lx režimu, koji se dobija deljenjem sa ukupnom brojnošću kohorte. Na ovaj načine je Connell 1961. godine konstruisao krivu preživljavanja posmatrajući kompeticiju izmedju dve vrste rakova lopara. Ova metoda se koristi za prirodne populacije koje su markirane. Postupak je dat u tabeli:</p>
              
              <p>       Način proračuna:</p>
              <p>Kolona						Simbol   	            Račun</p>
              <p>Uzrast				 			   x</p>
              <p>Broj jedinki živih na početku x			   f'x		Ulazni podaci</p>
              <p>Verovatnoća preživljavanja od rođenja do x	              lx		fx/f0</p>
              <p>Verovatnoća umiranja od x do x+1		              dx		lx- lx+1</p>
              <p>Stopa mortaliteta					   qx		dx/ lx</p>
              <p>Stopa preživljavanja					   px		1-qx</p>
              
              <p>Bez obzira za koju metodu konstruisanja tablice mortaliteta se odlučimo (1-6) netačni podaci se dobijaju kada se: </p>
              <ul><li>ne poznaje stabilna uzrasna struktura populacije;</li></ul>
              <li>stopa rasta menja tokom poslednje 2-3 generacije; </li>
              <li>javljaju fluktuacije brojnosti približno jednake generacijskom vremenu; </li>
              <li>jako mali uzorci koriste za analizu (< 150 jed.);</li>
              <li>evidentira mali broj uzrasnih kategorija; </li>
              <li>brojnosti dobijaju metodom sa velikom greškom; </li>
              <li>koristi nepouzdan ili kvalitativan metod datiranje uzrasta. </li></ul>
              <p>Po pravilu se najveći deo ovih nedostaka može otkloniti pravilnim izborom kvantitativne metode, dugoročnim (horizontalnim) praćenjem populacije, markiranjem, i kalibracijom sa laboratorijsko/eksperimentalnim podacima, što neretko zahteva obimne materijalne i ljudske resurse.</p>
              <p>Mortalitet je jedan od 4 ključna parametra populacione dinamike ΔN=B-D+I-E Promenu broja jedinki ΔN u populaciji u funkciji vremena možemo predstaviti kao bilans jedinki koje su rođene, uginule, imigrirale i emigrirale pri čemu B i I dovode do povećanja brojnosti a D i E do smanjenja brojnosti. Mortalitet se procenjuje na osnovu broja uginulih jedinkiu u jedinici vremena. Proračuni u vezi sa mortalčitetom obuhvataju prvu trećinu demografske tablice.</p>
              <p>Parametri koji se odnose na mortalitet u okviru tablica života sa formulama:</p>
              <ul><li><i>l</i><i>x</i> – proporcija preživelih jedinki od prve uzrasne kategorije (rođenja) do kategorije x; Budući da je u pitanju proporcija, maksimalna vrednost za lx iznosi 1 (rođenje svih jeidnki) a minimalna 0, kada sve jedinke uginu.</li></ul></ul>
              <p>lx=nx/n0</p>
              <li><i>d</i><i>x</i> – proporcija uginulih jedinki kategorije x</li></ul>
              <p>dx=lx-lx+1  </p>
              <li><i>q</i><i>x</i> – <i>per capita</i> uzrasno specifična stopa mortaliteta; odnosi se na vremenski interval između x i x+1</li></ul>
              <p>qx=dx/lx</p>
              <li><i>p</i><i>x</i> – <i>per capita</i>  uzrasno specifična stopa preživljavanja</li></ul>
              <p>px=1-qx  </p>
              <li><i>e</i><i>x</i> – preostala očekivana dužina života (izražena u broju uzrasnih kategorija)</li></ul>
              <p>ex= Lx/lx      </p>
              <li><i>L</i><i>x</i> – srednji broj živih jedinki dve uzastopne uzrasne klase</li></ul>
              <p>Lx=(lx+lx+1)/2  </p>
              <li><i>ΣL</i><i>x</i> – pomoćna kolona potrebna za izračunavanje ex</li></ul>
              <p>xnLx</p>
              
              <p>Parametri <i>l</i><i>x</i><i>, d</i><i>x</i> i <i>q</i><i>x</i> predstavljaju isti set podataka samo izražen na drugačiji način. Sa dostupnim podacima za bilo koji od ova tri parametra u mogućnosti smo da izračunamo preostale parameter iz tablice mortaliteta. </p>
              
              
              <p>Parametri koji se proračunavaju se koriste za:</p>
              <li><i>l</i>x – sumirani prikaz preživljavanja, analizu populacione dinamike sa uzrasnom strukturom</li>
              <li><i>d</i><i>X</i> – sumirani prikaz umiranja, proračun letalnih i poluletalnih doza štetnih agensa u životnoj sredini, proračun genetičkih i evolucionih posledica dejstva selektivnih faktora kada su uginule jedinke nosioci naslednih ili nasledljivih svojstva</li>
              <li><i>q</i><i>x</i> – direktnu procenu toka moraliteta, komparaciju izmedju populacija</li>
              <li><i>p</i><i>x</i> – matematičko modeliranje kojim se vrše dugoročne prognoze stanja populacije, proračun ugroženosti i verovatnoće izumiranja populacije, preračun žetve/prinosa – parametra eksploatacije i gazdovanja/upravljanja populacijom</li>
              <li><i>e</i><i>x</i> – proračun rizika života i drugih pokazatelja vezanih za dugovečnost (tamo gde je vremenska skala bitna), za proračun troškova osiguranja, premija, raspodele novčanih sredstava namenjenih zaštiti i drugih socio-ekonomskih troškova kojima se bavi „ekološka ekonomija“.</li></ul>
              <p> Preživljavanje (<i>l</i><i>x</i>) se može predstaviti grafički u odnosu na starost x. Takvi grafički prikazi se nazivaju <strong>krive preživljavanja</strong> koje jasno pokazuju u kojim uzrastima je preživljavanje veće ili manje. Osim po uvođenje tablica života u biologiju i ekologiju, Rejmond Perl je značajan i po tome što je prvi opisao 3 osnovna tipa kriva preživljavanja (1928): Tip I (konveksni tip) imaju organizmi sa jako malim gubicima tokom većeg dela života i velikim gubicima kod starijih organizama. Tip II (linearni tip) preživljavanja ukazuje na konstantnu stopu mortaliteta nezavisnu od godina. Tip III (konkavni tip) ukazuje na visoke gubitke u početnim uzrasnim kategorijama, a zatim na manju i relativno konstantnu stopu mortaliteta. Krive preživljavanja pokazuju tempo opadanja broja jedinki u funkciji vremena. Tempo se razlikuje između različitih vrsta ali varira i tokom života same jedinke. Larve, tek izlegli ptići i rođeni mladunci svakako imaju veću stopu mortaliteta od zrelijih uzrasnih kategorija, takođe stopa smrtnosti je veća kod ostarelih jedinki koje su često lakši plen predatorima i podložnije parazitima i patogenima.</p>
              <p>Iz tri osnovna tipa izvedeno je još nekoliko ali ni time nije postignuto da svaku vrstu tačno opisuje samo sa jedna kriva preživljavanja. U literaturi se u zavisnosti od autora pojavljuju različite numeracije i klasifikacije kriva preživljavanja. Za potrebe ovog kursa biće korišćena sledeća klasifikacija koja uključuje 4 osnovna tipa i 3 modifikacije kriva prema aritmetičkoj skali:</p>
              <ul><li>Tip I – izrazito konkavna krivulja preživljavanja </li></ul>
              <li>Tip II – geometrijsko opadanje preživljavanja</li>
              <li>Tip III – pravolinijsko opadanje preživljavanja </li>
              <li>Tip IV – izrazito konveksna </li>
              <li>Modifikacija IVa – konveksna sa progresivnim rastom stope mortaliteta</li>
              <li>Stepenasta modifikacija </li>
              <li>„Sedlasta“ modifikacija - proističe iz  III ili IV </li></ul>
              <p><strong>Tip I</strong> (konkavna) – Sitni, kratkoživeći (najčešće akvatični) organizmi sa determinisanim rastom. Mortalitet je najveći u najranijim uzrasnim kategorijama. Reprodukcija je semelparna, oplođenje spoljašnje sa izogametima, broj potomaka je veoma veliki a briga o potomstvu odsustvuje. Najčešće su u pitanju r selekcionisti i filogenetski starije grupe oganizama. Ovaj tip preživljavanja ima najveći broj beskičmenjaka uključujući dupljare, mekušce i bodljokošce ali i ribe sa koštanim skeletom. Osim organizama sa determinisanim rastom, ovaj tip preživljavanja imaju i neke grupe životinja sa <u>nedeterminisanim rastom</u> i u tom slučaju govorimo o krupnijim, dugoživećim organizmima, različite filogenetske starosti i tipovima reprodukcije (hrskavičave ribe, neki vodozemci i gmizavci). Zaključujemo da tip I preživljavanja imaju ili kratkoživeći ili izuzetno dugoživeći organizmi u zavisnosti da li imaju determinisan ili nedeterminisan rast.</p>
              <p><strong>Tip II</strong>  – Ovaj tip preživljavanja je sličan I tipu ali se razlikuje po nižem udaru mortaliteta u početnim uzrasnim kategorijama. Reprodukcija je semelparna bez preklapanja generacija, broj potomaka je veliki briga o potomstvu po pravilu odsustvuje. Karakteristika ovog tipa preživljavanja je i konstantna uzrasno specifična stopa moprtaliteta (<i>q</i><i>x</i>). Ovaj tip preživljavanja je tipičan za insekte. </p>
              <p><strong>Tip III</strong> (prava) – Idealizovana prava koja predstavlja treći tip preživljavanja rezultat je konstantnog uzrasno-specifičnog mortaliteta (<i>d</i><i>x</i>) odnosno podjednakog delovanja mortaliteta na sve uzrasne kategorije. Sve jedinke u populaciji će imati istu verovatnoću umniranja kada ne postoji izraziti starosni i polni dimorfizam (mlade jedinke izgledaju isto kao i starije, polovi se teže razlikuju i sl.). Reprodukcija je iteroparna, broj potomaka je daleko manji nego kao kod I i II tipa preživljavanja a briga o potomstvu postoji. Ovaj tip preživljavanja je karakterističan za ptice, sitne sisare poput glodara, slepih miševa, ungulatne sisare i neke gmizavce (npr. <i>Trachemys scripta elegans</i>)</p>
              <p><strong>Tip IV</strong> (konveksna) – Krupni, dugoživeći organizmi (uglavnom kopneni) sa determinisanim rastom. Ovaj tip preživljavanja karakteriše nizak mortalitet tokom najvećeg dela životnog ciklusa osim u starijim uzrasnim kategorijama kada mortalitet raste. Reprodukcija je iteroparna, oplođenje unutrašnje sa anizogametima, broj potomaka je mali (1-2) i postoji briga o potomstvu. Najčešće su u pitanju K selekcionisti i filogenetski mlade vrste.</p>
              <p><strong>Modifikacija IVa</strong> – Okolina se pogoršava tokom trajanja životnog ciklusa dx, qx rastu progresivno OVDE NE ZNAM DETALJE </p>
              <p><strong>Stepenasta modifikacija</strong> – Proizilazi iz II tipa preživljavanja i karakteriše je promena stope mortaliteta u različitim životnim fazama. Javlja se kod holometabolnih insekata gde stupnjevi razvoja poput jajeta, larve, lutke i imaga imaju različite stope mortaliteta, kod plaštaša sa izraženim smenama seksualne i aseksualne faze ali i zglavkara koji se presvlače tokom faze rasta (npr. rakovi) </p>
              <p><strong>„Sedlasta“ modifikacija</strong> – Proizilazi iz III ili IV tipa preživljavanja u zavisnosti od toga u kojoj životnoj fazi se mortalitet smanjuje ili povećava. Sedlastu modifikaciju karakteriše najveći pritisak mortaliteta u prereproduktivnoj i postreproduktiuvnoj fazi dok su jedinke u reproduktivnoj dobro integrisane da izdrže pritisak mortaliteta. Budući da proizlazi iz različitih tipova preživljavanja, javlja se kod velikog broja vrsta: najčešće krupnih sisara – herbivora poput divljih svinja, tapira, kod predatora poput tigrova i lavova čiji mladunci imaju visoku stopu mortaliteta (čak 50% u prvih godinu dana), hijena, ptica kod kojih se javlja kainizam među mladuncima (supovi, kondori, orlovi, blune).</p>
              
              <p>Zadaci:</p>
              <ol><li>Na osnovu IV primera ulaznih podataka na bazi cenzusa živih (Sx) i uginulih (Dx) jedinki formirati tablice mortaliteta.</li>
              <li>Nacrtati komparativne krivulje preživljavanja, mortaliteta, specifičnog mortaliteta i verovatnoće preživljavanja za 4 osnovna tipa preživljavanja na aritmetičkoj i logaritamskoj skali. Prkomentarisati.</li>
              <li>Kreirati krivulju preživljavanja tako da mortalitet u reproduktivnom dobu bude znatno niži nego u ostatku životnog ciklusa (“sedlasta” modifikacija). Prokomentarisati.</li>
              <li>Kreirati krivulju preživljavanja za Iva tip preživljavanja (progresivno povećavanje mortaliteta tokom uzrasta - možete koistiti Weibull-ovu distribuciju). Prokomentarisati.</li>
              <li>Kreirati stepenastu krivulju preživljavanja za populacije sa nepreklapajućim generacijama i konstantnim mortalitetom, tako da 50% mortaliteta obuhvata datu uzrasnu kategoriju a drugih 50% trenutak prelaska iz jedne u drugu uzrasnu kategoriju. Prokomentarisati.</li></ol>
              <p>												</p>
              <p>	</p>
              <p>													</p>
              
              
              
              
              
              
              
              
              
              
              
              <p>			</p>
              
              <p>Natalitet</p>
              <p>Ako želimo da ispratimo veličinu i trend promene brojnosti populacije potrebno je da osim mortaliteta poznajemo i natalitet. Natalitet predstavlja broj novorođenih jedinki u populaciji. Razlikujemo fiziološki natalitet i ekološki natalitet. Fiziološki natalitet (<strong>fekunditet</strong>) predstavlja maksimalni fiziološki potencijal za rađanje dok ekološki natalitet (<strong>fertilitet</strong>) predstavlja realizovani broj potomaka.</p>
              
              <p>Sve populacije u određenoj sredini imaju neku srednju dužinu života i stopu preživljavanja, prosečnu stopu nataliteta, stopu rasta ili brzinu razvoja individualnih jedinki. Vrednosti ovih parametara su determinisane delom od strane sredine a delom od samih unutrašnjih svojstava jedinki . Unutrašnja svojstva jedinki su nemerljiva jer nisu konstantna ali je moguće izmeriti njihovu ekspresiju pod određenim okolnostima čime smo u mogućnosti da definišemo tzv. <strong>unutrašnju (trenutnu) stopu rasta koja se često naziva i „Maltusov parametar“ – r</strong>. Maltus je u svom delu „Esej o principima stanovništva“ (1798) istakao da se „<i>stanovništvo razmnožava brže nego što raste proizvodnja hrane. Porast razmnožavanja čovečanstva prati geometrijsku progresiju (1, 2, 4, 8, 16, 32,...), a proizvodnja hrane aritmetičku progresije (1, 2, 3, 4, 5, 6,...), pa su zato ljudi osuđeni na bedu i siromaštvo ukoliko se ne preduzmu mere ograničenja porasta stanovništva. Bez tih mera prirodne nesreće - glad, bolesti, ratovi itd. će prirodnim putem regulisati odnos između rasta populacije i proizvodnje hrane.</i><i>“</i></p>
              <p>Sredina se konstantno menja i nikada nije potpuno nepovoljna a ni potpuno povoljna već se kreće u granicama ova dva ekstrema. Kada je sredina povoljnija očekujemo porast brojnosti kada je nepovoljna brojnost se smanjuje. U prirodi mi posmatramo stvarnu stopu populacionih promena koja varira od pozitivne do negativne kao odgovor na promene u starosnoj distribuciji, socijalnoj strukturi i genetičkom sastavu ali i kao odgovor na promene u ekološkim faktorima. Ipak, mi posmatramo rast populacije uz pretpostavku da su svi ovi parametri nepromenljivi. Na porast vrednosti r može uticati:</p>
              <ul><li>Pomeranje uzrasne kategorije koja se prva razmnožava ka nižim (ranije stupanje u reprodukciju)</li></ul>
              <li>Porast broja potomaka u svakoj reprodukciji</li>
              <li>Porast broja reprodukcija (povećanjem dugovečnosti)</li></ul>
              <p>Za svaku populaciju ovi procesi su integrisani i merljivi <i>per capita</i> stopom nataliteta i stopom mortaliteta (b i d). Kada je b veće od d populacija raste, kada je d veće od b populacija opada u brojnosti. b i d nisu konstantne vrednosti pa samim tim ni r nije konstantna vrednost. Takođe, vrednosti r nam ne govore o tome da li je neka vrsta retka ili ne. Vrste sa niskim r nisu uvek retke niti su one sa visokim česte.  </p>
              <p>b>d→r>0</p>
              <p>b<d→r<0</p>
              <p>b=d→r=0</p>
              
              <p> Ako želimo da kvantitativno procenimo stopu prema kojoj se populacija smanjuje ili povećava potrebno je da utvrdimo kako stope mortaliteta i nataliteta variraju sa starošću odnosno sa uzrasnim kategorijama. Koristeći parameter lx iz tablice mortaliteta dobijamo informaciju o proporciji preživelih jedinki (preživljavanje je komplementarni proces umiranju). Slično tome, za proračune stope nataliteta populacije uvodi se parameter <strong>m</strong><strong>x</strong> (skraćeno od <i>maternity </i>ali se ponekad se u literaturi obeležava i kao bx od <i>birth</i>) u okviru tablice nataliteta. On predstavlja <strong>uzrasno specifični fekunditet</strong> – prosečan broj potomaka po jedinki u svakoj uzrasnoj kategoriji odnosno između x i x+1. Za vrste sa seksualnom reprodukcijom najčešće se u obzir uzima koliko ženka uzrasta x u proseku ostavi ženskih potomaka. Vrednosti uzrasno specifičnog fekunditeta imaju samo one uzrasne kategorije koje ulaze u reprodukciju (prereproduktivne i postreproduktivne uzrasne kategoprije imaju mx=0).  Vrednosti uzrasno specifičnog mortaliteta su uvek pozitivni realni brojevi (Budući da mx predstavlja prosečnu vrednost, ne moraju biti celi). U tablici života to čitamo kao m(3)=1.4 što znači da ženka uzrasne kategorije 3 daje u proseku 1.4 ćerku. </p>
              <p>Ekolozi među životinjama razlikuju 2 tipa reprodukcije: semelparnu i iteroparnu. U ekologiji biljaka analogna terminhologija bi bila monokarpne i polikarpne biljke. Semelparni organizmi su oni koji se reprodukuju samo jednom tokom životnog ciklusa. Naziva se i punktuirana ili  “Big bang” reprodukcija jer se dešava samo jednom ostavljajući ogroman broj potomaka (jaja) što je energetski zahtevno i najčešće letalno po same jedinke. Semelparnu reprodukciju imaju brojne beskičmenjačke grupe poput leptira, cicada, efemeroptera među insektima, brojni paukovi, rakovi među arahnidama i lignje i hobotnice među mekušcima. Semelparija se retko javlja kod kičmenjaka, klasičan primer su pacifički lososi (8 vrsta iz roda <i>Oncorhynchus</i>) i jegulje (<i>Anguilla), </i>zapažena je i kod nekoliko vrsta žaba i gmizavaca pa čak i torbarskih sisara (familije Didelphidae i Dasyuridae). Semelparija se nikada ne javlja kod placentalnih sisara. Semelparija je tokom biološke istorije evoluirala više puta kod različitih grupa životinja. Ona je karakteristična za filogenetski starije grupe budući da je kod filogenetski mlađih evolucija favorizovala brigu o potomstvu i zavisnost mladih od roditelja. Takođe, stopa nataliteta je znatno niža kod filogenhetski mlađih grupa budući da veliki deo energije ulažu u svoj rast, razviće i podizanje mladih. Postavlja se pitanje zašto bi evolucija uopšte favorizovala semelpariju kao tip reprodukcije? Prirodna selekcija maksimizuje ukupni reproduktivni doprinos. Semelparni organizmi ostavljaju veliki broj potomaka jer koristi sve raspoložive resurse za jednu masivnu reprodukciju. Dovoljno velikim brojem potomaka oni povećavaju njihovu verovatnoću preživljavanja ali i nadoknađuju nemogućnost ponovne reprodukcije. U tabliucama života, semelparni organizmi će imati vrednost uzrasno specifičnog fekunditeta samo u poslednjoj uzrasnoj kategoriji.</p>
              <p>Iteroparni organizmi ulaze u reprodukciju više puta tokom životnog ciklusa. Iteroparija je tipična za kičmenjake: sve vrsate ptica, skoro vse sisare, veliku većinu reptila, vodozemaca i riba. Kod beskičmenjaka, dokumentovana je kod nekih mekušaca i insekata (npr. nekih tvrdokrilaca kod kojih ima prige o mladima, bubašvaba, komaraca). Iteroparija je generalno favorizoivana u varijabilnim sredinama gde je verovatnoćapreživljavanja adultnih jedinki do sledećeg reproduktivnog perioda veća od verovatnoće preživljavanja juvenila do prve reprodukcije. U tablicama nataliteta, iteroparni organizmi će imati najmanje dve uzrasne kategorije sa uzrasno specifičnim fekunditetom.</p>
              <p>Organizmi sa iteraparnom reprodukcijom imaju više obrazaca reprodukciju u odnosu na dužinu trajanja reproduktivne faze i broja potomaka koje ostavljaju po reprodukciji (u demografskoj tablici vrednosti za mx i broj uzrasnih kateegorija sa mx vrednostima). Prema tome razlikujemo <strong>pulsirajuću reprodukciju</strong> i <strong>kontinuiranu reprodukciju</strong>. Pulsirajuća reprodukcija obuhvata kraći deo životnog ciklusa (20-30%) u odnosu na kontinuiranu (40-50%) ali je očekivani broj potomaka veći (mx>1). Prema principu alokacije evolucija nije mogla favorizovati i dugu reproduktivnu fazu i veliki broj potomaka stoga je pritisak išao u pravcu smanjenja mx a povećanja varijanse odnosno dužine trajanja reproduktivne faze. Pulsirajuća reprodukcija je karakteristčna za kopitare, papkare među sisarima i ptice dok je kontinuirana reprodukcija karakteristična za slonove, kitove, primate (uključujući i ljude). Postoji još jedan tip kontinuirane reprodukcije koji je odnosi na organizme sa nedeterminisanim rastom i tipom preživljavanja I (ribe sa hrskavičavim skeletom, žabe, kornjače). U pitanju su najčešće dugoživeće forme kod kojih sa starošću raste i fekunditet i postoji veliko ulaganje telesne mase 30-40%) u reprodukciju.</p>
              <p>Suma uzrasno specifičnog fekunditeta za sve urasne kategorije predstavlja <strong>bruto stopu reprodukcije</strong> <strong>(B) </strong>i pokazuje ukupan broj potomaka prosečne jedinke tokom celog života kada ne bi bilo mortaliteta. Uključivanjem mortaliteta u dalje proračune dobijamo <strong>neto stopu reprodukcije (R</strong><strong>0</strong><strong>).</strong> </p>
              <p>R0=lxmx</p>
              <p>Neto stopa reprodukcije je značajan parameter koji pokazuje koliko će se puta populacija povećati po generaciji tj. brzinu zamene jedinki u populaciji. Da je preživljavanje (lx) u svim uzrasnim kategorijama 100%, R0 bi bilo samo suma kolone mx. U prirodi je situacija takva da mortalitet u svakoj uzrasnoj klasi smanjuje potencijal doprinosa potomaka narednoj generaciji. U slučaju kada je R0=1 veličina populacije će ostati ista tj. jedno dete će zameniti jednog roditelja. U slučaju kada je R0<1 populacija neće uspeti da se “zameni” i brojnost će opadati, za razliku od R0>1 kada će biti i više potomaka nego što je bilo roditelja i populacija će rasti. Neto stopa reprodukcije se izražava u vremenu generacije. Ako u demografskoj tablici očitamo vrednost R0=3, znači da populacija utrostručuje svoju brojnost za vreme jedne generacije, ako je npr. R0=1.27 populacija će se uvećati za 1.27 puta u toku generacije. <strong>Vreme generacije (T)</strong> prestavlja vreme od rađanja roditelja do rađanja njihovih prvih potomaka odnosno prosečno vreme za koje se populacija zameni novim jedinkama. Kod nekih vrsta se dostizanje polne zrelosti poklapa sa prvom reprodukcijom ali to nije pravilo. Vreme generacije je najčešće veće od 1 za populacije sa uzrasnom strukturom osim u izuzetnom slučaju kada jedinke prve kategorije odnosno novorođenčad imaju izuzetno visok fekunditet pa je imenilac veći od brojioca.</p>
              <p>T=xlxmxR0</p>
              <p>Poznajući neto stopu reprodukcije i vreme generacije, u mogućnosti smo da izračunamo i trenutnu stopu rasta (r) iako ne znamo veličinu populacije:</p>
              <p>r=ln R0T </p>
              
              <p>Trenutna stopa rasta može da se konvertuje u konačnu stopu rasta koja se obeležava sa λ:</p>
              <p>λ=er   e– osnova prirodnog logaritma</p>
              <p> Konačna stopa rasta je uvek pozitivan broj koji pokazuje promenu u veličini populacije, odnosno koliko se novih jedinki dodaje <i>per capita</i> u jedinici vremena. Konačna stopa rasta je kao parameter slična neto stopi reprodukcije ali se razlikuju u jedinicama izražavanja, R0 u se izražava u vremenu generacije dok se λ izražava u vremenu u kojem je definisana uzrasna kategorija x. </p>
              <p>Veza između R0, r i λ uspostavlja sledeće numeričke ekvivalente:     </p>
              <p>r>0 ↔ R0 >1↔λ>1</p>
              <p>r<0 ↔ R0 <1↔λ<1  
              r=0 ↔ R0 =1↔λ=1</p>
              <p>Iz demografske analize prave se modeli rasta i za to se koriste r i λ, pri čemu se r koristi za prognoziranje stanja kretanja a λ za procenu veličine populacije u određenom vremenskom intervalu. Stope rasta zavise od više parametara – dužine života, vremena stupanja prvi put u reprodukciju, broja potomaka po reprodukciji, vremena generacije, preživljavanja uzrasta u kome se razmnožava, preživljavanja potomaka itd.</p>
              
              <p>Zadaci:</p>
              <ol><li>Koristeći uzrasno specifični fekunditet (3x4 primera) i preživljavanje iz tablice mortaliteta formirati tablice nataliteta.</li>
              <li>Za svih 12 primera nacrtati grafik sa krivuljom preživljavanja sa očekivanom dužinom života i krivuljom rađanja sa uzrasno specifičnim doprinosom reprodukciji (<i>m</i><i>x</i> na drugoj y osi)	.</li>
              <li>Kreirati krivulju rađanja drugog tipa (m2) takvog intenziteta da populacija raste, stagnira, opada.</li>
              <li>Definisati minimalne uslove za semelparnu reprodukciju na kraju životnog ciklusa (rađanje tipa I)	 tako da populacija raste, stagnira, opada.										</li></ol>
              <p>									</p>
              
              
              
              
              
              <p>Uzrasna struktura</p>
              <h1>Poslednji deo demografske tablice odnosi se na uzrasnu strukturu populacije koju predstavlja proporcija prisutnih uzrasnih kategorija u populaciji.</h1>
              <p>Uzrasne kategorije predstavljaju stadijume životnog ciklusa koji uključuju jedinke približne starosti. Ukoliko imamo iteroparnu populaciju sa preklapanjem generacija imamo i uzrasnu strukturu. Kod semelparnih organizama nema uzrasne strukture jer nema preklapanja generacija budući da u svakoj sezoni postoji samo jedna uzrasna kategorija. Prilikom definisanja x kolone u demografskim tablicama (poglavlje Mortalitet) pomenuli smo da kod iteroparnih organizama razlikujemo 3 osnovne uzrasne kategorije: prereproduktivnu, reproduktivnu i postreproduktivnu čija dužina trajanja zavisi od ekologije same vrste. Iako se navodi kao životna faza iteroparnih organizama, postreproduktivna faza je retka kod životinja. Karakteristična je za dugoživeće, socijalne sisare organizovane u matrijarhate kao što su npr. slonovi, kitovi ubice, crni delfini kratkih peraja, babuni, šimpanze, bonoboi i naravno ljudi (Ellis et al. 2018). Ipak, postreproduktivna faza nije ekskluzivna samo za sisare već je dokumentovana i kod nekih riba (tzv. Živorotki poput gupi <i>Poecilia reticulare</i> i platika <i>Xiphophorus sp.</i> koje su česte vrste u akvaristici), ptica (japanskih prepelica, australijskih tigrica i kanarinaca) (Reznick et al. 2005) pa čak i beskičmenjaka poput rotifera (<i>Macrotrachela sp</i>.) i nematoda (<i>Caenorhabditis elegans</i>) (Jones et al. 2013). </p>
              <p>U okviru reproduktivne faze u životnom ciklusu životinja, koja kod iteroparnih oprganizama uključuje najčešće nekoliko uzrasnih kategorija  postoje razlike u reproduktivnom doprinosu svake uzrasne klase koja ulazi u reprodukciju. Iz tog razloga je uveden parameter koji pokazuje koliki je reproduktivni doprinos jedinki iz svake uzrasne kategorije veličini sledeće generacije tj. broj potomaka koji će jedinka uzrasta x imati tokom ostatka života u skladu sa stopom populacionog rasta - <strong>Individualna reproduktivna vrednost (V</strong><strong>x</strong><strong>)</strong>. Ova vrednost je važna u evoluciji parametara životne istorije. Prirodna selekcija deluje jače na one uzrasne kategorije sa višom reproduktivnom vrednošću a slabije na one koje se ne reprodukuju. Uticaj predatora će biti veći ako za plen preferiraju jedinke sa višom reproduktivnom vrednošću (isto važi i za patogene i parazite). Individualna reproduktivna vrednosti ima primenu u problematici populacinog menadžmenta i konzervacione biologije. Na primer u situacijama kada želimo da odredimo kvote za odstreli ili translociramo jedinke radi osnaživanja drugih populacija. U prvoj situaciji odabraćemo jedinke sa nižom reproduktivnom vrednošću a u drugoj sa višom.</p>
              <p>Vx=t=xnltmt/lx</p>
              <p><i>x, t</i> - starost</p>
              <p><i>n</i> -  poslednja uzrasna kategorija u kojoj ima reprodukcije</p>
              
              
              <p>Relativna zastupljenost uzrasnih kategorija pokazatelj je da li će brojnost populacije opadati ili rasti. Budući da je reprodukcija ograničena samo na neke a mortalitet deluje na sve uzrasne kategorije, stopa rasta zavisiće od proporcije uzrasnih klasa. Dve populacije sa istim uzrasno specifičnim natalitetom i mortalitetom neće imati i istu stopu rasta ako imaju različitu uzrasnu strukturu. Na osnovu zastupljenosti određenih uzrasnih kategorija i parametara rasta (<i>r, λ, R</i><i>0</i>) možemo razlikovati rastuće, opadajuće i stacionarne populacije.</p>
              <p>Zastupljenost svake uzrasne kategorije se u demografskim tablicama obeležava sa <i>C</i><i>x</i> i najčešće se izražava u procentima. Za populacije gde postoji polni dimorfizam, uzrasne structure su odvojene za polove.</p>
              <p>Cx =lxe-rx0nlxe-rx</p>
              
              <p>Zastupljenost uzrasnih kategorija se grafički predstavlja pomoću uzrasnih piramida gde bazu predstavlja najmlađa a vrh najstarija uzrasna kategorija. Očekivano je da rastuće populacije imaju uzrasnu piramidu široke osnove koja se sužava pri vrhu a opadajuće obrnuto, ipak nije uvek moguće napraviti takvu generalizaciju. Populacije sa tipom preživljavanja I koje imaju veliku brojnost u prvoj uzrasnoj kategoriji (veliki broj potomaka) čak i pri vrednostima parametara rasta koji pokazuju da brojnost opada, neće imati uzrasnu piramidu “tipičnu” za opadajuće populacije. </p>
              <p>Za populacije koje imaju konstantnu procentualnu zastupljenost jedinki različitih uzrasnih klasa kažemo da imaju stabilnu uzrasnu strukturu. Ona je nepromenljiva u vremenu i nezavisna od stopa rasta. Sve populacije teže da uspostave stabilnu uzrasnu strukturu i za to im je potrebno oko 15-20 generacija bilo ko. Većina prirodnih poplacija je blizu stabilne strukture (sa odstupanjem 5-15%) koju najčešće dostižu kroz 2-3 generacije. Uslov za to je da je konačna stopa rasta (λ) konstantna i da vrednost opšteg reproduktivnog potencijala (V0) iznosi 1. Stabilnu uzrasnu strukturu mogu imati i rastuće i opadajuće i stacionarne populacije i njihove uzrasne piramide se neće menjati kroz vreme (npr. iako se menja brojnost jedinki ne menja se udeo u postreproduktivnom period u odnosu na reproduktivni).</p>
              
              <p><strong>Opšta reproduktivna vrednost (V</strong><strong>0</strong><strong>)</strong> se odnosi na čitavu populaciju i izračunava se kao suma proizvoda verovatnoće preživljavanja uzrasta x (<i>l</i><i>x</i>), uzrasno specifičnog fekunditeta (<i>m</i><i>x</i>) i faktora populacionog rasta (<i>e</i><i>-rx </i>ili <i>λ</i><i>-x</i>) tj. Odnos između doprinosa budućoj reprodukciji populacije i rasta uzrasne kategorije – populacionog segmenta. Opšta reproduktivna vrednost se izračunava prema tzv. Ojlerovoj jednačini. Jednačina je dobila ime po švajcarskom matematičaru Leonardu Ojleru (Leonard Euler, 1707-1783) koji ju je razvio za potrebe demografske analize ljudske populacije. Ova jednačina je rekurzivna odnosno posuvraća u sebe. Nema matematičko rešenje, već se rešava putem usmerenih pokušaja odnosno iteracija.  Da bi jednačnila iznosila tačno V0=1 (Fišer?) potrebno je modelirati vrednosti trenutne stope rasta. Korigovanjem vrednosti r, dobićemo novu λ vrednost (<i>λ</i><i>1</i>) za koju će data populacija imati stabilonu uzrasnu strukturu.</p>
              
              <p>V0=x=0nlxmxe-rx=1</p>
              
              <p>U okviru tablice života u delu koji se odnosi na uzrasnu strukturu možemo da uočimo vrednosti za opšti reproduktivni potencijal pre dostizanja stabilne uzrasne strukture (<i>V</i><i>0</i>)  i nakon dostizanja stabilne uzrasne strukture (<i>V</i><i>1</i>). Za populacije koje nemaju stabilnu uzrasnu strukturu (V0≠1) u demografskim tablicama je moguće korigovanje trenutne stope rasta putem iteracija kako bi opšti reproduktivni potencijal iznosio tačno 1. U okviru excel aplikacije postoji funkcija <i>Goal seek</i> koju koristimo za određivanje nove vrednosti trenutne stope rasta (<i>r</i><i>1</i>). popunjavanje završnog dela tablice počinje sa popunjavanjem kolona -x i -xlxmx. Sledeće dve kolone su identične, osim što se razlikuju u indeksu. Za njihovo popunjavanje umesto r vrednosti, koristićemo vrednost r1. To je prekopirana vrednost r koja će biti iterirana funkcijom goal seek. Iz tog razloga mora biti napisana kao broj (ili kopirana) a ne kao formula. Prve dve i druge dve kolone će za početak imati iste vrednosti i <i>V</i><i>0</i> i <i>V</i><i>1</i> će biti jednaki. Naša populacija još uvek nije dostigla stabilnu uzrasnu strukturu. Funkcija goal seek se pokreće na sledeći način: obeležavanjem vrednosti za parametar <i>V</i><i>1</i>, u traci sa funkcijama (toolbar) kliknuti na Data/What-if analysis/ Goal seek. Pojaviće se prozor u koji je potrebno postaviti uslove da ćelija <i>V</i><i>1</i> ima vrednost od tačno 1, menjajući vrednost <i>r</i><i>1</i>. Nakon toga, dobiće se nova vrednost <i>r</i><i>1</i> na osnovu koje će druge dve kolone biti izmenjene tako da suma 1-xlxmx odnosno <i>V</i><i>1</i> bude 1 tj. da populacija dostigne stabilnu uzrasnu strukturu. Ova procedura se odnosi samo na one populacije čije se početve <i>V</i><i>0</i> vrednosti razlikuju od 1. U slučaju kada je V0=1, populacija već ima stabilnu uzrasnu strukturu i nije potrebno raditi iteraciju.</p>
              
              <p>Zadaci:</p>
              <ol><li>Za sve primere kompletirati tablicu života i odrediti stabilnu uzrasnu strukturu.</li>
              <li>Za sve primere nacrtati uzrasne piramide stabilne uzrasne structure.</li></ol>
                            
              
              
              <p>Zadaci za vežbu iz uzrasne strukture (naokn sto se obrade leslie i hutch iz leslie 9)</p>
              <ol><li>Uverite se da priča o pre- i post- reproduktivnom cenzusu ima osnova, odnosno da metodske greške u uzorkovanju populacija mogu da dovedu do velikih grešaka u analizi a samim tim i do pogrešnih predviđanja i pogrešnih procena za zaštitu, eksploataciju, suzbijanje. Kako?</li></ol>
              <p>Otvorite fajl, i u sloj «tablica života» ubacite neke od vaših podataka za rastuću populaciju. Otvorite sloj «Hutch» i upoznajte se sa načinom proračuna (leva polovina je za post- desna za pre- reproduktivnu analizu). Uporedite rezultate iz leve i desne polovine. Uporedite i sa rezultatima sloja «tablica života». Za koliko se razlikuju konačne stope rastenja (kolone B i O)? Za koliko se razlikuju vektori stabilne uzrasne strukture odnosno uzrasne piramide (redovi 67-70)? Zatim u ćeliju «’tablica života'!F8» ukucajte broj 100 – time ste započeli populaciju sa kohortom od 100 novorođenih jedinki. Uporedite brojnost populacije sa leve i desne strane posle 50 vremenskih intervala (ćelije C61 i P61). Za koliko se razlikuju? Da li je ta razlika mala? Kolika je greška napravljena? Zapišite početne uslove (lx i mx režime) i odgovore na gornja pitanja.</p>
              <li>Uveriti se da populacija sa zadatim demografskim režimom dostiže stabilnu uzrasnu strukturu. Kako?</li>
              <ol><li>Ubaciti lx i mx vrednosti iz skupa demografskih scenarija kojima raspolažete (7*3 primera koje ste rešavali) u prvi sloj tabele. Ne zaboravite da upišete i vrednosti iterirane stope rasta koje služe za proračun stabilne uzrasne strukture.</li>
              <li>Uvidom u ostala dva radna sloja zapaziti da su, «u granicama nedeterminisanosti» (pre- i post-reproduktivni cenzus i drugo o čemu smo diskutovali), rezultati sva tri modela uzrasne strukture isti. </li>
              <li>Detaljno pregledati šta se dešava sa populacijom do trenutka dostizanja stabilne uzrasne strukture, kao i šta se dešava posle. </li>
              <li>Zabeležiti posle koliko vremeskih intervala se postiže stabilna uzrasna struktura. Koliko je to generacija? </li></ol>
              
              <li>U postojeću aplikaciju (fajl Leslie9) ubacite podatke za:</li>
              <ol><li>... stacionarnu populaciju, pa promenite u nekom uzrastu mx toliko da populacija postane rastuća, a zatim da postane opadajuća. Da li će dostići stabilnu uzrasnu strukturu za isto vreme?</li>
              <li>... rastuću populaciju pa povećajte mortalitet - promenite lx tako da populacija postane opadajuća (vodite računa da lx bude monotono opadajuće). Za koliko će dostići stabilnu uzrasnu strukturu?</li>
              <li>... semelparnu rastuću populaciju sa odloženom reprodukcijom, pogledajte šta se dešava, i onda menjajte reproduktivni uzrast zadržavajući istu stopu rasta. Šta se dešava?</li>
              <li>... stacionarnu iteroparnu populaciju, pa menjajte početnu uzrasnu raspodelu (podaci u ćelijama F8:F15 u sloju «tablica života»). Kako utiče početna uzrasna raspodela na krajnju uzrasnu raspodelu?</li>
              <li>... rastuću iteroparnu populaciju, a vektor početnih brojnosti podesite tako da daje invertovanu početnu uzrasnu piramidu. Šta se dešava?</li>
              <li>... semelparnu populaciju, pa menjajte početne brojnosti odnosno početnu uzrasnu raspodelu. Da li migracije (tj. reintrodukcije) mogu da promene populacionu dinamiku?</li></ol>
              <p>Rezultat 1., 2. i 3. zadatka dati u pisanoj formi u obliku izveštaja (ne kraćeg od 1 stranice) gde ćete tekstom (može i u tezama) i skicama pokazati da ste tačke 1-4 uradili. U izveštaju dajte i teksutalnu komparaciju demografskih scenarija koje ste analizirali (šta se dešava promenom tipa preživljavanja, funkcije materinstva, preklapanjem generacija).</p>
              
              <li>Odgovorite na sledeća pitanja:</li>
              <ol><li>Ako semelparna populacija ima «metapopulacionu strukturu» da li će selekcija favorizovati sinhronizovane ili nesinhronizovane deme? Zašto? A kod populacije sa strukturom «populacionog kontinuuma»?</li>
              <li>Ako populaciju ima stabilnu uzrasnu strukturu i raste, svaki segment te populacije takođe raste istom stopom. Podelimo populaciju na prereproduktivne mužjake, prereproduktivne ženke, reproduktivne mužjak, reproduktivne ženke. Promenimo karakteristike samo jednog od tih segmenta. Promena kog segmenta dovodi do najbržih i najjačih efekata na populacionu dinamiku? Zašto?</li>
              <li>Kolega tvrdi da je naseljavanje odraslih mužjaka najefikasniji način zaštite populacije vrste koja je ugrožena prekomernim trofejnim odstrelom. Da li je u pravu?</li>
              <li>Objasnite sa aspekta stabilnosti uzrasne strukture, zašto je iteroparna reprodukcija «bolja» od semelparne.</li>
              <li>Šta brže stabilizuje uzrasnu strukturu: povećanje preživljavanja ili povećanje fekunditeta? Zašto?</li>
              <li>Šta najbrže stabilizuje uzrasnu strukturu?</li></ol>
              
              <p> Reference</p>
              <ol><li>The Evolution of Senescence and Post Reproductive Lifespan in Guppies (<i>Poecilia reticulata</i>) David Reznick ,Michael Bryant,Donna HolmesPublished, 2005)</li>
              <li>Ellis, S., Franks, D. W., Nattrass, S., Cant, M. A., Bradley, D. L., Giles, D., … Croft, D. P. (2018). Postreproductive lifespans are rare in mammals. <i>Ecology and evolution</i>, <i>8</i>(5), 2482–2494. doi:10.1002/ece3.3856</li>
              <li>Jones, O., Scheuerlein, A., Salguero-Gómez, R. <i>et al.</i> Diversity of ageing across the tree of life. <i>Nature</i> 505, 169–173 (2014) doi:10.1038/nature12789</li></ol>
              `,
              podceline: []
            },
            {
              id: 'I_1_2',
              naziv: 'Demografske tablice',
              link: 'demografske-tablice',
              URL_slike: '',
              podceline: []
            },
            {
              id: 'I_1_3',
              naziv: 'Mortalitet',
              link: 'mortalitet',
              URL_slike: '',
              podceline: [
                {
                  id: 'I_1_3_1',
                  naziv: 'Tipovi preživljavanja',
                  link: 'tipovi-prezivljavanja',
                  URL_slike: '',
                  podceline: []
                }
              ]
            },
            {
              id: 'I_1_4',
              naziv: 'Natalitet',
              link: 'natalitet',
              URL_slike: '',
              podceline: []
            },
            {
              id: 'I_1_5',
              naziv: 'Uzrasna struktura',
              link: 'uzrasna-struktura',
              URL_slike: '',
              podceline: [
                {
                  id: 'I_1_5_1',
                  naziv: 'Dostizanje stabilne uzrasne strukture',
                  link: 'dostizanje-stabilne-uzrasne-strukture',
                  URL_slike: '',
                  podceline: []
                }
              ]
            }
          ]
        },
        {
          id: 'I_2',
          naziv: 'Oblast 1',
          opis: 'opis oblasti',
          link: 'oblast-1',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'I_3',
          naziv: 'Oblast 2',
          opis: 'opis oblasti',
          link: 'oblast-2',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'I_4',
          naziv: 'Oblast 3',
          opis: 'opis oblasti',
          link: 'oblast-3',
          URL_slike: '',
          programske_celine: []
        }
      ]
    },
    {
      id: 'II',
      naziv: 'Populaciona ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'populaciona-ekologija-zivotinja',
      URL_slike: '',
      oblasti: [
        {
          id: 'II_1',
          naziv: 'Oblast 1',
          opis: 'opis oblasti',
          link: 'oblast-1',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'II_2',
          naziv: 'Oblast 2',
          opis: 'opis oblasti',
          link: 'oblast-2',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'II_3',
          naziv: 'Oblast 3',
          opis: 'opis oblasti',
          link: 'oblast-3',
          URL_slike: '',
          programske_celine: []
        },
        {
          id: 'II_4',
          naziv: 'Oblast 4',
          opis: 'opis oblasti',
          link: 'oblast-4',
          URL_slike: '',
          programske_celine: []
        }
      ]
    }
  ]
};
